const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  './', // homepage
  './index.html', // your main HTML file
  './styles.css', // your stylesheet
  './script.js', // your JavaScript
  './magi.jpg', // your image
  // add other assets like icons here if needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});