## Plan: Remove the CV Section

### What will change
1. **`src/routes/index.tsx`**
   - Remove the `CV` component import.
   - Remove the `<CV />` render call between `<Education />` and `<Gallery />`.

2. **`src/components/portfolio/navbar.tsx`**
   - Remove the `{ href: "#cv", label: "CV" }` entry from the `links` array.

3. **Cleanup**
   - Delete the now-unused file `src/components/portfolio/cv.tsx`.

### What will NOT change
- The CV asset file (`src/assets/suman-cv.pdf.asset.json`) will remain in the project in case it is needed later.
- No other sections, styling, or functionality will be modified.

### Verification
- Run `bun run build` to confirm the site still compiles cleanly after the removals.