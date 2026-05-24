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

Echte User-Isolation folgt in Projekt 3. Dafür braucht die App eine stabile Auth- oder Team-Identität, damit RLS-Policies Datenzugriff pro Nutzer, Team oder Organisation sicher einschränken können.
