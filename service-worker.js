const CACHE_NAME = "timekeeper-pwa-v7";
const APP_FILES = [
  "./index.html",
  "./styles.css?v=7",
  "./supabase-config.js?v=1",
  "./app.js?v=7",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
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
