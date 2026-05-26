-- Projekt 5: Vorbereitung fuer spaetere Soft-Delete-Flows.
--
-- Diese Migration loescht keine Daten und fuehrt keine DELETE-Policies ein.
-- Die App verwendet diese Felder in Projekt 5 noch nicht produktiv.

alter table public.users
  add column if not exists deleted_at timestamptz,
  add column if not exists deleted_by uuid references auth.users(id),
  add column if not exists deleted_reason text;

alter table public.categories
  add column if not exists deleted_at timestamptz,
  add column if not exists deleted_by uuid references auth.users(id),
  add column if not exists deleted_reason text;

alter table public.time_entries
  add column if not exists deleted_at timestamptz,
  add column if not exists deleted_by uuid references auth.users(id),
  add column if not exists deleted_reason text;

create index if not exists users_owner_deleted_idx
  on public.users (owner_id, deleted_at);

create index if not exists categories_owner_deleted_idx
  on public.categories (owner_id, deleted_at);

create index if not exists time_entries_owner_deleted_idx
  on public.time_entries (owner_id, deleted_at);

-- DELETE bleibt weiterhin gesperrt. Spaetere Admin-/Soft-Delete-Flows
-- koennen diese Felder ueber geschuetzte Rechte, RPC oder Edge Functions nutzen.
