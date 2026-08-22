const CACHE_NAME = 'jspt-static-v3';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/images/hero-church.webp',
  '/images/pastor.webp',
  '/images/family.webp',
  '/images/church.webp',
  '/images/bible.webp',
  '/images/ministry.webp',
  '/images/message-01.webp',
  '/images/message-02.webp',
  '/images/message-03.webp',
  '/images/message-04.webp',
  '/images/message-05.webp',
  '/images/message-06.webp',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) {
              return caches.delete(key);
            }
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Don't interfere with external websites/services
  if (url.origin !== self.location.origin) return;

  // IMPORTANT:
  // Always try the network first for HTML/navigation.
  // This prevents an old website version from being displayed.
  if (event.request.mode === 'navigate' ||
      event.request.destination === 'document') {

    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          // Update cached page with latest version
          const responseClone = networkResponse.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });

          return networkResponse;
        })
        .catch(() => {
          // Offline fallback
          return caches.match('/index.html');
        })
    );

    return;
  }

  // For other assets, use cache first and network fallback.
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then((networkResponse) => {

            if (
              !networkResponse ||
              networkResponse.status !== 200 ||
              networkResponse.type !== 'basic'
            ) {
              return networkResponse;
            }

            const responseClone = networkResponse.clone();

            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });

            return networkResponse;
          });
      })
  );
});
