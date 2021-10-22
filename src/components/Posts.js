import { getPosts } from '../api'

export default function Posts() {
  // Du fait que l’appel à l’API soit asynchrone et parce que Storybook ne sait
  // pas gérer l’asynchrone, notre composant retourne de manière synchrone le
  // `div` enrobant dans lequel `loadPosts` viendra injecter ses éléments
  // une fois la requête réalisée.
  const container = document.createElement('div')

  loadPosts()

  return container

  async function loadPosts() {
    const posts = await getPosts()

    if (posts.length === 0) {
      return document.createTextNode('Aucun billet trouvé')
    }

    const table = document.createElement('table')
    table.className =
      'mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp'
    const postsRows = posts.map(
      ({ id, title }) =>
        `<tr><td>${id}</td><td class="mdl-data-table__cell--non-numeric">${title}</td></tr>`
    )

    table.insertAdjacentHTML(
      'beforeend',
      `<tbody>${postsRows.join('')}</tbody>`
    )

    container.appendChild(table)
  }
}