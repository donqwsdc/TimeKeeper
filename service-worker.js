const CACHE_NAME = "timekeeper-pwa-v19";
const APP_FILES = [
  "./index.html",
  "./styles.css?v=16",
  "./supabase-config.js?v=2",
  "./app.js?v=17",
  "./manifest.json",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/brand_tokens.css",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/favicon.ico",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/logos_svg/02_logo_symbol_app_icon_light.svg",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/logos_svg/03_logo_symbol_app_icon_dark.svg",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/logos_svg/04_logo_horizontal_light.svg",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/logos_svg/05_logo_horizontal_dark.svg",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/icons_svg/analyse.svg",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/icons_svg/cloud.svg",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/icons_svg/einstellungen.svg",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/icons_svg/export.svg",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/icons_svg/import.svg",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/icons_svg/kalender.svg",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/icons_svg/kategorien.svg",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/icons_svg/loeschen.svg",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/icons_svg/nutzer.svg",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/icons_svg/start.svg",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/icons_svg/stopp.svg",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/icons_svg/sync.svg",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/icons_svg/timer.svg",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/icons_svg/verlauf.svg",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/icons_svg/warnung.svg",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/png_exports/app_icon_light_192.png",
  "./TimeKeeper_CI_Assets/TimeKeeper_CI_Assets_Integrated_v3/png_exports/app_icon_light_512.png",
];

function isAppFile(request) {
  const requestUrl = new URL(request.url);

  return APP_FILES.some((file) => requestUrl.pathname.endsWith(file.replace("./", "/")));
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_FILES.map((file) => new Request(file, { cache: "reload" }))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  if (isAppFile(event.request) || event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });

          return networkResponse;
        })
        .catch(() => caches.match(event.request).then((cachedResponse) => cachedResponse || caches.match("./index.html"))),
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request);
    }),
  );
});
