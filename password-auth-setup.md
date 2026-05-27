# Passwort-Auth Setup

## Supabase Authentication

- E-Mail/Passwort-Login muss in Supabase Authentication aktiviert sein.
- Magic-Link kann als alternative Anmeldung und Fallback aktiv bleiben.
- Redirect URLs muessen auf die GitHub-Pages-App zeigen.

Empfohlene Redirect URLs:

- `https://donqwsdc.github.io/TimeKeeper/`
- `https://donqwsdc.github.io/TimeKeeper/**`

## Passwort-Reset

- Passwort-Reset-E-Mails muessen auf die App zurueckfuehren.
- Die App verwendet fuer Passwort-Reset-Links den Hash `#password-reset`.
- Je nach Supabase-Einstellung muss die E-Mail-Adresse nach der Registrierung bestaetigt werden, bevor ein Login moeglich ist.

## Sicherheit

- Die App speichert keine Passwoerter.
- Passwoerter werden nicht in `localStorage` geschrieben.
- Passwoerter werden nicht in Supabase-Tabellen gespeichert.
- Der Login erfolgt ausschliesslich ueber Supabase Auth.
- Im Frontend duerfen keine Service-Role-Keys oder andere Secrets verwendet werden.
