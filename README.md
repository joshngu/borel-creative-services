# Borel Creative Services One-Pager

Bold, portfolio-first one-page site for Borel Creative Services.

## Project Files
- `index.html` - page structure and copy.
- `styles.css` - responsive styling and visual system.
- `script.js` - mobile menu, active nav states, and footer year.

## Current Design Direction
- Style reference currently used for design decisions: `assets/style.reference/image1.png`.
- Visual cues extracted into the design system:
  - near-black minimalist background with cool gray depth
  - restrained cyan-to-orange accent for key CTA/divider emphasis
  - oversized clean hero typography with low-clutter component styling

## Visual Tokens
- Primary accent start: cyan (`--primary`)
- Primary accent end: orange (`--primary-strong`)
- Support accent: cool neutral (`--accent`)
- Base surfaces: charcoal variants (`--bg`, `--surface`, `--surface-soft`)
- Interface border color: `--border`

## Edit Before Launch
1. Replace sample portfolio metrics with your real client outcomes.
2. Update contact email in footer (`skywqlk@borelcreativeservices.com`).
3. Add social links in footer if needed.
4. Replace the form endpoint in `index.html`:
   - `action="https://formspree.io/f/your-form-id"`
   - with your real Formspree endpoint, for example:
   - `action="https://formspree.io/f/abcde123"`

## Lead Form Setup (Formspree)
1. Create a form in Formspree.
2. Copy your form endpoint URL.
3. Paste it into the form `action` in `index.html`.
4. Submit a test lead from the live site.
5. Confirm the lead arrives in your destination inbox.

## Local Preview
Open `index.html` directly in your browser, or run a lightweight static server.

## Deploy Option A: Netlify (Recommended for easiest forms)
1. Create a new site in Netlify and deploy this folder.
2. Confirm the site is live on `*.netlify.app`.
3. If using Formspree, keep the existing form setup.
4. If using Netlify Forms instead, remove the Formspree `action` and add `name`/`netlify` attributes.

## Deploy Option B: Vercel
1. Import the folder/repo into Vercel.
2. Deploy and confirm the `*.vercel.app` URL is live.
3. Keep Formspree for lead handling (Vercel does not provide built-in static forms like Netlify Forms).

## Connect GoDaddy Domain
After deployment, connect your custom domain in host settings first, then add DNS records in GoDaddy:

- For Netlify:
  - `A` record (root `@`) -> `75.2.60.5`
  - `CNAME` record (`www`) -> your `*.netlify.app` domain
- For Vercel:
  - `A` record (root `@`) -> `76.76.21.21`
  - `CNAME` record (`www`) -> `cname.vercel-dns.com`

Exact records can vary by hosting account setup. Always copy the final values shown in your hosting dashboard.

## Launch Verification Checklist
- Form submission sends to the correct inbox.
- Mobile and desktop layout look correct.
- Navigation links scroll to the right sections.
- Domain resolves on both root and `www`.
- HTTPS certificate is active and no security warnings show.

## Suggested Next Enhancements
- Add real portfolio screenshots.
- Add analytics (`GA4` + Meta Pixel).
- Add thank-you page and conversion tracking events.
- Add founder headshots and social proof logos.

## Style Reference Mapping
Use files in `assets/style.reference/` as the visual source of truth for style updates.

Reference usage policy:
- Use `assets/style.reference/*` to extract design direction (palette, typography rhythm, spacing, surface treatment).
- Do not use `assets/style.reference/*` directly in website content image tags (`img src`) in `index.html`.
- Keep live site media pointed to real brand/campaign assets (or neutral placeholders until replaced).

- `image1.png` -> hero visual direction (dark, sculptural, minimal, high-contrast).
- `image1.png` -> palette guidance for neutral surfaces plus restrained cyan-to-orange accent usage.
- `image1.png` -> typography tone (large uppercase hero headline, clean spacing, low-clutter sections).

When adding more style references, rename files by role for clarity:
- `hero-reference.png`
- `palette-reference.png`
- `card-reference.png`
- `portfolio-reference-1.png`

## style.reference Upgrade Pass
When you add your `style.reference` images, run this quick refinement cycle:
1. Compare the new references to the current palette and adjust `:root` color tokens.
2. Tune heading weight/spacing to match the reference typography rhythm.
3. Replace placeholder portfolio images with real campaign visuals.
4. Update hero visual anchor to the strongest reference motif.
5. Recheck contrast/readability after palette updates.
