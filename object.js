addEventListener('fetch', event => {
  event.respondWith(
    new Response(null, {
      status: 301,
      headers: {
        'Location': '/index.html',
      },
    })
  );
});
