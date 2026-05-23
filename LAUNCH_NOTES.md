# TimeKeeper Launch-Paket

Stand: 2026-05-23

Dieses Paket ist fuer GitHub Pages oder einen statischen Webhost vorbereitet.

## Enthaltene Startdateien

- `index.html`
- `styles.css`
- `app.js`
- `supabase-config.js`
- `manifest.json`
- `service-worker.js`
- `assets/brand/`

## Deployment

1. Inhalt des Launch-Pakets in den Webroot kopieren.
2. Bei GitHub Pages direkt in den Branch/Ordner deployen, der fuer Pages aktiv ist.
3. Nach dem Upload die Seite einmal hart neu laden, damit der neue Service Worker `timekeeper-pwa-v22` aktiv wird.

## Patch-Schwerpunkte

- Startscreen auf Timer-Start/Stop als wichtigste Aktion fokussiert.
- Aktiver Nutzer, Sync-Status und Reminder-Status kompakt sichtbar.
- Monatskalender als reduzierte Heatmap mit Tagesdetailpanel umgesetzt.
- Export bleibt unter Einstellungen > Datenverwaltung.

## Supabase

Die Supabase-Konfiguration liegt in `supabase-config.js`.
Wenn keine Cloudspeicherung gewuenscht ist, URL und Key leer lassen; die App funktioniert lokal weiter.
