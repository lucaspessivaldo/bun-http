import { Router } from "itty-router";

export const router = Router()

router.get('/', () => ({ response: 'root' }))

router.get('/todos/:id', ({ params }) => ({ response: `Todo #${params.id}` }))

router.all('*', () => new Response('Not Found.', { status: 404 }))
