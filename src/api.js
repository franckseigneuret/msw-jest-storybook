export const POST_BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

export function getPosts() {
  return fetch(POST_BASE_URL).then((response) => response.json())
}

export function getPost(id) {
  return fetch(`${POST_BASE_URL}/${id}`).then((response) => response.json())
}