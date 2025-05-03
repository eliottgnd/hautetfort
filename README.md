# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Haute et Fort

Site web de l'association Haute et Fort, dédié à l'éloquence et à l'art oratoire au Pays Basque.

## Déploiement sur Vercel

Ce projet est configuré pour être déployé facilement sur Vercel. Pour déployer :

1. Assurez-vous que le dossier principal (`hautetfort-clean`) contient tous les fichiers nécessaires au projet.
2. Vercel utilisera automatiquement le fichier `vercel.json` pour configurer le déploiement.
3. Lors du déploiement, sélectionnez le dossier `hautetfort-clean` comme dossier racine du projet.

Le processus de build (`npm run build`) générera un dossier `dist` qui sera servi par Vercel.

## Structure du projet

Le projet est organisé comme suit :
- `/src` : Code source React
- `/public` : Assets statiques
- `/dist` : Code compilé (généré lors du build)

## Installation

```bash
npm install
npm run dev
```
