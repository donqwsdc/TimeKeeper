# TimeKeeper Langzeitauswertungen

## Sichtbare Auswertungen

Projekt 7 ergaenzt die bestehende Statistikseite um eine einfache Langzeitauswertung. Die Wochenanalyse bleibt bestehen und wird nicht ersetzt.

Neu sichtbar sind:

- Zeitraum-Auswahl: aktuelle Woche, aktueller Monat, letzte 3 Monate, aktuelles Jahr und alle Daten
- Nutzerfilter: aktiver Nutzer oder alle sichtbaren Nutzer
- Monatsuebersicht mit Gesamtzeit, Anzahl Eintraegen, Durchschnitt pro erfasstem Tag, staerkster Kategorie, aktivstem Nutzer und erfassten Tagen
- Kategorieentwicklung mit Zeitanteil, Prozentwert und Anzahl Eintraegen
- Nutzervergleich, sobald mehrere sichtbare Nutzer Daten im Zeitraum haben
- Monatsverlauf mit Summe und Eintragsanzahl je Monat
- Soll/Ist-Auswertung auf Basis der vorhandenen Ziel-Arbeitszeit

## Lokale Berechnung

Die Auswertungen werden in Projekt 7 aus den lokalen `timeEntries` im Browser berechnet. Dadurch bleiben sie auch ohne Login, offline und ohne Supabase-Verbindung nutzbar.

Die App bleibt local-first:

- Timer, manuelle Eintraege, Verlauf, Kalender, Statistik, CSV-Import und CSV-Export funktionieren weiterhin lokal.
- Cloud-Sync bleibt optional und benoetigt weiterhin Login.
- Die neuen Auswertungen fuehren keine neue Supabase-Schreiblogik ein.

## Supabase Analytics-Felder

Projekt 6 hat Analytics-Felder und eine optionale Monats-View in Supabase vorbereitet. Projekt 7 nutzt diese Felder noch nicht aktiv im Frontend.

Die UI rechnet bewusst lokal, damit die Auswertung auch ohne Netzwerk funktioniert. Spaeter kann die Supabase-View fuer grosse Datenmengen oder Cloud-Dashboards genutzt werden.

## Soll/Ist

Die Sollzeit basiert auf der vorhandenen Reminder-Einstellung `targetWorkHours`.

Berechnung:

- Arbeitstage im gewaehlen Zeitraum mal Zielstunden pro Tag
- Wochenenden werden nicht als Sollzeit gerechnet
- Feiertage werden noch nicht beruecksichtigt

Der Hinweis "Sollzeit ohne Feiertage berechnet." wird deshalb in der UI angezeigt.

## Noch nicht enthalten

Nicht Bestandteil von Projekt 7 sind:

- Feiertagskalender
- Quartals- und Jahres-Dashboards mit eigenen Charttypen
- Cloud-Analytics-View als Datenquelle
- PDF-Reports
- KI-Insights
- automatische Routine-Erkennung

## Sicherheit und Sync

Das bestehende Datenmodell bleibt unveraendert:

- `owner_id` bleibt Supabase Auth User.
- `user_id` bleibt interne TimeKeeper-Person.
- `id` bleibt app-interne Objekt-ID.
- Cloud-Upserts bleiben `owner_id,id`.

Projekt 7 fuehrt keine Supabase-DELETEs, keine Secrets und keine Service-Role-Logik ein.
