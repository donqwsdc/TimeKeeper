# TimeKeeper Sync-Testplan

## A. Test ohne Login

1. App laden.
2. Timer starten, stoppen und speichern.
3. Zeit manuell nachtragen.
4. Verlauf, Statistik und Kalender pruefen.
5. CSV exportieren.
6. Cloud-Sichern und Cloud-Laden anklicken.
7. Erwartung: lokale Nutzung funktioniert, Cloud zeigt `Login erforderlich`, Cloud-Aktionen melden `Bitte zuerst im Cloud-Bereich anmelden.`

## B. Erster Login

1. Im Cloud-Bereich E-Mail eintragen.
2. `Login-Link senden` klicken.
3. Magic Link oeffnen.
4. Erwartung: Status zeigt `Angemeldet als ...`, `Sichern` und `Laden` sind aktiv.

## C. Erstes Sichern

1. Lokalen Eintrag fuer `user_1` erstellen.
2. `Sichern` klicken.
3. Supabase pruefen.
4. Erwartung: `owner_id` ist gefuellt, `user_id` bleibt `user_1`, Upsert nutzt `owner_id,id`.

## D. Laden in zweitem Browserprofil

1. App in zweitem Browserprofil oeffnen.
2. Mit demselben Supabase-Login anmelden.
3. `Laden` klicken.
4. Erwartung: Eintrag erscheint lokal.
5. `Laden` erneut klicken.
6. Erwartung: keine Duplikate.

## E. Zweiter Supabase-Account

1. In anderem Profil mit anderem Supabase-Account anmelden.
2. Ebenfalls `user_1` verwenden.
3. Eintrag speichern und `Sichern` klicken.
4. Erwartung: keine Kollision mit erstem Account, keine fremden Daten sichtbar.

## F. Konfliktfall

1. Denselben Eintrag in zwei Browserprofilen laden.
2. Eintrag lokal in Profil A aendern und sichern.
3. Eintrag lokal in Profil B anders aendern.
4. In Profil B `Laden` oder Startup-Sync ausfuehren.
5. Erwartung: Konflikt wird angezeigt, keine stille Ueberschreibung.

## G. Konfliktaufloesung erneut synchronisieren

1. Konflikt zwischen lokaler Version und Cloud-Version erzeugen.
2. `Lokale Version behalten` auswaehlen.
3. Danach erneut `Laden` oder Startup-Sync ausfuehren.
4. Erwartung: Der Konflikt erscheint nicht erneut, weil die lokale Version in die Cloud geschrieben wurde.
5. Konflikt erneut erzeugen.
6. `Cloud-Version uebernehmen` auswaehlen.
7. Danach erneut `Laden` oder Startup-Sync ausfuehren.
8. Erwartung: Der lokale Stand bleibt konsistent und der Konflikt erscheint nicht erneut.
9. Mehrere Konflikte erzeugen und `Fuer alle lokale Versionen behalten` testen.
10. Erwartung: Alle lokalen Konfliktversionen werden in die Cloud geschrieben; bei Upload-Fehler bleiben die Konflikte sichtbar.
11. Mehrere Konflikte erzeugen und `Fuer alle Cloud-Versionen uebernehmen` testen.
12. Erwartung: Alle Cloud-Versionen werden lokal uebernommen; es erfolgt kein DELETE.

## H. CSV-Import plus Sync

1. CSV importieren.
2. `Sichern` klicken.
3. In zweitem Browserprofil `Laden` klicken.
4. Erwartung: importierte Eintraege erscheinen, wiederholtes Laden erzeugt keine Duplikate.

## I. Konfliktloesung: lokale Version behalten

1. Konflikt in zwei Browserprofilen erzeugen.
2. `Lokale Version behalten` klicken.
3. Danach erneut `Laden` ausfuehren oder die Seite neu laden.
4. Erwartung: Konflikt erscheint nicht erneut, weil die lokale Version in die Cloud hochgeladen wurde.

## J. Konfliktloesung: Cloud-Version uebernehmen

1. Konflikt erzeugen.
2. `Cloud-Version uebernehmen` klicken.
3. Danach erneut `Laden` ausfuehren.
4. Erwartung: lokaler Stand bleibt konsistent, Konflikt erscheint nicht erneut.

## K. Logout/Login

1. Abmelden.
2. Timer, Verlauf, Statistik, Kalender und CSV lokal pruefen.
3. Wieder anmelden.
4. `Laden` und `Sichern` pruefen.
5. Erwartung: lokale Nutzung bleibt ohne Login moeglich, Cloud-Sync funktioniert nur mit Login.
