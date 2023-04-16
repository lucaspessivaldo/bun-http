type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

type Route = {
  path: string;
  method: Method
  handler: (req: Request) => Response;
};