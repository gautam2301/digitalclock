const CACHE_NAME = "zunchronoai-v1";
const urlsToCache = [
  "/",
  "/home.html",
  "/stopwatch.html",
  "/countdown.html",
  "/clock.css",
  "/clock.js",
  "/speaktime.js",
  "/stopwatch.js",
  "/countdown.js",
  "/timezone.js",
  "/alarm.js",
  "/darkmode.js",
  "/timeformat.js",
  "/icon-192.png",
  "/icon-512.png"
];

// Install the service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch cache first, then fallback to network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Update service worker & clear old cache
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
