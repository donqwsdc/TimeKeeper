# Testplan: Langzeitauswertungen im Frontend

## A. Keine Daten

1. Lokale Testdaten leeren oder neues Browserprofil verwenden.
2. Auswertungen oeffnen.

Erwartung: Die bestehende Wochenanalyse und die neue Langzeitauswertung zeigen verstaendliche Leerzustaende. Keine Konsolenfehler.

## B. Eine Woche Daten

1. Mehrere Eintraege in der aktuellen Woche erstellen.
2. Auswertungen oeffnen.
3. Zeitraum "Aktuelle Woche" auswaehlen.

Erwartung: Die bestehende Wochenanalyse funktioniert weiter. Die Langzeitauswertung zeigt Gesamtzeit, Eintraege, Kategorien und Soll/Ist fuer die Woche.

## C. Mehrere Monate Daten

1. Testdaten ueber mindestens drei Monate importieren oder manuell anlegen.
2. Zeitraum "Letzte 3 Monate" waehlen.

Erwartung: Der Monatsverlauf zeigt mehrere Monate mit Gesamtzeit und Eintragsanzahl.

## D. Kategorien

1. Eintraege in mehreren Kategorien anlegen.
2. Auswertungen oeffnen.

Erwartung: Kategorieentwicklung zeigt Zeit, Prozentanteil und Anzahl Eintraege. Die Balken sind proportional plausibel.

## E. Nutzervergleich

1. Eintraege fuer `user_1` und `user_2` anlegen.
2. Nutzerfilter auf "Alle sichtbaren Nutzer" stellen.

Erwartung: Der Nutzervergleich zeigt beide Nutzer mit Gesamtzeit, Eintragsanzahl, Durchschnitt pro Eintrag und staerkster Kategorie.

## F. Aktiver Nutzer vs. alle Nutzer

1. Daten fuer mehrere sichtbare Nutzer anlegen.
2. Zwischen "Aktiver Nutzer" und "Alle sichtbaren Nutzer" wechseln.

Erwartung: Gesamtwerte, Kategorien, Monatsverlauf und Soll/Ist veraendern sich passend zum Filter.

## G. Soll/Ist

1. In den Einstellungen die Ziel-Arbeitszeit aendern.
2. Auswertungen oeffnen.
3. Zeitraum wechseln.

Erwartung: Sollzeit und Differenz reagieren auf die Ziel-Arbeitszeit. Wochenenden werden nicht als Sollzeit gerechnet. Feiertage werden noch nicht beruecksichtigt.

## H. Offline

1. Ohne Login oder Netzwerk testen.
2. Lokale Eintraege erstellen.
3. Auswertungen oeffnen.

Erwartung: Die Langzeitauswertungen funktionieren lokal. Cloud-Login ist nicht erforderlich.

## I. Sync unveraendert

1. Einloggen.
2. Cloud-Sichern ausfuehren.
3. Cloud-Laden ausfuehren.

Erwartung: Sync funktioniert wie vor Projekt 7. Es werden keine Supabase-DELETEs ausgefuehrt und keine Duplikate durch die Auswertungs-UI erzeugt.

## J. Mobile Darstellung

1. App bei ca. 390 px Breite oeffnen.
2. Auswertungen oeffnen.
3. Zeitraum- und Nutzerfilter bedienen.

Erwartung: Filter, KPI-Karten, Kategorieentwicklung, Nutzervergleich und Monatsverlauf bleiben lesbar und laufen nicht aus dem Viewport.
