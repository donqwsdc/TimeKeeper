# Testplan: Analytics-Modell Projekt 6

## A. Migration ausfuehren

1. `supabase/project-6-analytics-model.sql` im Supabase SQL Editor ausfuehren.
2. Pruefen, dass die Migration ohne Fehler durchlaeuft.
3. Erwartung: Keine bestehenden Daten werden geloescht oder umbenannt.

## B. Spalten pruefen

SQL:

```sql
select column_name, data_type
from information_schema.columns
where table_schema = 'public'
  and table_name = 'time_entries'
  and column_name in (
    'year',
    'quarter',
    'month',
    'calendar_week',
    'weekday',
    'is_weekend',
    'duration_hours',
    'activity_normalized',
    'category_normalized'
  )
order by column_name;
```

Erwartung: Alle neun Analytics-Spalten sind vorhanden.

## C. Bestehende Daten pruefen

SQL:

```sql
select
  id,
  started_at,
  duration_minutes,
  year,
  quarter,
  month,
  calendar_week,
  weekday,
  is_weekend,
  duration_hours,
  activity_normalized,
  category_normalized
from public.time_entries
order by started_at desc
limit 20;
```

Erwartung: Bestehende Eintraege haben Analytics-Felder, sofern `started_at` und `duration_minutes` vorhanden sind.

## D. Neuer Eintrag aus der App

1. App oeffnen.
2. In Supabase einloggen.
3. Einen Zeiteintrag erstellen.
4. Cloud-Sichern ausfuehren.
5. Supabase pruefen:
   - `year` ist gesetzt.
   - `month` ist gesetzt.
   - `calendar_week` ist gesetzt.
   - `duration_hours` ist gesetzt.
   - `activity_normalized` ist gesetzt.
   - `category_normalized` ist gesetzt.

## E. Update-Test

1. Einen bestehenden Eintrag in der App bearbeiten.
2. Cloud-Sichern ausfuehren.
3. Den Datensatz in Supabase erneut pruefen.

Erwartung: `updated_at` und die Analytics-Felder bleiben konsistent. Geaenderte Aktivitaeten oder Kategorien werden in den normalisierten Feldern aktualisiert.

## F. RLS-Test

1. Mit Account A einloggen und Eintraege sichern.
2. Mit Account B einloggen und Eintraege sichern.
3. In beiden Accounts Cloud-Laden ausfuehren.

Erwartung:

- Account A sieht nur Daten mit `owner_id = auth.uid()` von Account A.
- Account B sieht nur Daten mit `owner_id = auth.uid()` von Account B.
- `user_id` bleibt die interne TimeKeeper-Person, z. B. `user_1`.
- Die Projekt-6-Felder aendern nichts an der Owner-Isolation.

## G. View-Test

SQL:

```sql
select
  owner_id,
  user_id,
  year,
  month,
  category_normalized,
  category_label,
  entry_count,
  total_minutes,
  total_hours,
  first_entry_at,
  last_entry_at
from public.time_entry_analytics_monthly
order by year desc, month desc, category_normalized
limit 20;
```

Erwartung:

- Monatswerte werden pro `owner_id`, `user_id` und Kategorie gruppiert.
- `total_minutes` und `total_hours` passen zu den Rohdaten.
- Keine fremden `owner_id`-Daten sind sichtbar.
- Falls Soft-Delete-Felder vorhanden sind, werden Zeilen mit `deleted_at is not null` nicht mitgezaehlt.

## H. Frontend-Kompatibilitaet

1. App ohne Login oeffnen.
2. Timer starten, stoppen und speichern.
3. Manuellen Eintrag anlegen.
4. Verlauf, Kalender, Statistik und CSV-Export pruefen.

Erwartung: Lokale Nutzung funktioniert unveraendert, weil LocalStorage keine Analytics-Felder benoetigt.

## I. CSV-Kompatibilitaet

1. CSV exportieren.
2. CSV wieder importieren.
3. Cloud-Sichern ausfuehren.

Erwartung:

- CSV-Import und CSV-Export bleiben unveraendert nutzbar.
- Neue oder importierte Cloud-Datensaetze erhalten Analytics-Felder durch den Datenbank-Trigger.
