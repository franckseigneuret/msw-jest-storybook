if (typeof process === 'undefined') { // uniquement côté front, et non côté back (sinon chargement en double)
  const { worker } = require('../src/mocks/browser')

  worker.start()
}