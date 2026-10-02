# Clean hero, merge Experience + Expertise, reorder sections

## 1. Remove the circle and line grid
- Delete the background grid layer and the circular blueprint drawing from the top (hero) section. Portrait, text and buttons stay unchanged.

## 2. One "Experience" section
- Merge the Expertise content into Experience: employment timeline first (all dates and duties unchanged), then the four expertise groups, professional domains and software below it, under the same Experience heading.
- Remove items that repeat (e.g. "Contract Administration" listed in several groups appears once; domain cards that only restate expertise groups are folded in).
- Remove the separate "Expertise" tab from the menu and search.

## 3. New order (menu and page)
Home, About, Experience, Gallery, Education, Research, Contact.
- Representative Assignments stays inside/after Experience; Documents (CV) sits just before Contact.

## 4. Check
- English and Nepali both updated; test on phone and laptop sizes, menu links scroll to the right place, no errors.

## Technical notes
- `hero.tsx`: drop `editorial-grid` div and `blueprint-drift` svg.
- `experience.tsx` renders the expertise/domains/software blocks (deduplicated); `expertise.tsx` removed from `index.tsx`; `nav.expertise` link removed in `navbar.tsx` and `site-search.tsx`.
- Reorder components in `src/routes/index.tsx` and links in `navbar.tsx`.
