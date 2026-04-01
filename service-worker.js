self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('store-cache').then(function(cache) {
      return cache.addAll([
        '/ecommercemobile/index.html',
        '/ecommercemobile/style.css'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
