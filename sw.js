const staticCacheName = 'restaurant-cache-v8';
const urlsToCache = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/js/main.js',
  '/js/dbhelper.js',
  '/js/restaurant_info.js',
  '/css/styles.css',
  '/css/responsive.css',
  '/data/restaurants.json',
  '/img/1-500_small.jpg',
  '/img/2-500_small.jpg',
  '/img/3-500_small.jpg',
  '/img/4-500_small.jpg',
  '/img/5-500_small.jpg',
  '/img/6-500_small.jpg',
  '/img/7-500_small.jpg',
  '/img/8-500_small.jpg',
  '/img/9-500_small.jpg',
  '/img/10-500_small.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('restaurant-cache') && cacheName != staticCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});