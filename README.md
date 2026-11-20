# [CV](https://kseniia-savitskaia.netlify.app/)

Personal CV and portfolio website for Kseniia Savitskaia, a web developer.

## Features

- Responsive layout
- Skills and contact information
- Portfolio with project previews, live demos, and GitHub links
- Work experience and education
- Contact form with validation and email delivery via EmailJS
- Downloadable CV in PDF format

## Tech Stack

- Next.js
- React
- TypeScript
- Sass / CSS Modules
- React Hook Form
- EmailJS
- Heroicons
- clsx
- ESLint
- Stylelint
- Prettier
- Netlify

## Architecture

The source follows Feature-Sliced Design. The pages layer is named `views`
because Next.js reserves `src/pages` for its Pages Router.

```text
src/
  app/                       Next.js routes, root layout and API handlers
  views/                     Page composition: about, occupations, portfolio
  widgets/header/            Navigation header
  features/
    send-message/            Contact form and email submission
    switch-language/         Language switcher
  entities/
    profile/                 Person, skills and contact information
    project/                 Project data, types and preview components
  shared/
    lib/i18n/                Dictionaries, language context and hooks
    ui/icon/                 Reusable icon component
    styles/                  Global styles, Sass variables and mixins
```

Dependencies flow down from `app` to `shared`. Slices expose public APIs through
`index.ts`; imports within a slice use relative paths. ESLint checks alias imports
for layer direction, sibling-slice dependencies and access to internal modules.
Use `@/` for source imports and `@abstracts/` for shared Sass helpers.

Project content lives in `src/entities/project/model/projects.json`. Both the
portfolio and `/api/projects` use the same typed data module.

## Development

1. Clone the repo

```bash
git clone https://github.com/SavitskayaKseniya22/cv.git
```

2. Change directory

```bash
cd cv
```

3. Install dependencies

```bash
npm install
```

4. Start the dev server

```bash
npm run dev
```



### Screenshots

<img width="1920" height="955" alt="Screenshot 2026-10-05 at 22-17-09 CV" src="https://github.com/user-attachments/assets/1002b06e-0a6c-4b63-a1a8-53d11030f88a" />
<img width="1920" height="955" alt="Screenshot 2026-10-05 at 22-17-24 CV" src="https://github.com/user-attachments/assets/14b8d7ea-5ebc-4e79-8f0a-c3d4525ea24e" />
<img width="1920" height="955" alt="Screenshot 2026-10-05 at 22-17-14 CV" src="https://github.com/user-attachments/assets/c051ffc5-9924-4cb7-addd-1d7edc870e6b" />




