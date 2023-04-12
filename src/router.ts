import { Router, error, json } from "itty-router";

const router = Router()

router
  .get('/', () => ({ bar: 'root' }))
  .get('/foo', () => ({ bar: 'baz' }))
  .all('*', () => error(404))

export default {
  portRouter: 3000,
  fetchRouter: (request) => router
    .handle(request)
    .then(json)
    .catch(error)
}

//TODO 