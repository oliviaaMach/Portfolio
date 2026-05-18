# Portfolio

A clean and responsive portfolio built with React, TypeScript and Vite.

The site presents my profile as an upcoming fullstack developer, with sections for an introduction, about me, selected projects and contact information. The focus is on a simple structure, clear navigation and a polished visual style.

## Live Site

[View portfolio](https://oliviaamach.github.io/Portfolio/)

## Features

- Responsive layout for desktop and mobile
- Project cards with images, tech tags and external links
- About section with personal focus and learning areas
- Contact section for easy reach-out
- GitHub Pages deployment with Vite base path support

## Tech Stack

- React
- TypeScript
- Vite
- CSS

## Project Structure

```txt
src/
  components/
    layout/
    sections/
    ui/
  data/
  styles/
  types/
public/
  images/
  files/
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The project is configured for GitHub Pages. Vite uses:

```ts
base: '/Portfolio/'
```

Static assets are referenced with `import.meta.env.BASE_URL` so image paths work both locally and on GitHub Pages.
