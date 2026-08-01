# PRD — Circolo Vizioso di Dumenza

## Original Problem Statement
Bespoke, immersive, high-fashion **editorial** website for *Circolo Vizioso di Dumenza* (est. 1910, Via XX Settembre 3, 21010 Dumenza VA). Must reject generic restaurant templates: moody alpine sanctuary, tactile, heritage-rooted. Strict palette (Mattone #8E3721, Terracotta #A84A2D, Crema #F6F1E8, Beige #E8D9C3, Marrone #2F211A, Nero caldo #1B1A18). Asymmetric editorial scroll, micro-interactions, custom cursor, amber glows. Pages/sections: Homepage/Hero, Menu, Storia, Eventi, Foto, Reservation. Routing contact: primeasrl@gmail.com.

## User Choices (this session)
- Languages: **IT / EN / DE / FR** (default Italian, remembered in localStorage).
- Reservations: **WhatsApp deep-link** for now (no email/gestionale yet).
- CMS/Admin & Auth: **not now** (deferred).
- Images: uploaded brand assets + curated stock.
- Hero: photography (video maybe later).

## Architecture
- **Frontend**: React 19 (CRA/craco), Tailwind, framer-motion, **lenis** smooth scroll, shadcn/ui, sonner. Single immersive page with anchored floating pill nav.
- **Backend**: FastAPI + MongoDB (motor). `POST /api/reservations` + `GET /api/reservations` (logs inquiries; WhatsApp is primary channel).
- i18n via `LanguageContext` + `translations.js` (4 langs). Brand/config in `lib/config.js`.
- Signature moments: preloader intro (skippable via `?static=1`), masked line-by-line hero reveal, parallax hero + Storia images, editorial marquee, custom slow-inertia cursor, gallery lightbox.
- Brand logos rendered from uploaded PDFs → `/public/logo-white.png`, `/public/logo-dark.png`; uploaded dish photo → `/public/dish-flame.jpg`.

## Implemented (2026-08-01)
- Hero (Mattone + alpine twilight photo, tagline “È come stare a casa”), floating nav + mobile menu, language switcher.
- Storia: numbered manifesto (Tradizione / Serietà / Punto iconico) + Cucina/Pizza split; real venue narrative from brand PDF.
- Menu: editorial multi-column with **Cucina / Pizza / Carta dei Vini** tabs — full summer menu transcribed (antipasti→dolci, all pizzas/focacce/calzoni, full wine list), takeaway + coperto + allergen notes.
- Eventi: Mattone blocks (live music, karaoke, themed nights, seasonal) + image band.
- Foto: masonry gallery + lightbox.
- Contatti: reservation form → backend log + WhatsApp deep-link; address/phone/email/Instagram; footer.
- Multilingual across all sections; verified end-to-end (backend 100%, frontend 95%).

## Backlog / Next
- **P1** Real WhatsApp mobile number (currently uses landline +39 0332 1313 742 from brand material) — confirm with owner.
- **P1** Hero cinematic video option (owner to provide).
- **P2** CMS/admin (“Register”) to edit menu & events; email routing to primeasrl@gmail.com (“Tim System” gestionale) when ready.
- **P2** SEO/OG images, sitemap; favicon polish.
