# Mlue Timer website

Marketing and download website for the Mlue Timer Windows desktop application.

## Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production

```bash
pnpm build
pnpm start
```

## Replacing the installer

Add the verified Windows installer at `public/app/app.exe`, then set `installerAvailable` to `true` in `lib/product.ts`. The navigation, hero, CTA, and `/download` page all use that centralized configuration. Do not commit an empty or fake executable. For installers larger than GitHub's normal file limit, use Git LFS or release hosting while preserving the configured download path through the deployment setup.

The application screenshot URL and product copy are also centralized in `lib/product.ts`.

## Deployment

The site is a static Next.js App Router project and can be deployed to Vercel. Replace the placeholder `metadataBase` URL in `app/layout.tsx` with the production domain before launch.
