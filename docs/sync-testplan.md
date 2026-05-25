# TimeKeeper Sync-Testplan

## A. Test ohne Login

1. App laden.
2. Timer starten, stoppen und speichern.
3. Zeit manuell nachtragen.
4. Verlauf, Statistik und Kalender prüfen.
5. CSV exportieren.
6. Cloud-Sichern und Cloud-Laden anklicken.
7. Erwartung: lokale Nutzung funktioniert, Cloud zeigt `Login erforderlich`, Cloud-Aktionen melden `Bitte zuerst im Cloud-Bereich anmelden.`

## B. Erster Login

1. Im Cloud-Bereich E-Mail eintragen.
2. `Login-Link senden` klicken.
3. Magic Link öffnen.
4. Erwartung: Status zeigt `Angemeldet als ...`, `Sichern` und `Laden` sind aktiv.

## C. Erstes Sichern

1. Lokalen Eintrag für `user_1` erstellen.
2. `Sichern` klicken.
3. Supabase prüfen.
4. Erwartung: `owner_id` ist gefüllt, `user_id` bleibt `user_1`, Upsert nutzt `owner_id,id`.

## D. Laden in zweitem Browserprofil

1. App in zweitem Browserprofil öffnen.
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
2. Eintrag lokal in Profil A ändern und sichern.
3. Eintrag lokal in Profil B anders ändern.
4. In Profil B `Laden` oder Startup-Sync ausführen.
5. Erwartung: Konflikt wird angezeigt, keine stille Überschreibung.

## G. CSV-Import plus Sync

1. CSV importieren.
2. `Sichern` klicken.
3. In zweitem Browserprofil `Laden` klicken.
4. Erwartung: importierte Einträge erscheinen, wiederholtes Laden erzeugt keine Duplikate.

## H. Logout/Login

1. Abmelden.
2. Timer, Verlauf, Statistik, Kalender und CSV lokal prüfen.
3. Wieder anmelden.
4. `Laden` und `Sichern` prüfen.
5. Erwartung: lokale Nutzung bleibt ohne Login möglich, Cloud-Sync funktioniert nur mit Login.
