const CACHE_NAME = '730-congiunto-cache-v1';
const urlsToCache = [
  '/730/',
  '/730/index.html',
  '/730/manifest.json',
  '/730/icons/icon-192x192.png',
  '/730/icons/icon-512x512.png'
];

navigator.serviceWorker.register('/730/service-worker.js')

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});