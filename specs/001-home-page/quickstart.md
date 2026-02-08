# Quickstart Guide: Extra Engineering Solutions Home Page

**Feature**: 001-home-page  
**Date**: 2026-02-07  
**Purpose**: Step-by-step guide for development setup, implementation, and manual verification

---

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Code editor (VS Code recommended)
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+)

---

## 1. Environment Setup

### 1.1 Install Dependencies

```bash
# Navigate to project root
cd /home/ysnrs/Desktop/Work/Extra/extra-website

# Install new dependency for routing
npm install react-router-dom

# Verify installation
npm list react-router-dom
# Expected: react-router-dom@6.x.x
```

### 1.2 Configure Theme Colors

Create or update `src/styles/theme.css`:

```css
/**
 * Extra Engineering Solutions Brand Colors
 * Primary: #ddc8ee (light purple)
 * Secondary: #ffffff (white)
 * Accent: #a61e1e (deep red)
 */

:root {
  --color-primary: #ddc8ee;
  --color-secondary: #ffffff;
  --color-accent: #a61e1e;
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #666666;
  --color-border: #e5e5e5;
}
```

Import in `src/main.tsx`:

```tsx
import './styles/theme.css';
```

### 1.3 Update Tailwind Configuration

Update `tailwind.config.js` to reference CSS custom properties:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        sans: ['Roboto Variable', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

---

## 2. Project Structure Setup

### 2.1 Create Directory Structure

```bash
# From project root
mkdir -p src/components/home
mkdir -p src/components/layout
mkdir -p src/pages
mkdir -p src/assets/images
mkdir -p src/types
mkdir -p src/styles
```

### 2.2 Copy Type Definitions

```bash
# Copy content types to src
cp specs/001-home-page/contracts/content-types.ts src/types/
```

---

## 3. Component Implementation Order

Implement components in this order (dependencies first):

### Phase 1: Layout & Base Components
1. `src/components/layout/Container.tsx` - Responsive container wrapper
2. `src/types/content.ts` - Copy from contracts/content-types.ts

### Phase 2: Home Page Sections
3. `src/components/home/Navigation.tsx` - Top navigation
4. `src/components/home/Hero.tsx` - Hero section
5. `src/components/home/ServiceCard.tsx` - Individual service component
6. `src/components/home/Services.tsx` - Services section container
7. `src/components/home/Mission.tsx` - Mission statement
8. `src/components/home/ExpertiseCard.tsx` - Individual expertise component
9. `src/components/home/Expertise.tsx` - Expertise section container
10. `src/components/home/Footer.tsx` - Footer

### Phase 3: Pages
11. `src/pages/HomePage.tsx` - Compose all home sections
12. `src/pages/AboutPage.tsx` - Placeholder page
13. `src/pages/ServicesPage.tsx` - Placeholder page
14. `src/pages/ContactPage.tsx` - Placeholder page

### Phase 4: App Composition
15. `src/App.tsx` - Router configuration
16. `src/main.tsx` - Update imports

---

## 4. Development Workflow

### 4.1 Start Development Server

```bash
npm run dev
```

Expected output:
```
VITE v7.2.4  ready in 293 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 4.2 View in Browser

Open http://localhost:5173/ in your browser

---

## 5. Manual Verification Checklist

### 5.1 Constitution Compliance

**Clean Code**:
- [ ] All components are < 200 lines
- [ ] Each component has single responsibility
- [ ] No prop drilling (use composition)
- [ ] Naming is descriptive (PascalCase for components, camelCase for functions)
- [ ] No code duplication

**Responsive UI**:
- [ ] Mobile-first approach used
- [ ] Tailwind responsive classes applied (`sm:`, `md:`, `lg:`, `xl:`)
- [ ] Tested on 375px (mobile), 768px (tablet), 1280px (desktop)
- [ ] No horizontal scrolling on any breakpoint
- [ ] Touch targets 44x44px minimum on mobile

**Intuitive UX**:
- [ ] Navigation is clear and consistent
- [ ] All interactive elements have hover states
- [ ] Mobile navigation uses hamburger menu
- [ ] Keyboard navigation works (tab through all links/buttons)
- [ ] Focus indicators visible

**Appealing UI**:
- [ ] shadcn Button component used for CTAs
- [ ] Spacing follows 4px scale (p-4, p-6, p-8, etc.)
- [ ] Roboto font renders correctly
- [ ] Brand colors (#ddc8ee, #fff, #a61e1e) applied correctly
- [ ] lucide-react icons used in expertise cards
- [ ] Visual hierarchy is clear

**Minimal Dependencies**:
- [ ] Only react-router-dom added (approved)
- [ ] No unauthorized dependencies in package.json

**No Testing**:
- [ ] No test files created (.test.tsx, .spec.tsx)
- [ ] No testing frameworks installed

**Tech Stack**:
- [ ] React 19.2.0 used
- [ ] TypeScript strict mode enabled
- [ ] Tailwind CSS 4.1.18 used exclusively
- [ ] shadcn components used where applicable

### 5.2 Functional Requirements

**Navigation (FR-001, FR-011)**:
- [ ] Static navigation menu at top of page
- [ ] Links to "About", "Services", "Contact Us" present
- [ ] Navigation scrolls out of view (not sticky)
- [ ] Mobile navigation uses hamburger menu
- [ ] All links navigate to correct pages

**Hero Section (FR-002, FR-003)**:
- [ ] Background image displays
- [ ] Fallback color (#ddc8ee) shows before image loads
- [ ] Headline and subheadline render
- [ ] CTA button displays prominently
- [ ] CTA button navigates to /contact page
- [ ] Hero section is full viewport height

**Services Section (FR-004, FR-005)**:
- [ ] Four service entries display
- [ ] Alternating image-text layout (left-right-left-right)
- [ ] First service: image left, text right
- [ ] Second service: image right, text left
- [ ] Third service: image left, text right
- [ ] Fourth service: image right, text left
- [ ] Each service has image, title, description

**Mission Statement (FR-006)**:
- [ ] Mission section displays after services
- [ ] Title and content paragraphs render
- [ ] Text is readable and well-formatted

**Expertise Section (FR-007, FR-008)**:
- [ ] Six expertise cards display
- [ ] Cards show in grid layout (1 col mobile, 2 col tablet, 3 col desktop)
- [ ] Each card has icon, title, description
- [ ] lucide-react icons render correctly (Factory, Monitor, Radio, Network, Gauge, Shield)

**Footer (FR-009, FR-010)**:
- [ ] Footer has three columns
- [ ] Left column: Logo/company name
- [ ] Center column: Navigation links
- [ ] Right column: Contact info (address, email, phone, website)
- [ ] Copyright text at bottom
- [ ] Footer links are functional

**Responsive Design (FR-012)**:
- [ ] Mobile (375px): Single column, stacked layout
- [ ] Tablet (768px): Two-column grids, larger text
- [ ] Desktop (1280px): Full layout, max-width container
- [ ] Layout adapts smoothly between breakpoints

**Interaction Feedback (FR-013)**:
- [ ] All buttons show hover state
- [ ] All links show hover state (color change or underline)
- [ ] Focus states visible for keyboard navigation
- [ ] Active states visible on click

**Images (FR-014)**:
- [ ] All images have alt text
- [ ] Alt text is descriptive (not generic)
- [ ] Images are WebP format (or JPEG fallback)
- [ ] Images load and display correctly

**Technology (FR-015, FR-016, FR-017)**:
- [ ] Tailwind CSS used exclusively (no inline styles)
- [ ] shadcn Button component used
- [ ] lucide-react icons used (not other icon libraries)

### 5.3 Success Criteria

**SC-001: Navigation Speed**:
- [ ] Click "About" link → About page loads < 5 seconds
- [ ] Click "Services" link → Services page loads < 5 seconds
- [ ] Click "Contact Us" link → Contact page loads < 5 seconds
- [ ] Click hero CTA button → Contact page loads < 5 seconds

**SC-002: Page Load Performance**:
- [ ] Hero section visible within 2 seconds (on 5 Mbps connection)
- [ ] Open DevTools → Network tab → Throttle to "Fast 3G"
- [ ] Refresh page → Hero should appear in ~2 seconds

**SC-003: Responsive Range**:
- [ ] Open DevTools → Responsive mode
- [ ] Test 375px width → No horizontal scroll
- [ ] Test 768px width → No horizontal scroll
- [ ] Test 1280px width → No horizontal scroll
- [ ] Test 1920px width → Content centered, no overflow

**SC-004: Hover State Contrast**:
- [ ] All buttons and links have visible hover states
- [ ] Use contrast checker: https://webaim.org/resources/contrastchecker/
- [ ] Verify text/background contrast meets WCAG 2.1 AA (4.5:1 for normal text)

**SC-005: Service Identification**:
- [ ] Load home page
- [ ] Within 10 seconds, identify 3 services without scrolling/searching
- [ ] Services should be immediately visible after hero section

**SC-006: Mobile Text Readability**:
- [ ] DevTools → Responsive mode → 375px width
- [ ] All text should be readable without zooming
- [ ] Base font size ≥ 16px (check computed styles)

**SC-007: Lighthouse Accessibility**:
- [ ] DevTools → Lighthouse tab
- [ ] Run accessibility audit
- [ ] Score should be ≥ 90/100
- [ ] Fix any issues if score < 90

**SC-008: Page Weight**:
- [ ] DevTools → Network tab
- [ ] Clear cache, refresh page
- [ ] Total page weight should be < 2MB
- [ ] Check "Transferred" size at bottom of Network tab

### 5.4 Edge Cases

**Hero Background Image Failure**:
- [ ] Temporarily break hero image path in code
- [ ] Refresh page
- [ ] Verify solid #ddc8ee background displays
- [ ] Verify headline and CTA button still visible and functional
- [ ] Fix image path, verify image loads again

**Long Content Handling**:
- [ ] Replace a service description with 500+ character text
- [ ] Verify layout doesn't break
- [ ] Verify text wraps properly
- [ ] Verify no content overflow

**JavaScript Disabled**:
- [ ] DevTools → Settings → Disable JavaScript
- [ ] Refresh page
- [ ] Verify content is visible (static HTML)
- [ ] Note: Navigation won't work (React Router requires JS)
- [ ] Re-enable JavaScript

**Footer Long Address**:
- [ ] Replace footer address with very long text (200+ characters)
- [ ] Verify footer doesn't break layout
- [ ] Verify text wraps or truncates appropriately

**Ultra-Wide Screen**:
- [ ] Set browser width to 2560px (or use DevTools responsive mode)
- [ ] Verify content centers and doesn't stretch excessively
- [ ] Verify max-width container works

**Very Narrow Screen**:
- [ ] Set browser width to 320px
- [ ] Verify no horizontal scroll
- [ ] Verify text is readable
- [ ] Verify buttons/links are tappable

**Retina Display**:
- [ ] View on retina display (or simulate with DevTools DPR 2x)
- [ ] Verify images appear sharp (not pixelated)
- [ ] If using srcset, verify higher-res images load

---

## 6. Performance Verification

### 6.1 Lighthouse Audit

```bash
# In Chrome DevTools
1. Open DevTools (F12)
2. Click "Lighthouse" tab
3. Select categories: Performance, Accessibility, Best Practices, SEO
4. Click "Analyze page load"
5. Review scores
```

**Target Scores**:
- Performance: ≥ 85
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: ≥ 90

### 6.2 Bundle Size Analysis

```bash
# Build for production
npm run build

# Check bundle size
ls -lh dist/assets/*.js

# Expected output (approximate):
# index-XXXXX.js  ~180KB (gzipped ~60KB)
# Should be well under 500KB gzipped target
```

### 6.3 Image Optimization Check

```bash
# Check image sizes in dist/assets
ls -lh dist/assets/images/

# Each image should be:
# Hero images: < 250KB
# Service images: < 60KB each
```

---

## 7. Accessibility Verification

### 7.1 Keyboard Navigation

1. **Tab through page**:
   - Press Tab repeatedly
   - Verify logical tab order (top to bottom, left to right)
   - Verify all interactive elements receive focus
   - Verify focus indicator is visible

2. **Activate elements with keyboard**:
   - Tab to a link, press Enter
   - Verify navigation works
   - Tab to a button, press Enter
   - Verify button action works

3. **Mobile menu (if applicable)**:
   - Tab to hamburger menu button
   - Press Enter to open
   - Press Escape to close
   - Verify menu traps focus when open

### 7.2 Screen Reader Test (Optional but Recommended)

**macOS (VoiceOver)**:
```
1. System Preferences → Accessibility → VoiceOver → Enable
2. Navigate with VO + arrow keys
3. Verify all content is announced
4. Verify image alt text is read
5. Verify heading hierarchy is logical
```

**Windows (NVDA - free)**:
```
1. Download NVDA from https://www.nvaccess.org
2. Launch NVDA
3. Navigate with arrow keys
4. Verify all content is announced
```

### 7.3 Color Contrast Verification

**Tool**: WebAIM Contrast Checker (https://webaim.org/resources/contrastchecker/)

**Check these combinations**:
- Black text (#1a1a1a) on white (#ffffff) → Should pass AAA
- Black text (#1a1a1a) on primary (#ddc8ee) → Should pass AA
- Accent red (#a61e1e) on white (#ffffff) → Should pass AA

---

## 8. Browser Compatibility Testing

### Minimum Supported Browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Test Checklist:
- [ ] Chrome (latest): Full functionality
- [ ] Firefox (latest): Full functionality
- [ ] Safari (if on macOS): Full functionality
- [ ] Edge (latest): Full functionality
- [ ] Mobile Safari (iOS): Responsive layout, touch interactions
- [ ] Chrome Mobile (Android): Responsive layout, touch interactions

---

## 9. Pre-Deployment Checklist

Before marking feature complete:

**Code Quality**:
- [ ] TypeScript compiles without errors: `npm run build`
- [ ] ESLint passes: `npm run lint`
- [ ] No console errors in browser DevTools console
- [ ] No console warnings (or documented as acceptable)

**Content**:
- [ ] All placeholder text replaced with real content
- [ ] All images have proper paths and alt text
- [ ] Contact information is accurate
- [ ] Copyright year is correct (2026)

**Functionality**:
- [ ] All navigation links work
- [ ] All buttons perform expected actions
- [ ] Mobile menu opens and closes correctly
- [ ] No broken links (404 errors)

**Performance**:
- [ ] Page loads in < 2 seconds on broadband
- [ ] Bundle size < 500KB gzipped
- [ ] Images optimized (WebP format)
- [ ] Lighthouse performance score ≥ 85

**Accessibility**:
- [ ] Lighthouse accessibility score ≥ 90
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Alt text on all images

**Responsive**:
- [ ] Tested on mobile (375px)
- [ ] Tested on tablet (768px)
- [ ] Tested on desktop (1280px)
- [ ] No horizontal scroll on any size

---

## 10. Common Issues & Solutions

### Issue: Images not loading

**Solution**:
- Check image paths are correct relative to `public/` or `src/assets/`
- Verify images exist in specified locations
- Check browser DevTools Network tab for 404 errors

### Issue: Tailwind classes not applying

**Solution**:
- Verify `tailwind.config.js` content paths include your component files
- Restart dev server after config changes
- Check for typos in class names

### Issue: Navigation not working

**Solution**:
- Verify React Router is installed: `npm list react-router-dom`
- Check that `BrowserRouter` wraps your app in `App.tsx`
- Verify route paths match href values

### Issue: Mobile menu not appearing

**Solution**:
- Verify hamburger button has `md:hidden` class
- Check that desktop nav has `hidden md:flex` classes
- Verify shadcn Sheet component is properly imported

### Issue: Bundle size too large

**Solution**:
- Check for accidentally imported large libraries
- Verify images are optimized and using WebP
- Run `npm run build -- --report` to analyze bundle
- Remove unused imports

---

## 11. Deployment Notes

**Build Command**:
```bash
npm run build
```

**Output Directory**: `dist/`

**Environment Variables**: None required for this feature

**Server Configuration**:
- SPA mode: Configure server to serve `index.html` for all routes
- Example (nginx):
  ```nginx
  location / {
    try_files $uri $uri/ /index.html;
  }
  ```

---

## 12. Next Steps

After completing this feature:

1. **Run `/speckit.tasks`** to break down into detailed implementation tasks
2. **Implement placeholder pages** (About, Services, Contact) as future features
3. **Add content** - Replace placeholder images and refine copy with stakeholder input
4. **SEO optimization** - Add meta tags, structured data, sitemap
5. **Analytics integration** - Add Google Analytics or similar (if required)

---

**Quickstart Complete**: Follow this guide for efficient development and thorough verification of the Extra Engineering Solutions home page.

