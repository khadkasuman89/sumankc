Remove the Projects and Achievements tabs/sections from the homepage.

Changes:
1. Update `src/routes/index.tsx`
   - Remove imports for `Projects` and `Achievements`
   - Remove `<Projects />` and `<Achievements />` from the page component render order
2. Update `src/components/portfolio/navbar.tsx`
   - Remove the `#projects` and `#achievements` entries from the `links` array
3. Verify no other references to these removed anchors remain; optionally delete the now-unused component files `src/components/portfolio/projects.tsx` and `src/components/portfolio/achievements.tsx` if they are not imported elsewhere.

No other page content or styling will be changed.