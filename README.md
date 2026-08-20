# Your Art Shop — Homepage

## Files
- `index.html` — the homepage. Structure and content live here.
- `styles.css` — all colors, fonts, spacing. Start here to personalize the look.
- `script.js` — makes the carousel arrows/dots work, and fills in the copyright year.
- `images/` — put your actual image files here (see list below).

## Images this page expects
Drop files with these exact names into the `images/` folder, or rename the
`src="images/..."` references in `index.html` to match your own filenames.

| File | What it is |
|---|---|
| `logo.png` | Your logo, transparent background |
| `heart.png` | Your hand-drawn heart, transparent background, used as a nav divider |
| `carousel-wax-letters.jpg` | Stack of wax-sealed letters (Mail Club slide) |
| `carousel-cause-quiz.jpg` | Image for the "art for a cause" slide |
| `carousel-giftables.jpg` | Image for the giftables/personalized sticker slide |

Until you add real files, the browser will just show a broken-image icon
where each one goes — that's expected and fine while you're building.

## Where to personalize
Open `styles.css` and look at the `:root { ... }` block at the very top.
That's a list of every color and font used on the page, in one place —
change a value there and it updates everywhere it's used. The rest of the
file is organized into sections that match the page (Header, Carousel,
Newsletter) with comments explaining what each rule does.

## About the newsletter form
It's wired up for **Netlify Forms** already (`data-netlify="true"`), which
means once this is deployed on Netlify, submissions will show up in your
Netlify dashboard automatically — no backend code needed. If you'd rather
connect it to Mailchimp, Flodesk, or something else instead, just ask and
we'll swap it.

## Reusing the header and newsletter on other pages
The header (logo + nav + welcome message) and the newsletter footer are
meant to appear on every page. For now, the simplest approach — and the
easiest to understand while you're learning — is to copy those two blocks
from `index.html` into each new page you build. I marked both blocks
clearly with comments in the HTML. Once you have a few pages built and
copy/pasting starts to feel repetitive, we can look at a simple way to
share them automatically.

## Next steps
This is homepage-only for now, on purpose. Natural next pages: `shop.html`,
`about.html`, `mail-club.html`, `cause-quiz.html`, `contact.html` — happy to
build any of those next, using this same header/newsletter and design tokens.
