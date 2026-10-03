# Finish verification and tidy up

## Verified working (no changes needed)
- Phone (360px) and desktop (1366px): no horizontal overflow, no page errors.
- Top menu order: Home, About, Education, Experience, Gallery, Research, Contact — every link jumps to the right section.
- No Download CV button in the top menu.
- Contact shows all five links: Facebook, Instagram, TikTok, LinkedIn, personal website.
- Page order: Home, About, Education, Experience, Assignments, Gallery, Research, Contact.

## Remaining small fixes
1. **Footer link order** — the footer still lists links in the old order (About, Experience, Research, Education, CV, Contact). Reorder to match the page: About, Education, Experience, Research, CV, Contact.
2. **Roadmap** — mark the completed tasks (social links, CV button removal, Education move, navigation verification) as done in `roadmap.md`.

## Technical notes
- `src/components/portfolio/footer.tsx`: reorder the `links` array only; no content changes.
- `roadmap.md`: check off the three open items.
