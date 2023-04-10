const server = Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    const method = req.method.toLowerCase();
    
    console.log(url.pathname)
    console.log(method)

    const routes = {
      'get': {
        '/': (req) => ({ message: 'Hello, World!'}),
        '/users': (req) => ({ userId: 'users router'}),
      },
      'post': {
        '/users': (req) => ({ message: 'User created!' }),
      },
    };
    
    const handler = routes[method][url.pathname] || ((req) => ({ message: 'Not found!' }));
    
    const response = handler(req);
    return new Response(JSON.stringify(response), {
      headers: { 'Content-Type': 'application/json' },
    });
  },
});

console.log(`Server is running on PORT:${server.port}`)




