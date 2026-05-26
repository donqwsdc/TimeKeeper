# TimeKeeper Reset- und Delete-Policy

## Grundsatz

TimeKeeper bleibt local-first. Lokale Reset- und Loeschaktionen betreffen nur den Browser-Speicher auf dem aktuellen Geraet.

## Lokale Daten

- Ein lokaler Reset loescht Daten nur aus `localStorage`.
- Der Reset fuer eine ausgewaehlte Person entfernt nur lokale Zeiteintraege dieser internen TimeKeeper-Person.
- Der Reset fuer alle Personen entfernt lokale Zeiteintraege aller Personen auf diesem Geraet.
- Einzelne Verlaufseintraege werden nur lokal entfernt.
- Lokale Reset- und Loeschaktionen werden in `timekeeper.auditLog.v1` protokolliert.

## Cloud-Daten

- Cloud-Reset ist deaktiviert.
- Supabase `DELETE` bleibt gesperrt.
- Das Frontend fuehrt keine Supabase-DELETEs aus.
- Es gibt keinen Service Role Key im Frontend.
- Es werden keine Secrets im Repository gespeichert.

## Wiederkehr lokal geloeschter Eintraege

Ein lokal geloeschter Eintrag wird nicht automatisch in der Cloud geloescht. Wenn derselbe Eintrag noch in Supabase existiert, kann er bei einem spaeteren Cloud-Laden wieder lokal erscheinen. Das ist in Projekt 5 gewollt, solange noch kein Soft-Delete-Konzept aktiv ist.

## Soft-Delete-Vorbereitung

Die Datei `supabase/project-5-soft-delete-prep.sql` bereitet Felder fuer spaetere Soft-Delete-Flows vor:

- `deleted_at`
- `deleted_by`
- `deleted_reason`

Diese Felder sind vorbereitet, werden in der App aber noch nicht produktiv verwendet. Spaetere Admin-Rechte, RPCs oder Edge Functions koennen darauf aufbauen.
