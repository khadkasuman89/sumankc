# Portfolio update — layout, images, research DOIs

## 1. Date & time at the top
Move the Nepali BS date/time card out of the hero body and into a slim strip pinned at the very top of the homepage, above the navbar, so it is the first thing visible on desktop and mobile.

## 2. Photos not loading on Vercel (via GitHub)
Cause: the images are currently referenced through Lovable's CDN pointer URLs (`/__l5e/assets-v1/...`). That path is served only by Lovable hosting, so on a Vercel deployment those requests 404 and the images stay blank.

Fix: store the portrait, the couple photo and the CV inside the repository (`src/assets/`) and reference them through normal imports so Vite bundles them into the build. Then they load identically on Lovable, Vercel, or any static host.

## 3. Research section — full citations with DOI links
Rewrite the three entries with journal/volume/page detail and a clickable DOI link each:
- 2026 — *A Study on Bidding Trend and Performance of Construction Projects: A Case Study of Water Supply Projects in Koshi Province, Nepal* — International Journal on Engineering Technology and Infrastructure Development 2(2):197–211 — doi.org/10.3126/injet-indev.v2i2.95726
- 2025 — *Evaluation of Factors Causing Cost Variation in Construction of Water Supply Projects in Nepal* — Mid-West University Journal of Engineering & Innovation 1:119–135 — doi.org/10.3126/mujoei.v1i1.91107
- 2018 — *Ranking of Public Bus Alternatives Using Hybrid Multi-Criteria Decision Making Approach Under Fuzzy Environment: A Case Study of Kathmandu* — October 2018, co-authors Anil Marsani, Subid Ghimire, Saurav Parajuli and others (7 authors total)

Each card gets a "View paper (DOI)" link opening in a new tab. The 2018 paper has no DOI supplied, so it will show authors and venue without a DOI link unless you provide one.

## 4. Skills — names only
Remove the percentages and progress bars. Each group becomes a clean list of skill names (chips), keeping the three groups: Engineering Software, Technical Skills, Web & Computer.

## 5. Education — add LLB
Add a card: **LL.B. (3-year)**, Tribhuvan University, Nepal — commenced 2083 BS (ongoing).

## 6. Contact — Google Map for Itahari
Add an embedded map of Itahari, Sunsari below the contact details, and update the Location line from Myanglung to Itahari, Sunsari, Nepal. The map uses a plain Google Maps embed (no API key needed), so it works on Vercel too.

## 7. Gallery + cover photo
Use the newly uploaded studio portrait (25X30 passlens) as the hero cover photo, replacing the current one, and also refresh the gallery portrait with it. The photo with Mrs. Baneeka Thapa Khadka stays. If you meant additional gallery photos, attach them and I'll add them in the same grid.

## 8. Navigation order
Reorder the tabs to: Home · About · Experience · Gallery · Education · Research · Contact. The Skills tab is removed from the navbar (the Skills section itself stays on the page, reachable by scrolling) — tell me if you'd rather delete the Skills section entirely.

## Technical notes
- Files touched: `src/routes/index.tsx` (top strip placement, JSON-LD location), `src/components/portfolio/nepali-clock.tsx`, `hero.tsx`, `navbar.tsx`, `skills.tsx`, `education.tsx`, `research.tsx`, `contact.tsx`, `gallery.tsx`.
- Images move from `.asset.json` CDN pointers to bundled imports in `src/assets/`; the CV PDF gets the same treatment so its download link works off-Lovable.
- `vite.config.ts` keeps `nitro: true`; contact email stays khadkasuman89@gmail.com.
