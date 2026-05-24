# TimeKeeper Backend Security

## Projekt 2: RLS-MVP-Modus

TimeKeeper bleibt aktuell eine statische Browser-App mit localStorage-first-Datenhaltung und optionalem Supabase-Sync. Es gibt noch keine echte Supabase-Auth und keine belastbare Mandanten- oder Team-Identität im Client.

Für den MVP-Kompatibilitätsmodus ist Row Level Security so ausgelegt:

- `SELECT` ist für `anon` und `authenticated` erlaubt.
- `INSERT` ist für `anon` und `authenticated` erlaubt.
- `UPDATE` ist für `anon` und `authenticated` erlaubt.
- `DELETE` ist für `anon` und `authenticated` bewusst gesperrt.

Damit funktionieren Startup-Sync, Cloud-Sichern und Cloud-Laden weiterhin mit dem öffentlichen Browser-Client. Gleichzeitig sind Cloud-Massenlöschungen über diesen Client nicht mehr möglich.

## Cloud-Reset

Cloud-Reset-Aktionen sind in der App deaktiviert. Die bisherigen lokalen Reset-Funktionen bleiben verfügbar, aber Cloud-Löschungen werden nicht mehr über sichtbare UI-Buttons angeboten.

Falls alte UI-Elemente oder direkte Handler-Aufrufe trotzdem ausgelöst werden, zeigt die App nur eine Sicherheitsmeldung und führt keine Cloud-Löschung aus:

> Cloud-Reset ist aus Sicherheitsgründen deaktiviert.

Cloud-Reset wird später als geschützte Admin-Funktion neu aufgebaut.

## Projekt 3

Projekt 3 führt Supabase Auth als Grundlage für echte Cloud-Isolation ein.

- `user_id` bleibt die interne TimeKeeper-Person innerhalb eines Accounts oder Teams, zum Beispiel `user_1` bis `user_25`.
- `owner_id` ist der Supabase Auth User (`auth.users.id`) und steuert den Cloud-Zugriff.
- RLS-Policies erlauben `SELECT`, `INSERT` und `UPDATE` nur für `authenticated`, wenn `owner_id = auth.uid()` gilt.
- `anon` hat keinen Zugriff mehr auf `users`, `categories` und `time_entries`.
- `DELETE` bleibt auch für `authenticated` gesperrt.
- Cloud-Reset bleibt bis zur Einführung geschützter Admin-Rechte deaktiviert.

Die Migration liegt in `supabase/project-3-auth.sql`. Bestehende Cloud-Daten mit `owner_id = null` werden nicht automatisch gelöscht. Nach dem Login kann die App lokale Daten erneut mit der `owner_id` des angemeldeten Users hochladen.
