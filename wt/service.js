self.addEventListener('install', function (event) {
  console.log('SERVICE install');
});

self.addEventListener('activate', function (event) {
  console.log('SERVICE activate');
  clients.claim();
});


self.addEventListener('fetch', function (event) {
  console.log('SERVICE fetch: ', event.request.url);
  if (event.request.url.includes('/sw/')) {
    event.respondWith(new Response('SERVICE response to: ' + event.request.url));
  }
});

