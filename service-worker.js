self.addEventListener('install', function(event) {

event.waitUntil(

caches.open('store-cache').then(function(cache) {

return cache.addAll([
'/',
'/index.html',
'/style.css'
]);

})

);

});