-- Projekt 6: Datenmodell fuer Langzeitauswertungen vorbereiten.
--
-- Diese Migration ist nicht-destruktiv:
-- - keine vorhandenen Spalten werden entfernt oder umbenannt
-- - keine Daten werden geloescht
-- - RLS-Policies und DELETE-Sperren bleiben unveraendert
-- - owner_id, user_id, id und row_id behalten ihre bestehende Bedeutung

alter table public.time_entries
  add column if not exists year integer,
  add column if not exists quarter integer,
  add column if not exists month integer,
  add column if not exists calendar_week integer,
  add column if not exists weekday integer,
  add column if not exists is_weekend boolean,
  add column if not exists duration_hours numeric(10,2),
  add column if not exists activity_normalized text,
  add column if not exists category_normalized text;

create or replace function public.set_time_entry_analytics_fields()
returns trigger
language plpgsql
as $$
declare
  entry_weekday integer;
begin
  if new.started_at is not null then
    entry_weekday := extract(isodow from new.started_at)::integer;

    new.year := extract(year from new.started_at)::integer;
    new.quarter := extract(quarter from new.started_at)::integer;
    new.month := extract(month from new.started_at)::integer;
    new.calendar_week := extract(week from new.started_at)::integer;
    new.weekday := entry_weekday;
    new.is_weekend := entry_weekday in (6, 7);
  else
    new.year := null;
    new.quarter := null;
    new.month := null;
    new.calendar_week := null;
    new.weekday := null;
    new.is_weekend := null;
  end if;

  if new.duration_minutes is not null then
    new.duration_hours := round(new.duration_minutes::numeric / 60.0, 2);
  else
    new.duration_hours := null;
  end if;

  new.activity_normalized := nullif(lower(trim(coalesce(new.activity, ''))), '');
  new.category_normalized := nullif(lower(trim(coalesce(new.category, ''))), '');

  return new;
end;
$$;

drop trigger if exists set_time_entry_analytics_fields_trigger on public.time_entries;

create trigger set_time_entry_analytics_fields_trigger
before insert or update on public.time_entries
for each row
execute function public.set_time_entry_analytics_fields();

update public.time_entries
set
  year = case when started_at is null then null else extract(year from started_at)::integer end,
  quarter = case when started_at is null then null else extract(quarter from started_at)::integer end,
  month = case when started_at is null then null else extract(month from started_at)::integer end,
  calendar_week = case when started_at is null then null else extract(week from started_at)::integer end,
  weekday = case when started_at is null then null else extract(isodow from started_at)::integer end,
  is_weekend = case when started_at is null then null else extract(isodow from started_at)::integer in (6, 7) end,
  duration_hours = case when duration_minutes is null then null else round(duration_minutes::numeric / 60.0, 2) end,
  activity_normalized = nullif(lower(trim(coalesce(activity, ''))), ''),
  category_normalized = nullif(lower(trim(coalesce(category, ''))), '');

create index if not exists time_entries_owner_year_idx
  on public.time_entries (owner_id, year);

create index if not exists time_entries_owner_year_month_idx
  on public.time_entries (owner_id, year, month);

create index if not exists time_entries_owner_year_week_idx
  on public.time_entries (owner_id, year, calendar_week);

create index if not exists time_entries_owner_user_year_month_idx
  on public.time_entries (owner_id, user_id, year, month);

create index if not exists time_entries_owner_category_year_month_idx
  on public.time_entries (owner_id, category_normalized, year, month);

create index if not exists time_entries_owner_started_at_idx
  on public.time_entries (owner_id, started_at desc);

-- Die View ist eine technische Vorbereitung fuer spaetere Dashboards.
-- Sie wird im Frontend noch nicht verwendet. security_invoker sorgt dafuer,
-- dass RLS der Basistabelle auch fuer View-Abfragen wirksam bleibt.
do $$
begin
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'time_entries'
      and column_name = 'deleted_at'
  ) then
    execute $view$
      create or replace view public.time_entry_analytics_monthly
      with (security_invoker = true)
      as
      select
        owner_id,
        user_id,
        year,
        month,
        category_normalized,
        max(category) as category_label,
        count(*)::integer as entry_count,
        coalesce(sum(duration_minutes), 0)::integer as total_minutes,
        round(coalesce(sum(duration_minutes), 0)::numeric / 60.0, 2) as total_hours,
        min(started_at) as first_entry_at,
        max(started_at) as last_entry_at
      from public.time_entries
      where deleted_at is null
      group by owner_id, user_id, year, month, category_normalized
    $view$;
  else
    execute $view$
      create or replace view public.time_entry_analytics_monthly
      with (security_invoker = true)
      as
      select
        owner_id,
        user_id,
        year,
        month,
        category_normalized,
        max(category) as category_label,
        count(*)::integer as entry_count,
        coalesce(sum(duration_minutes), 0)::integer as total_minutes,
        round(coalesce(sum(duration_minutes), 0)::numeric / 60.0, 2) as total_hours,
        min(started_at) as first_entry_at,
        max(started_at) as last_entry_at
      from public.time_entries
      group by owner_id, user_id, year, month, category_normalized
    $view$;
  end if;
end $$;
