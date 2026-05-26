# TimeKeeper Reset-/Delete-Testplan

## A. Einzelnen Eintrag lokal loeschen

1. Eintrag erstellen.
2. Loeschen anklicken.
3. Bestaetigungsdialog abbrechen.
4. Erwartung: Eintrag bleibt erhalten.
5. Loeschen erneut anklicken.
6. Bestaetigen.
7. Erwartung: Eintrag ist lokal entfernt.

## B. Ausgewaehlten Nutzer lokal zuruecksetzen

1. Eintraege fuer `user_1` und `user_2` erstellen.
2. `user_1` auswaehlen.
3. `Ausgewaehlten Nutzer lokal zuruecksetzen` anklicken.
4. Dialog abbrechen.
5. Erwartung: nichts wird geloescht.
6. Dialog erneut oeffnen und bestaetigen.
7. Erwartung: nur `user_1` ist lokal geloescht, `user_2` bleibt erhalten.

## C. Alle Nutzer lokal zuruecksetzen

1. Eintraege fuer mehrere Nutzer erstellen.
2. `Alle Nutzer lokal zuruecksetzen` anklicken.
3. Falschen Bestaetigungstext eingeben.
4. Erwartung: nichts wird geloescht.
5. Erneut oeffnen und exakt `LOKAL LOESCHEN` eingeben, beziehungsweise im UI `LOKAL LÖSCHEN`.
6. Erwartung: alle lokalen Eintraege werden geloescht.

## D. Cloud-Reset blockiert

1. Cloud-Reset-Handler direkt ausloesen, falls moeglich.
2. Erwartung: keine Cloud-Loeschung, Sicherheitsmeldung sichtbar.
3. Supabase pruefen.
4. Erwartung: keine Datensaetze wurden geloescht.

## E. Cloud-Wiederkehr nach lokalem Loeschen

1. Eintrag in Cloud sichern.
2. Eintrag lokal loeschen.
3. `Laden` anklicken.
4. Erwartung: Eintrag kann wieder erscheinen, da Cloud-Delete noch nicht aktiv ist.

## F. Audit-Log

1. Lokale Loeschung oder lokalen Reset durchfuehren.
2. `localStorage.getItem("timekeeper.auditLog.v1")` pruefen.
3. Erwartung: Audit-Log-Eintrag mit `action`, `user_id`, `created_at` und `details` ist vorhanden.
