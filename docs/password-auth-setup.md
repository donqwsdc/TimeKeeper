# Passwort-Auth einrichten

## Passwort-Reset

In Supabase unter **Authentication -> URL Configuration**:

- Site URL: `https://donqwsdc.github.io/TimeKeeper/`
- Redirect URLs:
  - `https://donqwsdc.github.io/TimeKeeper/`
  - `https://donqwsdc.github.io/TimeKeeper/**`

TimeKeeper ruft `resetPasswordForEmail` mit `redirectTo` auf:

`https://donqwsdc.github.io/TimeKeeper/?auth=password-reset`

Der Reset-Link darf im Supabase-Mailtemplate nicht manuell auf eine feste Startseite überschrieben werden. Wenn ein angepasstes Supabase-Mailtemplate genutzt wird, muss der Bestätigungs- bzw. Recovery-Link den Redirect respektieren.

Die App erkennt zusätzlich Supabase-Recovery-Hashes wie `type=recovery`, weil Supabase die eigentlichen Recovery-Tokens im URL-Hash übergeben kann.
