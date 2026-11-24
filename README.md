# Vaishnavi Desai: Portfolio (React + TypeScript + Tailwind + Framer Motion)

Fully static site: no backend, no server cost. Contact is a `mailto:` link, plus Medium, LinkedIn and GitHub links.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build in dist/
```

## Edit content (data files only)
```
src/data/
  profile.ts      name, email, LinkedIn, GitHub, Medium, nav links
  hero.ts         hero wordmark, tagline, the three hero tabs
  projects.ts     the 6 projects
  expertise.ts    Skills section (5 groups)
  marquee.ts      scrolling skill rows
  experience.ts   Career tickets
  credentials.ts  education + certifications
  images/         profile.webp (hero badge) + optional <project-id>.webp screenshots
```
The About text lives in `src/components/about/AboutSection.tsx`.

## Deploy
Any static host works (Vercel, Netlify, S3 + CloudFront). Build command `npm run build`, output `dist`.
For S3 + CloudFront: `S3_BUCKET=your-bucket CF_DIST_ID=EXXXX npm run deploy` (AWS CLI configured). See `deploy/CHECKLIST.md`.
