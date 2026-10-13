# vacc-website-client

vacc website client is an application containing JavaScript. The checked-in dependency manifests use React, Next.js. Source modules cover `active-jobs`, `contact`, `past-jobs`, `request-job`.

## Repository layout

- `components/` — 2 tracked file(s); source examples: `components/layout/Layout.js`, `components/navigation/Navbar.js`.
- `pages/` — 5 tracked file(s); source examples: `pages/active-jobs.js`, `pages/contact.js`.

## Local setup

Run each package setup block from the repository root. For workspace repositories, install dependencies at the root before running application-specific scripts.

Clone this repository and enter its directory:

```sh
git clone https://github.com/stanleyHayes/vacc-website-client.git
cd vacc-website-client
```

### Node package: `package.json`

Use Node.js and npm.

```sh
npm install
```

- `npm run dev` — runs the declared `dev` script (`next`).
- `npm run start` — runs the declared `start` script (`next start`).
- `npm run build` — runs the declared `build` script (`next build`).

## Source entry points

- [components/layout/Layout.js](components/layout/Layout.js)
- [components/navigation/Navbar.js](components/navigation/Navbar.js)
- [pages/active-jobs.js](pages/active-jobs.js)
- [pages/contact.js](pages/contact.js)
- [pages/index.js](pages/index.js)
- [pages/past-jobs.js](pages/past-jobs.js)
- [pages/request-job.js](pages/request-job.js)

## Development notes

Commands above come from the tracked manifests and source layout. External services and runtime configuration may be required. Documentation updates do not establish that the application is deployed or that its tests pass.
