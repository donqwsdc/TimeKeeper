# Passwort-Auth Testplan

## A. Registrierung

- Neue E-Mail und Passwort eingeben.
- Erwartung: Konto wird erstellt oder E-Mail-Bestaetigung wird angefordert.
- Erwartung: Passwort wird nicht in `localStorage` gespeichert.

## B. Login mit E-Mail und Passwort

- E-Mail und Passwort eingeben.
- Erwartung: Login erfolgreich, Cloud-Sichern und Cloud-Laden sind aktiv.

## C. Falsches Passwort

- Falsches Passwort eingeben.
- Erwartung: neutrale Fehlermeldung.

## D. Passwort vergessen

- E-Mail eingeben.
- Erwartung: Passwort-Link wird angefordert.
- Erwartung: Keine Aussage, ob das Konto existiert.

## E. Passwort ändern über Reset-Link

- Reset-Link öffnen.
- Neues Passwort setzen.
- Erwartung: Passwort geändert, Login danach möglich.

## F. Passwort ändern im eingeloggten Zustand

- Neues Passwort setzen.
- Ausloggen.
- Mit neuem Passwort einloggen.

## G. Magic-Link-Fallback

- Alternative Anmeldung testen.
- Erwartung: Funktion bleibt verfügbar.

## H. Geräteübergreifend

- Gerät A: einloggen, Daten sichern.
- Gerät B: mit E-Mail und Passwort einloggen, Daten laden.
- Erwartung: Daten sind sichtbar, `owner_id` ist identisch.

## I. Rate-Limit

- Mehrfach per Passwort einloggen.
- Erwartung: kein E-Mail-Rate-Limit, weil kein Login-Link versendet wird.

## J. Sync-Regression

- Eintrag erstellen.
- Cloud sichern.
- Cloud laden.
- Erwartung: keine Duplikate, keine fremden Daten.

## K. Offline/local-first

- Ohne Login lokale Einträge erstellen.
- Erwartung: lokale Nutzung funktioniert weiter.
