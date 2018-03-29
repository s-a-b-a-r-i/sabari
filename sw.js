//fetch from service worker
self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
});

//service worker cache
self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open('the-magic-cache').then(function(cache){
            //files to cache
            return cache.addAll([
                '/',
                '/index.html',a
                '/inline.css',
                '/sw.js',
                '/app.js'
            ]);
        })
    );
});
