# Portfolio redesign — remaining work

The design foundation is already in place: the architectural type and colour system, section heading style, page metadata cleanup, sitemap, and optimized image copies. What remains is rebuilding the page sections themselves and verifying everything.

## 1. Navigation and hero
- Sticky navigation in the exact order: Home, About, Experience, Expertise, Research, Education, Gallery, Contact, plus a prominent Download CV button.
- Keep search, English/Nepali toggle, theme toggle, and the Nepali/A.D. date strip. Add `aria-expanded` to the mobile menu button and keep focus handling clean.
- Hero: split layout with name, the verified one-line professional statement, "Gazetted Class III · Civil Engineer" label, existing portrait unaltered (loaded with priority), and very subtle grid/contour linework.
- Buttons: View Professional Profile (to About) and Download CV (existing PDF).

## 2. Credential strip
Full-width band below the hero with only verified values: 7+ years experience, NEC 20971, M.Sc. CGPA 3.77, B.E. 79.65%, 3 publications. Numbers count up once on first view and appear instantly when reduced motion is preferred.

## 3. About, Expertise, Software, Domains
- About: heading "Engineering Rooted in Research & Rigor", existing biography split into short paragraphs, no personal/marital details, plus four focus areas (Public Infrastructure, Project Delivery, Procurement, Research).
- Expertise: four-category grid (Water & Infrastructure, Construction Management, Procurement, Engineering) with simple line icons.
- Software: card grid of the existing tools only, no invented proficiency levels.
- Existing Selected Works content is kept as a subordinate "Representative Assignments" block, with "Selected Professional Domains" as four editorial cards using only the supplied non-confidential wording.

## 4. Experience, Research, Education
- Experience: refined vertical timeline with a continuous line, organization icons, B.S./A.D. periods, and scroll reveals. Every existing date and responsibility stays exactly as stored; no third bullet is invented where only two exist.
- Research: the visual centrepiece as a dark navy band. Each paper keeps its year, title, journal, pages, authors, and existing DOI. "Read Paper" appears only where a DOI exists (the 2018 paper has none). Metrics limited to 03 Publications, 2025–2026, Construction & Infrastructure Research. Adds a Research Interests tag row with the seven supplied topics.
- Education: academic timeline emphasising M.Sc. and B.E., then LL.B., +2 Science, SLC — all dates, scores, and status unchanged.

## 5. Documents, Gallery, Contact, Footer
- Documents: compact band with the existing CV (Download CV) and a View Research link only.
- Gallery: renamed "Personal Moments", placed after the professional and research sections, official portrait kept separate from personal photos, masonry-style grid with no cropping distortion, lazy loading, and a keyboard-operable lightbox.
- Contact: "Let's Build Something Solid" with the government-appropriate collaboration line, professional email, official email, phone, existing map, existing social links, and the current form behaviour untouched.
- Location wording: Koshi Province, Nepal as the public label; Myanglung/Terhathum only as the home label; Itahari/Sunsari only with the map.
- Footer: name, professional descriptor, and links to About, Experience, Research, Education, CV, Contact — real links only.

## 6. Bilingual content, structured data, verification
- Every new label, focus area, domain, interest, metric, and accessibility string added to both English and Nepali, with English still the default on each visit.
- Person structured data limited to verified professional information (no marital data), plus one scholarly-article entry per publication using only verified fields.
- Verify at 360×800, 390×844, 768×1024, 1366×768 and 1920×1080: no sideways scrolling, portrait crop, stacked timeline, gallery and lightbox, touch targets. Check language switching, search, theme, dates, every menu link, CV download, both DOI links, social links, map, keyboard navigation, form validation, and reduced motion.

## Technical notes
- Reuse the existing components in `src/components/portfolio/`; new sections (credential strip, expertise, software, domains, documents, research interests) are added as small sibling components and composed in `src/routes/index.tsx`.
- Content stays centralized in `src/lib/translations.ts`; publication year/DOI data moves into one shared source so language switching cannot mismatch a title, year, or DOI.
- Motion via CSS and intersection observers only; no animation library added. `nitro: true`, the public MCP route, local asset paths, and the existing domain/routing remain unchanged.
