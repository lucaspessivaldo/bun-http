import router from "./router.js"

const server = Bun.serve({

  fetch(req) {
    const url = new URL(req.url);
    const method = req.method.toLowerCase();

    const routes = {
      'get': {
        '/': (req) => ({ message: 'Hello, World!', }),
        '/users': (req) => ({ userId: 'users router' }),
      },
      'post': {
        '/users': (req) => ({ message: 'User created!' }),
      },
    };

    const handler = routes[method][url.pathname] || ((req) => ({ message: 'Not found!' }));

    const response = handler(req);
    const response2 = router.fetchRouter(req).then(e => console.log(e))
    console.log(response2)

    return new Response(response, {
      headers: { 'Content-Type': 'application/json' },
    });
  },

});

console.log(`Server is running on PORT:${server.port}`)

//“export default {}” on main module calls Bun.serve() on the default object
