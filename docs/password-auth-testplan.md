# Passwort-Auth Testplan

## Passwort-Reset-Test

1. Ausgeloggt sein.
2. "Passwort vergessen" öffnen.
3. E-Mail eingeben.
4. Reset-Mail anfordern.
5. Link aus der Mail öffnen.
6. Erwartung:
   - App öffnet Einstellungen.
   - Cloud-Bereich ist geöffnet.
   - "Passwort ändern" ist sichtbar.
   - Meldung: "Bitte vergib ein neues Passwort."
7. Neues Passwort setzen.
8. Erwartung:
   - Meldung: "Passwort wurde geändert."
   - URL ist bereinigt.
   - Login mit neuem Passwort funktioniert.

## Regression

- Normaler Passwort-Login funktioniert weiterhin.
- Magic-Link-Login funktioniert weiterhin.
- Es werden keine Passwörter in `localStorage` gespeichert.
- Es werden keine Supabase-DELETEs ausgeführt.
