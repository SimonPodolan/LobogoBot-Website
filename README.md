# LoboGo — landing site (Next.js + GSAP)

Awwwards-style marketing site. Light editorial aesthetic, green accent, Clash
Display + General Sans (Fontshare), Lenis smooth scroll, GSAP ScrollTrigger
reveals, magnetic CTAs, parallax hero, animated counters.

## Run

```bash
cd lobogo-next
npm install
npm run dev
# open http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

## Structure

```
app/
  layout.jsx     fonts, metadata, SmoothScroll provider, grain overlay
  page.jsx       composes the sections
  globals.css    design tokens + all component styles
components/
  SmoothScroll   Lenis + GSAP ScrollTrigger setup + global [data-animate] reveal
  Icon           inline icon set + Logo (crosshair mark kept from original)
  Nav            sticky, turns solid on scroll, magnetic CTA
  Hero           GSAP line-mask headline reveal + parallax media
  LiveFeed       live "detection feed" card (kept from original concept)
  Marquee        infinite trust strip (CSS, linear)
  Stats          scroll-triggered count-up numbers
  HowItWorks / Features / Coverage / Pricing / Faq / Cta / Footer
```

## Animation notes (Emil Kowalski principles)

- Custom easing curves (`power3/4.out`, `cubic-bezier(.23,1,.32,1)`), never weak defaults.
- Reveals: opacity + `translateY` + `blur` only (GPU-friendly), stagger 80ms.
- Headline rises out of `overflow:hidden` masks (line reveal).
- `:active` scale on buttons; magnetic hover gated to fine-pointer devices.
- Marquee is `linear` (constant motion); everything else `ease-out`.
- Full `prefers-reduced-motion` fallback (no transforms, no smooth scroll).

## Customising

- **Accent / colors:** `app/globals.css` `:root` (`--accent`, `--bg`, `--ink`…).
- **Copy:** each component holds its own content arrays at the top.
- **Fonts:** swap the Fontshare `<link>` in `app/layout.jsx`.

## Deploy

Push to GitHub → import on **Vercel** (zero config for Next.js). Or
`npm run build` and host the `.next` output anywhere that runs Node.
