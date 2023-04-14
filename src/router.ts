import { Router } from "itty-router";

export const router = Router()

router.get('/', () => ({ response: 'root' }))

router.get('/todos/:id', ({ params }) => ({ response: `Todo #${params.id}` }))

router.get('/user', () => {
  return { response: 'user' }
})

router.post('/user', (request) => {
  const user = request
  return { response: user }
})

router.all('*', () => new Response('Not Found.', { status: 404 }))
