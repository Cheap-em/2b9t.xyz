addEventListener('fetch', event => {
  if (event.request.url.endsWith('/')) {
    event.respondWith(
      new Response(null, {
        status: 301,
        headers: {
          'Location': '/index.html',
        },
      })
    );
  } else {
    event.respondWith(
      fetch(event.request)
    );
  }
});
