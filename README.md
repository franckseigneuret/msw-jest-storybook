intro :
travailler avec un mock de données. Utile quand le back n’a pas été traité, ou que le serveur de l’API ne retourne rien.

https://delicious-insights.com/fr/articles/storybook-msw/
https://www.youtube.com/watch?v=_-mcQGBfZ54

# Installation de storybook
```bash
npx sb init --builder webpack5
```

## lancer storybook
```bash
npm run storybook
```

# injection des données de test dans les composants via MSW
## installation MSW
```bash
npm install --save-dev msw
```

## Créer un service worker
nécessite node > 12

```bash
npx msw init dist --save
```
dist = dossier de destination bundle pour le service  worker


## Préparer les données simulées
src/mocks/handler.js = point d'entrée des données simulées

## Mettre les mocks à dispo du service worker
src/mocks/browser.js

## Coupler le service worker à Storybook
.storybook/preview.js
npm run storybook
