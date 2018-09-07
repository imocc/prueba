self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/oo/',
       '/oo/index.html',
       '/oo/index.js',
     '/oo/plugins/OwlCarousel2-2.2.1/owl.carousel.css',
  '/oo/styles/main_styles.css', 
   '/oo/styles/responsive.css',
     '/oo/https://thumb.ibb.co/dR68oK/logo.png',

     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
