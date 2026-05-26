# TimeKeeper Analytics-Modell

## Ziel von Projekt 6

Projekt 6 bereitet das Supabase-Datenmodell fuer Langzeitauswertungen vor, ohne die bestehende local-first App-Logik zu veraendern. Die App speichert und synchronisiert weiterhin rohe Zeiteintraege. Supabase ergaenzt daraus technische Analytics-Felder, die spaeter fuer Wochen-, Monats-, Quartals- und Jahresvergleiche genutzt werden koennen.

Es werden keine bestehenden Daten geloescht, keine Spalten umbenannt und keine Cloud-DELETEs eingefuehrt.

## Neue Felder in `public.time_entries`

Die Migration `supabase/project-6-analytics-model.sql` ergaenzt folgende nullable Spalten:

- `year integer`
- `quarter integer`
- `month integer`
- `calendar_week integer`
- `weekday integer`
- `is_weekend boolean`
- `duration_hours numeric(10,2)`
- `activity_normalized text`
- `category_normalized text`

Diese Felder sind primaer fuer Cloud-Auswertungen gedacht. Die LocalStorage-Struktur bleibt unveraendert.

## Berechnung

Die Felder werden aus bestehenden Zeiteintragsdaten berechnet:

- `year`: Kalenderjahr aus `started_at`
- `quarter`: Quartal aus `started_at`
- `month`: Monat aus `started_at`
- `calendar_week`: Kalenderwoche aus `started_at`
- `weekday`: ISO-Wochentag aus `started_at`, Montag = 1 und Sonntag = 7
- `is_weekend`: `true` bei Samstag oder Sonntag
- `duration_hours`: `duration_minutes / 60.0`, gerundet auf 2 Nachkommastellen
- `activity_normalized`: `lower(trim(activity))`
- `category_normalized`: `lower(trim(category))`

Bestehende Eintraege werden beim Ausfuehren der Migration nachbefuellt. Neue und geaenderte Eintraege werden ueber den Trigger `set_time_entry_analytics_fields_trigger` automatisch aktualisiert.

## Warum Supabase statt LocalStorage?

Langzeitauswertungen ueber viele Monate oder Jahre sollen spaeter nicht jedes Mal teuer aus allen Rohdaten im Browser berechnet werden. Die Analytics-Felder liegen deshalb in Supabase, wo sie indexiert und aggregiert werden koennen. Die lokale App bleibt schlank und funktioniert weiterhin vollstaendig ohne Login.

Das Frontend nutzt diese Felder in Projekt 6 noch nicht aktiv. `createSupabaseTimeEntryRecord` muss sie nicht setzen, weil die Datenbankfunktion `public.set_time_entry_analytics_fields()` diese Aufgabe uebernimmt.

## Indizes

Die Migration ergaenzt folgende Indizes fuer spaetere Auswertungen:

- `time_entries_owner_year_idx` auf `(owner_id, year)`
- `time_entries_owner_year_month_idx` auf `(owner_id, year, month)`
- `time_entries_owner_year_week_idx` auf `(owner_id, year, calendar_week)`
- `time_entries_owner_user_year_month_idx` auf `(owner_id, user_id, year, month)`
- `time_entries_owner_category_year_month_idx` auf `(owner_id, category_normalized, year, month)`
- `time_entries_owner_started_at_idx` auf `(owner_id, started_at desc)`

Damit werden Monats-, Wochen-, Nutzer- und Kategorieauswertungen innerhalb eines Supabase-Accounts vorbereitet.

## Monats-View

Die View `public.time_entry_analytics_monthly` fasst Zeiteintraege monatlich nach `owner_id`, `user_id` und Kategorie zusammen.

Sie enthaelt:

- `owner_id`
- `user_id`
- `year`
- `month`
- `category_normalized`
- `category_label`
- `entry_count`
- `total_minutes`
- `total_hours`
- `first_entry_at`
- `last_entry_at`

Wenn `deleted_at` bereits existiert, filtert die View Soft-Deletes mit `deleted_at is null`. Die View wird mit `security_invoker = true` erstellt, damit RLS der Basistabelle erhalten bleibt.

## Vorbereitete Auswertungen

Das Modell bereitet unter anderem diese spaeteren Features vor:

- Wochen-, Monats-, Quartals- und Jahresvergleiche
- Entwicklung der Arbeitszeit ueber laengere Zeitraeume
- Kategorieentwicklung ueber Monate
- Nutzervergleiche innerhalb eines Accounts
- Soll/Ist- und Kapazitaetsauswertungen
- Erkennung wiederkehrender Taetigkeiten
- laengere Exporte und Dashboard-Abfragen ohne teure Live-Berechnung aus Rohdaten

## Sicherheitsrahmen

Das bestehende Datenmodell bleibt erhalten:

- `owner_id` ist der Supabase Auth User.
- `user_id` bleibt die interne TimeKeeper-Person, z. B. `user_1` bis `user_25`.
- `id` bleibt die app-interne Objekt-ID.
- `row_id` bleibt die technische Datenbank-ID.

RLS wird durch Projekt 6 nicht geschwaecht. Cloud-DELETE bleibt gesperrt. Die Migration fuehrt keine DELETE-Policies und keine Service-Role-Logik ein.
