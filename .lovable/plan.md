# Architectural editorial portfolio redesign

## Goal and guardrails
- Refine the existing single-page portfolio in place, reusing its TanStack Start structure, bilingual content system, local portrait/gallery assets, CV, contact form, search, date strip, theme control, and deployment setup.
- Preserve every verified fact, role, date, responsibility, publication, DOI, image, contact detail, and existing link. Do not add unverified projects, credentials, metrics, awards, citations, or professional claims.
- Keep the current domain and single-page anchor routing compatible with GitHub and Vercel; retain `nitro: true` and the existing public MCP behavior.
- Use the selected **Architectural Editorial System** direction: disciplined 12-column layouts, warm paper surfaces, architectural navy/charcoal, muted engineering teal, neutral gray, modern sans-serif typography, fine rules, technical micro-labels, and subtle blueprint/contour details.

## Design system and shared structure
- Replace the serif-led visual system with **Manrope** for display/body text and a restrained monospace face for dates, labels, DOI data, and coordinate-style details.
- Consolidate the palette into semantic light/dark tokens: architectural navy/charcoal, warm off-white, muted teal/engineering blue, and neutral grays. Remove unnecessary gradients, glass effects, large radii, and heavy shadows.
- Create reusable primitives for technical labels, section headers, focus/domain cards, reveal behavior, and number counters so every section shares the same alignment and rhythm.
- Use full-width editorial bands rather than nested cards, with generous whitespace, crisp 1px rules, small radii, visible focus states, and touch targets of at least 44px.
- Add only restrained motion: slow contour drift, one-time section/timeline reveals, credential counters, publication hover feedback, and gallery lightbox transitions. Disable all nonessential motion under `prefers-reduced-motion`.

## Navigation and opening experience
- Rebuild the sticky header around the exact order: **Home, About, Experience, Expertise, Research, Education, Gallery, Contact**.
- Keep search, English/Nepali toggle, theme toggle, and Nepali/A.D. clock; add a prominent **Download CV** action using the current PDF.
- Preserve the accessible mobile menu while improving focus management, `aria-expanded`, spacing, and touch ergonomics.
- Recompose the hero as the selected split-screen editorial layout: verified identity and professional statement on the left, existing unaltered portrait on the right, and subtle architectural grid/contour/water-flow linework behind it.
- Use **View Professional Profile** to move to About and preserve the current CV download as the secondary action. Keep the verified “Gazetted Class III · Civil Engineer” label.
- Add a full-width credential rail immediately below with the verified values: 7+ years, NEC 20971, M.Sc. CGPA 3.77, B.E. 79.65%, and 3 publications. Counters run once on first entry and resolve immediately when reduced motion is preferred.

## Professional profile and expertise
- Restructure About into short bilingual paragraphs under **Engineering Rooted in Research & Rigor**, retaining the current professional biography and removing no verified career or education information.
- Add four bilingual focus areas using only supplied expertise: Public Infrastructure, Project Delivery, Procurement, and Research.
- Replace the current generic Skills presentation with:
  - a four-category **Expertise** grid for Water & Infrastructure, Construction Management, Procurement, and Engineering;
  - a separate **Software** grid containing all existing tools, without percentages or invented proficiency levels;
  - concise functional descriptors only where they can be derived from existing responsibilities and content.
- Preserve the existing Selected Works assignment content as a subordinate **Representative Assignments** block so no factual content is lost.
- Add **Selected Professional Domains** as a separate four-card editorial band using exactly the supplied non-confidential domain wording; do not imply named or confidential projects.

