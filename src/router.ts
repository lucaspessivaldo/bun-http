const routes: Route[] = [
  {
    path: '/',
    method: 'GET',
    handler: (req) => {
      return Response.json({ message: "root" });
    }
  },
  {
    path: '/about',
    method: 'GET',
    handler: (req) => {
      return Response.json({ message: "about" });
    }
  },
  {
    path: '/error',
    method: 'GET',
    handler: (req) => {
      return Response.json({ message: "error" });
    }
  }
];

export default function router(req: Request) {
  const url = new URL(req.url)
  const method = req.method

  const matchingRoute = routes.find(route => route.path === url.pathname && route.method === method);

  if (matchingRoute) {
    return matchingRoute.handler(req);
  } else {
    return Response.json({
      message: "404 Not Found"
    });
  }
}