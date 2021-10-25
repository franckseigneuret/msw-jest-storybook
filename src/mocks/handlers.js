import { POST_BASE_URL } from "../api"
import { rest } from "msw"

// def du jeu de données de test
const POSTS = [
  { id: 1, title: 'First Post', body: 'First post body', userId: 1 },
  { id: 2, title: 'Second Post', body: 'Second post body', userId: 2 },
]

// tableau qui va exploité les données de test
// il décrit les URLs à traiter et les réponses attendues
// on utilise des méthode REST (GraphQL possible)
export const handlers = [
  rest.get(POST_BASE_URL, (req, res, ctx) => res(ctx.json(POSTS))),
  rest.get(`${POST_BASE_URL}/:id`, (req, res, ctx) => res(ctx.json({ ...POSTS[0], id: Number(req.params.id) }))),
]