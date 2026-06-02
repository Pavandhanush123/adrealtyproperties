# Deploy AD Realty Properties to Vercel (GitHub)

This project is a **TanStack Start** + **Vite** app. The repo is already on GitHub:

`https://github.com/outliersynapse/adrealtyproperties-e7d8e5a3`

## 1. Verify locally (before every deploy)

From the project folder:

```powershell
cd c:\Users\leela\vercel\adrealtyproperties-e7d8e5a3
npm install
npm run dev
```

Open http://localhost:5173 (or the port Vite prints).

Production build check:

```powershell
npm run build
npm run preview
```

If `npm run build` fails, fix errors before pushing to GitHub.

## 2. Commit and push to GitHub

```powershell
git status
git add .
git commit -m "Your message"
git push origin main
```

Vercel deploys from the `main` branch when Git integration is enabled.

## 3. Connect GitHub to Vercel (one-time)

1. Sign in at [vercel.com](https://vercel.com) (GitHub login is easiest).
2. **Add New… → Project**.
3. **Import** `outliersynapse/adrealtyproperties-e7d8e5a3`.
4. Framework: **Vite** (auto-detected is fine).
5. Build settings (usually auto-detected for TanStack Start + Nitro):
   - **Framework Preset:** Other (or TanStack Start if listed)
   - **Build Command:** `npm run build`
   - **Install Command:** `npm install`
   - **Output Directory:** leave empty — Nitro writes `.vercel/output` automatically
6. **Deploy**.

Every push to `main` triggers a new production deployment. Pull requests can get preview URLs if you enable that in project settings.

## 4. Optional: deploy from this machine (CLI)

```powershell
npm install -g vercel
cd c:\Users\leela\vercel\adrealtyproperties-e7d8e5a3
vercel login
vercel link
vercel --prod
```

Link the project to the same GitHub repo in the Vercel dashboard so CLI and Git deploys stay in sync.

## 5. Environment variables

If you add secrets later (API keys, etc.), set them in:

**Vercel → Project → Settings → Environment Variables**

Use `VITE_` prefix only for values safe in the browser. Server-only secrets belong in Vercel env vars read in `.server.ts` files (see `src/lib/config.server.ts`).

## Troubleshooting

| Issue | Fix |
|--------|-----|
| Build fails on fonts / CSS | Fonts are loaded via `<link>` in `src/routes/__root.tsx`, not `@import` in CSS. |
| 404 or blank site | Ensure `vite.config.ts` has `nitro: { preset: "vercel" }` and `npm run build` creates `.vercel/output`. |
| Wrong output dir | Do not set Output Directory manually; Nitro provides `.vercel/output` for Vercel. |
