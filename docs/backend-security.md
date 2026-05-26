# TimeKeeper Backend Security

## Projekt 2: RLS-MVP-Modus

TimeKeeper blieb in Projekt 2 eine statische Browser-App mit localStorage-first-Datenhaltung und optionalem Supabase-Sync. Ohne echte Supabase-Auth war Row Level Security noch als MVP-Kompatibilitätsmodus ausgelegt:

- `SELECT` war für `anon` und `authenticated` erlaubt.
- `INSERT` war für `anon` und `authenticated` erlaubt.
- `UPDATE` war für `anon` und `authenticated` erlaubt.
- `DELETE` war für `anon` und `authenticated` bewusst gesperrt.

So konnten Startup-Sync, Cloud-Sichern und Cloud-Laden weiter mit dem öffentlichen Browser-Client funktionieren. Cloud-Massenlöschungen über diesen Client wurden bereits gesperrt.

## Projekt 3: Auth und Owner-Isolation

Projekt 3 führt Supabase Auth als Grundlage für echte Cloud-Isolation ein. Die Datenbank trennt technische, app-interne und Auth-bezogene IDs klar:

- `row_id` ist die technische Datenbank-ID und der Primary Key.
- `id` ist die app-interne TimeKeeper-ID. Sie darf nicht global eindeutig sein.
- `owner_id` ist der Supabase Auth User (`auth.users.id`) und trennt Cloud-Accounts.
- `user_id` bleibt die interne TimeKeeper-Person innerhalb eines Accounts oder Teams, zum Beispiel `user_1` bis `user_25`.

Upserts verwenden deshalb immer den zusammengesetzten Konfliktschlüssel `owner_id,id`. Ein einzelnes `id` reicht nicht, weil mehrere Supabase-Accounts dieselben internen IDs wie `user_1`, `user_1_organisation` oder lokale Entry-IDs verwenden dürfen.

Die Migration liegt in `supabase/project-3-auth.sql` und setzt das Zielmodell:

- `row_id uuid primary key default gen_random_uuid()`
- `owner_id uuid not null references auth.users(id) on delete cascade`
- `id text not null`
- `unique(owner_id, id)`
- für Kategorien zusätzlich `unique(owner_id, user_id, lower(name))`

Bestehende Cloud-Daten mit `owner_id = null` werden nicht automatisch gelöscht. Nach dem RLS-Wechsel sind sie nicht mehr öffentlich sichtbar. Falls solche Daten übernommen werden sollen, müssen sie bewusst einem Auth-User zugeordnet werden.

## RLS-Regeln

Für `public.users`, `public.categories` und `public.time_entries` gilt nach Projekt 3:

- `anon` hat keinen Zugriff.
- `authenticated` darf `SELECT` nur mit `auth.uid() is not null and owner_id = auth.uid()`.
- `authenticated` darf `INSERT` nur mit `auth.uid() is not null and owner_id = auth.uid()`.
- `authenticated` darf `UPDATE` nur mit `auth.uid() is not null and owner_id = auth.uid()`.
- `DELETE` bleibt ohne Grant und ohne Policy gesperrt.

Cloud-Reset bleibt bis zur Einführung geschützter Admin-Rechte deaktiviert.
