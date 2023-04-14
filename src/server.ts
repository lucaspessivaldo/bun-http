import { type Serve } from "bun";

export default {
  async fetch(req) {
    const text = await req.text(); // read the request body as text
    const json = JSON.parse(text); // parse the text as JSON
    return new Response(JSON.stringify(json)); // return the JSON response
  },
} satisfies Serve;