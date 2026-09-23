# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted evenly:
- Casual browsers who discover the site with no fixed intent and are drawn in by atmosphere, photography, and story.
- Serious collectors, interior stylists, and design-literate buyers who recognize names like Joe Colombo and Bieffeplast, and who care about provenance, condition, and one-of-one status.

The site must work as a first impression for the former and as a credible source for the latter, without picking one over the other.

## Product Purpose

Collector's Room is the online showroom for a father-and-son antiques and vintage-design business based in Koningsbosch, NL. It presents two curated collections — Antique and Mid Century — lets visitors browse, learn the story behind each piece, and buy directly (iDEAL/card via Mollie) or inquire (WhatsApp/email). Success is a visitor who either completes a purchase or reaches out, having actually explored the room rather than bounced off a product grid.

## Positioning

The interactive "shop the room" browsing mechanism is the differentiator, not just the story or the rarity of the pieces. Instead of a grid of thumbnails, visitors explore real styled room photography with clickable hotspots on the actual pieces — the way you'd discover them walking through a showroom in person. Generic marketplaces (Whoppah, Catawiki) and most dealer sites do not offer this; Collector's Room also cross-lists on Whoppah as a secondary channel, but the room-based experience is what the direct site offers that Whoppah cannot.

## Operating Context

- Two parallel showrooms (Antique, Mid Century), each its own styled room photo with product hotspots, reachable via a Showroom switcher.
- A combined "All Products" catalogue spans both collections regardless of which showroom a visitor entered from, with live client-side search by name/category.
- Individual product pages include a shipping calculator (zones: NL, BE/DE/LU, rest of EU, UK, rest of world; size classes M/L) and a direct Mollie checkout button.
- Sold pieces stay listed rather than being removed: a diagonal "Sold" stamp and darkened overlay mark them in the catalogue grid, fading away on hover so the piece is still fully visible on demand. The showroom doubles as a portfolio of what has sold.
- Secondary contact and sales channels: phone, email, WhatsApp (link not yet configured), TikTok (@collectors.room, live), Whoppah (listing page pending), Instagram and eBay (placeholders, not yet linked).

## Capabilities and Constraints

- Fully static site (HTML/CSS/vanilla JS), no framework, no backend database. `js/catalog.js` is the single source of truth for every product and room; prices are duplicated in `functions/api/pay.js` (a Cloudflare Pages Function that talks to Mollie) for anti-tamper reasons and must be kept in sync by hand whenever a price changes.
- No accounts or cart: single-item purchase flow only, via Mollie-hosted checkout.
- Hosted on Cloudflare Pages, deployed from the `main` branch of the GitHub repo on every push. Static assets are cached aggressively by the platform in a way project-level cache headers can't fully override, so CSS/JS are referenced with a manual `?v=N` cache-busting query string that must be bumped on every CSS/JS edit, or changes will not reach returning visitors promptly.
- Undecided/open: whether WhatsApp ordering is activated (number not yet set), whether Instagram/eBay presence will be built out.

## Brand Commitments

- Name: Collector's Room. Run by "Jop & his father"; KVK 84405252; based in Koningsbosch, NL.
- Fraunces (serif) for headings and evocative copy; small uppercase monospace "kicker" labels above section headings; a handwritten Caveat-font signature ("Jop & his father") as a personal closing touch on the Contact section.
- Two intentional, distinct themes: dark oxblood for the Antique collection, light crème/orange for Mid Century (auto-applied via `css/mc.css`). These are deliberate brand choices, not inconsistencies to unify into one palette.
- These four elements (font, kickers, two-theme palette, signature) are confirmed as the complete set of non-negotiable brand constraints — nothing further was withheld.

## Evidence on Hand

- Real product photography exists for every listed piece, including both studio shots and in-situ "atmosphere" shots of items styled in a room.
- No testimonials, reviews, or press exist yet. Do not fabricate any.

## Product Principles

1. The room, not the grid, is the primary discovery mechanism — every surface should reinforce walking through and clicking, not just listing products.
2. The two collections share one system but keep their palettes distinct; never blend Antique and Mid Century into one generic look.
3. Personal, small-business warmth (the father-son story, the handwritten signature, direct contact channels) is a feature to preserve and extend, not filler to streamline away.
4. Sold pieces stay visible as proof of desirability rather than disappearing — the showroom is also a running portfolio.
5. Keep the implementation simple and static; resist adding backend complexity, accounts, or a cart beyond what direct sale plus inquiry require.
