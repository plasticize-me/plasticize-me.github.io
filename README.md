# Plasticize website (old)

The old public site at `plasticize-me.github.io`. It now only points visitors to the new landing
page (`plasticize-landing`) and the app. Archive this repository once the new site is live on its
own domain.

## Scripts

- `npm install`
- `npm test`
- `npm run build`
- `npm run dev`

## Configuration

- `VITE_PLASTICIZE_LANDING_URL` – new landing page (default `https://plasticize.ir/`).
- `VITE_PLASTICIZE_APP_URL` – app origin (default `https://app.plasticize.ir/`).

## Deployment

GitHub Pages deploys from the `main` branch through `.github/workflows/pages.yml`.
