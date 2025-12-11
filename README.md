# Next.js 16 SEO Starter

Hey! This is a clean, lightweight Next.js 16 starter that actually gets SEO right.

## Why I made this

Most Next.js starters either ignore SEO completely or go way overboard with complexity. This one hits the sweet spot – it has everything search engines need to love your site, without the bloat.

## What's inside?

**The essentials:**
- Next.js 16 with the new App Router
- TypeScript (because we're not savages)
- Proper metadata for Google, Twitter, Facebook – the whole gang
- Structured data (JSON-LD) so search engines actually understand your content
- Dynamic sitemap that updates automatically
- Performance optimizations baked in

**What makes the SEO good:**
- OpenGraph tags for when people share your links
- Twitter Cards that look nice
- Canonical URLs to avoid duplicate content issues
- Robots.txt so crawlers know what to do
- Mobile-first responsive design
- Semantic HTML5 (search engines dig this)
- Accessibility features (focus states, proper heading hierarchy)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you're off.

## Customize it

You'll want to change a few things:

1. **Domain URLs** – Update `https://yourdomain.com` in `app/layout.tsx` and `app/page.tsx`
2. **Site name & description** – Make it yours in `app/layout.tsx`
3. **Social handles** – Change `@yourusername` to your actual Twitter handle
4. **Verification codes** – Add your Google Search Console code in `app/layout.tsx`
5. **Environment variable** – Set `NEXT_PUBLIC_SITE_URL` in a `.env.local` file

## The files that matter

- `app/layout.tsx` – Main SEO metadata lives here
- `app/page.tsx` – Your homepage with structured data
- `app/sitemap.ts` – Auto-generates your sitemap.xml
- `app/robots.ts` – Tells search engines what to crawl
- `public/og-image.png` – The image that shows up when people share your site

## Build for production

```bash
npm run build
npm run start
```

## What's NOT included

This starter intentionally skips:
- Analytics (add what you like)
- Fancy animations
- UI component libraries
- State management
- Authentication

It's just the foundation. Add what you need, skip what you don't.

## Performance

Out of the box, you get:
- React Server Components by default (faster page loads)
- Compression enabled
- No unnecessary headers
- Optimized images (use Next.js Image component for yours)

## License

MIT – do whatever you want with it.

---

Built with Next.js 16, React 19, and TypeScript. Ship fast, rank well.

