import { type Serve } from "bun";
import router from "./router";

export default {
  port: 8080,
  fetch: router,
  error(error: Error) {
    return Response.json({
      message: error,
      error_stack: error.stack
    })
  },
} satisfies Serve;
