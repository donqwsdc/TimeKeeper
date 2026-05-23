const CACHE_NAME = "timekeeper-pwa-v20";
const APP_FILES = [
  "./index.html",
  "./styles.css?v=17",
  "./supabase-config.js?v=2",
  "./app.js?v=17",
  "./manifest.json",
  "./assets/brand/brand_tokens.css",
  "./assets/brand/favicon.ico",
  "./assets/brand/logos/symbol_app_icon_light.svg",
  "./assets/brand/logos/symbol_app_icon_dark.svg",
  "./assets/brand/logos/horizontal_light.svg",
  "./assets/brand/logos/horizontal_dark.svg",
  "./assets/brand/icons/analyse.svg",
  "./assets/brand/icons/cloud.svg",
  "./assets/brand/icons/einstellungen.svg",
  "./assets/brand/icons/export.svg",
  "./assets/brand/icons/import.svg",
  "./assets/brand/icons/kalender.svg",
  "./assets/brand/icons/kategorien.svg",
  "./assets/brand/icons/loeschen.svg",
  "./assets/brand/icons/nutzer.svg",
  "./assets/brand/icons/start.svg",
  "./assets/brand/icons/stopp.svg",
  "./assets/brand/icons/sync.svg",
  "./assets/brand/icons/timer.svg",
  "./assets/brand/icons/verlauf.svg",
  "./assets/brand/icons/warnung.svg",
  "./assets/brand/png/app_icon_light_192.png",
  "./assets/brand/png/app_icon_light_512.png",
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
