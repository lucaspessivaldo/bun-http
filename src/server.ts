import { type Serve } from "bun";
import { error, json } from "itty-router";
import { router } from "./router"

export default {
  fetch: (request) => router
    .handle(request)
    .then(json)
    .catch(error),
  port: 3000
} satisfies Serve;
