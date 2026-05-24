-- Projekt 3: Supabase Auth / owner_id-Isolation
-- user_id bleibt die interne TimeKeeper-Person (user_1 bis user_25).
-- owner_id ist der Supabase Auth User und wird für RLS verwendet.

alter table public.users
  add column if not exists owner_id uuid references auth.users(id) on delete cascade;

alter table public.categories
  add column if not exists owner_id uuid references auth.users(id) on delete cascade;

alter table public.time_entries
  add column if not exists owner_id uuid references auth.users(id) on delete cascade;

create index if not exists users_owner_idx
  on public.users (owner_id);

create index if not exists users_owner_id_idx
  on public.users (owner_id, id);

create index if not exists categories_owner_idx
  on public.categories (owner_id);

create index if not exists categories_owner_user_sort_idx
  on public.categories (owner_id, user_id, sort_order);

drop index if exists public.categories_user_name_unique;

create unique index if not exists categories_owner_user_name_unique
  on public.categories (owner_id, user_id, lower(name))
  where owner_id is not null;

create unique index if not exists categories_legacy_user_name_unique
  on public.categories (user_id, lower(name))
  where owner_id is null;

create index if not exists time_entries_owner_idx
  on public.time_entries (owner_id);

create index if not exists time_entries_owner_user_started_idx
  on public.time_entries (owner_id, user_id, started_at desc);

do $$
declare
  policy_record record;
begin
  for policy_record in
    select schemaname, tablename, policyname
    from pg_policies
    where schemaname = 'public'
      and tablename in ('users', 'categories', 'time_entries')
  loop
    execute format(
      'drop policy if exists %I on %I.%I',
      policy_record.policyname,
      policy_record.schemaname,
      policy_record.tablename
    );
  end loop;
end $$;

alter table public.users enable row level security;
alter table public.categories enable row level security;
alter table public.time_entries enable row level security;

revoke all on table public.users from anon;
revoke all on table public.categories from anon;
revoke all on table public.time_entries from anon;

revoke all on table public.users from authenticated;
revoke all on table public.categories from authenticated;
revoke all on table public.time_entries from authenticated;

grant select, insert, update on table public.users to authenticated;
grant select, insert, update on table public.categories to authenticated;
grant select, insert, update on table public.time_entries to authenticated;

create policy users_select_owner
  on public.users
  for select
  to authenticated
  using (owner_id = auth.uid());

create policy users_insert_owner
  on public.users
  for insert
  to authenticated
  with check (owner_id = auth.uid());

create policy users_update_owner
  on public.users
  for update
  to authenticated
  using (owner_id = auth.uid())
  with check (owner_id = auth.uid());

create policy categories_select_owner
  on public.categories
  for select
  to authenticated
  using (owner_id = auth.uid());

create policy categories_insert_owner
  on public.categories
  for insert
  to authenticated
  with check (owner_id = auth.uid());

create policy categories_update_owner
  on public.categories
  for update
  to authenticated
  using (owner_id = auth.uid())
  with check (owner_id = auth.uid());

create policy time_entries_select_owner
  on public.time_entries
  for select
  to authenticated
  using (owner_id = auth.uid());

create policy time_entries_insert_owner
  on public.time_entries
  for insert
  to authenticated
  with check (owner_id = auth.uid());

create policy time_entries_update_owner
  on public.time_entries
  for update
  to authenticated
  using (owner_id = auth.uid())
  with check (owner_id = auth.uid());

-- Keine DELETE-Policies: DELETE bleibt auch für authenticated gesperrt.
