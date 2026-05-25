-- Projekt 3: Supabase Auth / owner_id-Isolation
--
-- Zielmodell:
-- - row_id: technische Datenbank-ID und Primary Key
-- - owner_id: Supabase Auth User, trennt Cloud-Accounts
-- - id: app-interne TimeKeeper-ID, z. B. user_1 oder ein lokaler Entry-Key
-- - user_id: interne TimeKeeper-Person innerhalb eines Accounts, z. B. user_1
--
-- Wichtig fuer bestehende Daten:
-- Diese Migration loescht keine vorhandenen Testdaten. Falls bereits Zeilen mit
-- owner_id = null existieren, werden sie durch die neuen RLS-Policies unsichtbar.
-- Dann zuerst bewusst migrieren oder archivieren und diese Datei erneut ausfuehren,
-- damit owner_id abschliessend NOT NULL werden kann.

create extension if not exists pgcrypto;

alter table public.users
  add column if not exists row_id uuid default gen_random_uuid();

alter table public.categories
  add column if not exists row_id uuid default gen_random_uuid();

alter table public.time_entries
  add column if not exists row_id uuid default gen_random_uuid();

alter table public.users
  add column if not exists owner_id uuid references auth.users(id) on delete cascade;

alter table public.categories
  add column if not exists owner_id uuid references auth.users(id) on delete cascade;

alter table public.time_entries
  add column if not exists owner_id uuid references auth.users(id) on delete cascade;

update public.users set row_id = gen_random_uuid() where row_id is null;
update public.categories set row_id = gen_random_uuid() where row_id is null;
update public.time_entries set row_id = gen_random_uuid() where row_id is null;

alter table public.users alter column row_id set not null;
alter table public.categories alter column row_id set not null;
alter table public.time_entries alter column row_id set not null;

alter table public.users alter column id set not null;
alter table public.categories alter column id set not null;
alter table public.time_entries alter column id set not null;

do $$
begin
  if exists (select 1 from public.users where owner_id is null) then
    raise notice 'public.users enthaelt owner_id = null. owner_id wird noch nicht NOT NULL gesetzt.';
  else
    alter table public.users alter column owner_id set not null;
  end if;

  if exists (select 1 from public.categories where owner_id is null) then
    raise notice 'public.categories enthaelt owner_id = null. owner_id wird noch nicht NOT NULL gesetzt.';
  else
    alter table public.categories alter column owner_id set not null;
  end if;

  if exists (select 1 from public.time_entries where owner_id is null) then
    raise notice 'public.time_entries enthaelt owner_id = null. owner_id wird noch nicht NOT NULL gesetzt.';
  else
    alter table public.time_entries alter column owner_id set not null;
  end if;
end $$;

-- Alte user_id -> users(id)-Foreign-Keys sind nicht mehr mandantenfaehig,
-- weil users.id app-intern ist und pro owner_id wiederverwendet werden darf.
do $$
declare
  fk_record record;
begin
  for fk_record in
    select conrelid::regclass::text as table_name, conname
    from pg_constraint
    where contype = 'f'
      and confrelid = 'public.users'::regclass
      and conrelid in ('public.categories'::regclass, 'public.time_entries'::regclass)
  loop
    execute format('alter table %s drop constraint if exists %I', fk_record.table_name, fk_record.conname);
  end loop;
end $$;

-- Primary Keys auf id werden durch row_id ersetzt. Falls dieser Schritt wegen
-- unerwarteter Abhaengigkeiten scheitert: betroffene FK/Views im SQL Editor
-- pruefen, nicht blind Daten loeschen.
do $$
declare
  pk_record record;
begin
  for pk_record in
    select conrelid::regclass::text as table_name, conname
    from pg_constraint
    where contype = 'p'
      and conrelid in ('public.users'::regclass, 'public.categories'::regclass, 'public.time_entries'::regclass)
  loop
    execute format('alter table %s drop constraint if exists %I', pk_record.table_name, pk_record.conname);
  end loop;
end $$;

alter table public.users
  add constraint users_pkey primary key (row_id);

alter table public.categories
  add constraint categories_pkey primary key (row_id);

alter table public.time_entries
  add constraint time_entries_pkey primary key (row_id);

alter table public.users
  drop constraint if exists users_owner_app_id_unique,
  add constraint users_owner_app_id_unique unique (owner_id, id);

alter table public.categories
  drop constraint if exists categories_owner_app_id_unique,
  add constraint categories_owner_app_id_unique unique (owner_id, id);

alter table public.time_entries
  drop constraint if exists time_entries_owner_app_id_unique,
  add constraint time_entries_owner_app_id_unique unique (owner_id, id);

alter table public.categories
  drop constraint if exists categories_owner_user_fk,
  add constraint categories_owner_user_fk
    foreign key (owner_id, user_id)
    references public.users (owner_id, id)
    on delete cascade;

alter table public.time_entries
  drop constraint if exists time_entries_owner_user_fk,
  add constraint time_entries_owner_user_fk
    foreign key (owner_id, user_id)
    references public.users (owner_id, id)
    on delete cascade;

drop index if exists public.categories_user_name_unique;
drop index if exists public.categories_legacy_user_name_unique;
drop index if exists public.categories_owner_user_name_unique;

create unique index categories_owner_user_name_unique
  on public.categories (owner_id, user_id, lower(name));

create index if not exists users_owner_idx
  on public.users (owner_id);

create index if not exists users_owner_id_idx
  on public.users (owner_id, id);

create index if not exists categories_owner_idx
  on public.categories (owner_id);

create index if not exists categories_owner_user_sort_idx
  on public.categories (owner_id, user_id, sort_order);

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
  using (auth.uid() is not null and owner_id = auth.uid());

create policy users_insert_owner
  on public.users
  for insert
  to authenticated
  with check (auth.uid() is not null and owner_id = auth.uid());

create policy users_update_owner
  on public.users
  for update
  to authenticated
  using (auth.uid() is not null and owner_id = auth.uid())
  with check (auth.uid() is not null and owner_id = auth.uid());

create policy categories_select_owner
  on public.categories
  for select
  to authenticated
  using (auth.uid() is not null and owner_id = auth.uid());

create policy categories_insert_owner
  on public.categories
  for insert
  to authenticated
  with check (auth.uid() is not null and owner_id = auth.uid());

create policy categories_update_owner
  on public.categories
  for update
  to authenticated
  using (auth.uid() is not null and owner_id = auth.uid())
  with check (auth.uid() is not null and owner_id = auth.uid());

create policy time_entries_select_owner
  on public.time_entries
  for select
  to authenticated
  using (auth.uid() is not null and owner_id = auth.uid());

create policy time_entries_insert_owner
  on public.time_entries
  for insert
  to authenticated
  with check (auth.uid() is not null and owner_id = auth.uid());

create policy time_entries_update_owner
  on public.time_entries
  for update
  to authenticated
  using (auth.uid() is not null and owner_id = auth.uid())
  with check (auth.uid() is not null and owner_id = auth.uid());

-- Keine DELETE-Grants und keine DELETE-Policies:
-- DELETE bleibt auch fuer authenticated gesperrt.