## Experience, research, and education
- Refine the existing Experience timeline rather than replacing its data: continuous line, organization-specific line icons, consistent B.S./A.D. periods, and three concise responsibilities per role. Preserve every supplied date and responsibility; where a current entry has only two bullets, do not fabricate a third.
- Use lightweight intersection-based reveals with no animation dependency.
- Make **Research & Publications** a major dark/navy editorial band. Keep the three papers, years, author strings, journals, pages, and existing DOI links exactly as stored.
- Add **Read Paper** only where an actual DOI exists; present the 2018 paper without a fabricated link.
- Add only the supplied research metrics: 03 Publications, 2025–2026, and Construction & Infrastructure Research. Do not add citation counts, h-index, impact factors, or rankings.
- Add a bilingual **Research Interests** tag row using the seven supplied topics.
- Rebuild Education as an academic timeline with strongest emphasis on the verified M.Sc. and B.E., followed by LL.B., +2 Science, and SLC, preserving all current dates, scores, institutions, and status.

## Gallery, documents, contact, and footer
- Rename the photo section **Personal Moments**, keep it below professional and research content, and retain every existing local image and caption.
- Separate the official portrait from personal photos, use a responsive masonry-style layout without distortion, lazy-load below-fold images, and add an accessible keyboard-operable lightbox with close/previous/next controls.
- Add a compact **Documents** band with the existing CV only: Curriculum Vitae / Updated Professional CV / Download CV, plus an in-page View Research link. Do not expose absent documents.
- Refine Contact around **Let’s Build Something Solid** and the supplied government-appropriate collaboration statement. Keep primary email `er.sumankhadka@gmail.com`, official government email, phone, map, current social links, and the form’s existing validation/submission behavior.
- Resolve location presentation without inventing a new address: use **Koshi Province, Nepal** as the general public-facing label; retain Myanglung/Terhathum only as the existing home label and Itahari/Sunsari only with the existing contact map/location context.
- Rebuild the footer with name, professional descriptor, and links to About, Experience, Research, Education, CV, and Contact. Include only social/professional URLs already present; omit disabled placeholders from the footer.

## Content integrity and bilingual coverage
- Extend both English and Nepali dictionaries for every new label, focus area, domain, research interest, metric, document action, and accessibility label.
- Keep English as the default on each fresh visit and preserve the current toggle behavior.
- Centralize publication facts and DOI metadata so language switching cannot mismatch a title, year, or DOI.
- Keep the professional biography free of marital information and remove spouse data from search metadata/structured data, while retaining all personal photos already in the gallery.

## SEO and structured data
- Update the leaf page metadata to the requested title and description, using absolute canonical and Open Graph URLs for `https://www.suman-khadka.com.np/`.
- Remove duplicate/stale root metadata that currently describes different specializations, while preserving sitewide charset, viewport, font, favicon, and site-name defaults.
- Keep the existing favicon and use a durable project-owned share image only if it is served from an absolute production URL and matches visible imagery.
- Refine Person JSON-LD to include only verified professional/public information and no unnecessary marital data.
- Add one `ScholarlyArticle` entry per publication with only verified title, author, year, journal, pages, and DOI URL where available.
- Correct `sitemap.xml` to use the absolute production URL and retain an open, valid `robots.txt`.

## Performance and accessibility
- Add explicit intrinsic dimensions/aspect ratios, responsive `sizes`, eager/high-priority loading for the hero portrait, and lazy loading for below-fold gallery images.
- Audit local image formats and create optimized WebP/AVIF renditions where they materially reduce payload, while retaining originals in the project and never hotlinking replacements.
- Keep animations CSS/native where practical and avoid adding a large animation package; defer the map iframe until near the viewport if possible.
- Preserve one clear H1, semantic section headings, labelled form fields, descriptive image alt text, keyboard navigation, visible focus rings, sufficient contrast, and screen-reader labels for icon controls.

## Verification
- Test at **360×800, 390×844, 768×1024, 1366×768, and 1920×1080** for overflow, portrait crop, navigation, typography, timeline stacking, research cards, gallery/lightbox, and touch targets.
- Verify English/Nepali switching, search, theme toggle, date display, every anchor, CV download, both DOI links, social links, map, gallery controls, keyboard operation, contact-form validation, and reduced-motion behavior.
- Validate the rendered metadata, canonical URL, JSON-LD, favicon, sitemap, robots file, and production-compatible local asset paths.