# Glamour Shots — Website (Next.js)

Photography · Videography · Cinematography, Dhaka. Next.js (App Router, TypeScript), English + বাংলা.

## Pages
`/` Home · `/about` · `/services` · `/services/[wedding|holud|engagement|birthday|cinematography|corporate]` · `/portfolio` · `/films` · `/contact`

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy on Vercel
Import the GitHub repo at vercel.com/new → Framework: Next.js → Deploy (no settings needed).
Then add your domain in Vercel → Settings → Domains.

## Edit content — `lib/site.ts`
Contact numbers/links, address + map, stats, reviews, services, gallery, videos, process steps — all in one file, with English and Bangla text.
- **Photos:** put files in `public/portfolio/`, then set `src: "/portfolio/name.jpg"` in `gallery`.
- **YouTube:** set `id` (the part after `v=`) in `videos`.
- **Map:** Google Maps → Share → Embed → paste the `src` URL into `address.mapEmbed`.
- Search the file for `TODO` — those values still need your real data (email, address, stats, domain).

## Backend later
The contact form currently opens WhatsApp (see `components/ContactForm.tsx`). Replace that with `fetch("/api/booking")` and add `app/api/booking/route.ts`. Gallery/videos can move from `lib/site.ts` to a database + admin panel.
