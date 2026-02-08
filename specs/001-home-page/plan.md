# Implementation Plan: Extra Engineering Solutions Home Page

**Branch**: `001-home-page` | **Date**: 2026-02-07 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `/specs/001-home-page/spec.md`

## Summary

Build a professional, responsive home page for Extra Engineering Solutions, a leading industrial automation company in Ethiopia. The page showcases the company's expertise in PLC-based control systems, SCADA systems, IoT/MQTT solutions, and industrial automation. The design emphasizes lead conversion through clear value proposition, service offerings, expertise cards, and prominent contact CTAs.

**Technical Approach**: Single-page React component using shadcn/ui components, Tailwind CSS with company brand colors (#ddc8ee primary, #fff secondary, #a61e1e accents), and Roboto typography. Multi-page navigation architecture with static header. Competitor analysis informs modern, professional industrial aesthetic with alternating service layouts and icon-based expertise cards.

## Technical Context

**Language/Version**: React 19.2.0 + TypeScript 5.9.3  
**Primary Dependencies**: Tailwind CSS 4.1.18, shadcn/ui components, lucide-react icons, @fontsource-variable/roboto  
**Storage**: N/A (static content page)  
**Testing**: NOT APPLICABLE (project excludes testing per constitution)  
**Target Platform**: Modern web browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)  
**Project Type**: Single React application (multi-page architecture)  
**Performance Goals**: 
- Hero section First Contentful Paint < 1.5s
- Full page load < 2s on 5 Mbps connection
- Lighthouse performance score > 85
- Total page weight < 2MB

**Constraints**:
- Total bundle size < 500KB (gzipped)
- Images optimized to WebP format with fallbacks
- Minimum 16px base font size for accessibility
- WCAG 2.1 Level AA compliance (target Lighthouse accessibility > 90)

**Scale/Scope**: Single home page, ~6 sections, 4 service entries, 6 expertise cards, multi-page navigation to 3 other pages

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Clean Code**: Components are modular and single-responsibility (Hero, Services, Mission, Expertise, Footer as separate components)
- [x] **Responsive UI**: Mobile-first design with Tailwind responsive classes (375px, 768px, 1280px breakpoints)
- [x] **Intuitive UX**: Clear navigation, visible hover states, WCAG 2.1 AA compliance, mobile hamburger menu
- [x] **Appealing UI**: shadcn Button component, consistent spacing (4px scale), brand colors, lucide-react icons
- [x] **Minimal Dependencies**: No new dependencies beyond approved stack
- [x] **NO TESTING**: No test files or frameworks
- [x] **Tech Stack**: React 19.2.0 + TypeScript + Tailwind 4.1.18 + shadcn only

**Status**: ✅ All gates pass

## Project Structure

### Documentation (this feature)

```text
specs/001-home-page/
├── plan.md              # This file
├── research.md          # Design system, competitor analysis, content strategy
├── data-model.md        # Content structure for services, expertise, etc.
├── quickstart.md        # Development and manual verification guide
├── contracts/           # TypeScript interfaces for content structures
│   └── content-types.ts # Service, Expertise, Footer interfaces
└── checklists/
    └── requirements.md  # Quality validation checklist
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── ui/              # shadcn base components (Button existing)
│   ├── home/            # Home page specific components
│   │   ├── Navigation.tsx        # Static navigation bar
│   │   ├── Hero.tsx              # Hero section with background image
│   │   ├── Services.tsx          # Services section with alternating layout
│   │   ├── ServiceCard.tsx       # Individual service entry component
│   │   ├── Mission.tsx           # Mission statement section
│   │   ├── Expertise.tsx         # Expertise cards grid
│   │   ├── ExpertiseCard.tsx     # Individual expertise card
│   │   └── Footer.tsx            # Three-column footer
│   └── layout/
│       └── Container.tsx         # Responsive container wrapper
├── pages/
│   ├── HomePage.tsx             # Main home page composition
│   ├── AboutPage.tsx            # Placeholder for About page
│   ├── ServicesPage.tsx         # Placeholder for Services page
│   └── ContactPage.tsx          # Placeholder for Contact page
├── assets/
│   └── images/                  # Hero background, service images
├── styles/
│   └── theme.css                # CSS custom properties for brand colors
├── types/
│   └── content.ts               # TypeScript interfaces
├── App.tsx                      # Router and page mounting
└── main.tsx                     # Application entry point
```

**Structure Decision**: Using Option 1 (Single React App) with additional organization:
- `/components/home/` subdirectory for home page components (keeps separation clear)
- `/components/layout/` for shared layout components (Container)
- `/pages/` for page-level components with routing
- `/styles/theme.css` for CSS custom properties (brand colors as CSS variables)
- No backend required (static content website)

## Complexity Tracking

> No constitution violations - all gates pass without justification needed.

---

# Phase 0: Research & Design Decisions

## Design System

### Color Palette

**Brand Colors** (from user requirements):
- **Primary**: `#ddc8ee` (light purple) - Used for primary accents, buttons, hover states
- **Secondary**: `#ffffff` (white) - Backgrounds, text on dark surfaces
- **Accent**: `#a61e1e` (deep red) - Sparingly for horizontal rules, critical CTAs, emphasis

**Extended Palette** (derived for UI hierarchy):
- **Background**: `#ffffff` (white)
- **Text Primary**: `#1a1a1a` (near-black for body text)
- **Text Secondary**: `#666666` (gray for supporting text)
- **Border**: `#e5e5e5` (light gray for subtle borders)
- **Hero Overlay**: `rgba(29, 29, 29, 0.4)` (dark overlay for hero background readability)

**CSS Custom Properties** (in `styles/theme.css`):
```css
:root {
  --color-primary: #ddc8ee;
  --color-secondary: #ffffff;
  --color-accent: #a61e1e;
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #666666;
  --color-border: #e5e5e5;
}
```

### Typography

**Font Family**: Roboto Variable (@fontsource-variable/roboto)
- **Headings**: Roboto, 600-700 weight
- **Body**: Roboto, 400 weight
- **Captions**: Roboto, 300 weight

**Scale** (Tailwind defaults):
- **Hero Heading**: `text-5xl md:text-6xl` (48px/60px)
- **Section Headings**: `text-3xl md:text-4xl` (30px/36px)
- **Card Headings**: `text-xl md:text-2xl` (20px/24px)
- **Body**: `text-base` (16px)
- **Small**: `text-sm` (14px)

### Spacing System

Using Tailwind's 4px scale:
- **Section Padding**: `py-16 md:py-24` (64px/96px vertical)
- **Container Max Width**: `max-w-7xl` (1280px)
- **Grid Gaps**: `gap-8 md:gap-12` (32px/48px)
- **Card Padding**: `p-6 md:p-8` (24px/32px)

## Competitor Analysis

**Observations from provided reference image**:

### Layout Patterns
1. **Hero Section**: Full-width background image with overlay, left-aligned text, prominent CTA button
2. **Services Section**: Alternating two-column layouts (image-text, text-image pattern)
3. **Trust Indicators**: Logo carousel showing partner brands (ABB, Rockwell, etc.)
4. **Card-Based Expertise**: Grid layout with icon + title + description pattern
5. **Visual Hierarchy**: Large typography, generous whitespace, clear section separation

### Copywriting Style
- **Headline Focus**: Results-oriented ("Unlock Manufacturing Efficiency", "Drive Efficiency & Profit")
- **Problem-Solution**: Identifies pain points ("Manual processes are draining productivity")
- **Value Propositions**: Specific benefits in bullet points with checkmarks
- **Professional Tone**: Technical but accessible language
- **Action-Oriented**: Strong CTAs ("Start Your Project", "Get In Touch")

### UI/UX Patterns
- **Navigation**: Clean, minimal top nav with logo left, links right
- **Visual Balance**: 50/50 image-text splits in service sections
- **Icons**: Simple, professional icons for expertise areas
- **Whitespace**: Generous padding between sections
- **Contrast**: Dark text on light backgrounds, light text on dark/image overlays

**Adaptations for Extra Engineering Solutions**:
- Maintain professional industrial aesthetic
- Use provided brand colors (#ddc8ee, #a61e1e) instead of competitor's blue
- Adapt copywriting to highlight SCADA, IoT, PLC expertise
- Implement similar alternating service layout
- Use icon-based expertise cards with lucide-react icons

## Content Strategy

### Hero Section Content
**Headline**: "Innovative Industrial Automation Solutions for Ethiopia"  
**Subheadline**: "Leading provider of SCADA systems, PLC programming, and IoT solutions that enhance operational efficiency and real-time monitoring"  
**CTA**: "Get Started" → Contact Page

**Background Image**: Industrial robots/automation equipment (high-resolution, WebP optimized)

### Services Section (4 services from company docs)

**Service 1: Industrial Automation Engineering**
- **Icon/Image**: PLC control panel or industrial facility
- **Headline**: "PLC-Based Control Systems"
- **Description**: "Expert design, implementation, and optimization of PLC systems using Siemens S7-300/S7-400. Seamless integration for power generation and manufacturing facilities."
- **Position**: Image left, text right

**Service 2: SCADA & Monitoring**
- **Icon/Image**: SCADA dashboard/control room
- **Headline**: "Ignition SCADA Systems"
- **Description**: "Scalable SCADA development for real-time monitoring, data logging, and alarming. Advanced data visualization that drives operational efficiency."
- **Position**: Image right, text left

**Service 3: IoT & Remote Monitoring**
- **Icon/Image**: IoT sensors/connected devices
- **Headline**: "IoT & MQTT Solutions"
- **Description**: "Smart industrial environments with MQTT-based data acquisition. Secure device-to-device and device-to-cloud communication for remote monitoring."
- **Position**: Image left, text right

**Service 4: System Integration**
- **Icon/Image**: Network infrastructure/UNS diagram
- **Headline**: "Unified Network Structures"
- **Description**: "Unified Network Infrastructure implementation with secure and scalable connectivity across all industrial devices and systems."
- **Position**: Image right, text left

### Mission Statement Section
**Content** (from docs):
"To deliver innovative, reliable, and efficient automation technologies that enhance industrial processes, operational efficiency, and real-time monitoring capabilities. We are committed to driving Ethiopia's industrial transformation through cutting-edge SCADA systems, IoT solutions, and integrated control systems."

### Expertise Section (6 cards from company docs)

1. **Industrial Automation** - Factory icon
2. **SCADA Systems** - Monitor icon
3. **IoT & MQTT** - Radio icon or Wifi icon
4. **Unified Network Structures (UNS)** - Network icon
5. **Control System Design** - Gauge icon
6. **Safety System Integration** - Shield icon

### Footer Content
- **Logo**: "EXTRA Engineering Solution" text logo (left column)
- **Navigation Links** (center): About, Services, Contact Us, Privacy Policy
- **Contact Info** (right):
  - **Address**: Addis Ababa, Ethiopia
  - **Email**: info@extraengineeringsolution.com
  - **Phone**: +251 933 941 798
  - **Website**: www.extraengineeringsolution.com
- **Copyright**: "© 2026 Extra Engineering Solutions. All rights reserved."

## Technical Decisions

### Routing Strategy
**Decision**: Use React Router DOM for multi-page navigation  
**Rationale**: 
- Spec clarified multi-page architecture (About, Services, Contact Us as separate pages)
- React Router is lightweight, well-maintained, industry standard
- Enables clean URLs and browser history management
- ~10KB gzipped cost acceptable for multi-page UX

**Alternative Considered**: Manual window.location navigation
**Rejected Because**: Loses React's SPA benefits, full page reloads, no transition animations

### Image Optimization Strategy
**Decision**: WebP format with PNG/JPEG fallbacks, responsive srcset  
**Rationale**:
- WebP provides 25-35% smaller file sizes vs JPEG
- srcset enables device-appropriate image loading
- Reduces page weight to meet <2MB target

**Implementation**:
```tsx
<img
  srcSet="/assets/hero-mobile.webp 375w, /assets/hero-tablet.webp 768w, /assets/hero-desktop.webp 1920w"
  sizes="100vw"
  src="/assets/hero-desktop.jpg"
  alt="Industrial automation robots"
/>
```

### Mobile Navigation Pattern
**Decision**: Hamburger menu using shadcn Sheet component  
**Rationale**:
- Standard mobile pattern (intuitive)
- shadcn Sheet provides accessible drawer with overlay
- Saves vertical space on mobile
- Consistent with constitution's shadcn component requirement

### Hero Background Fallback
**Decision**: Solid background color (#ddc8ee) with CSS background-color property  
**Rationale**:
- Clarification specified solid color fallback on image load failure
- CSS background-color renders before background-image
- Maintains brand consistency with primary color
- Keeps CTA button visible and functional

**Implementation**:
```tsx
<section 
  className="min-h-screen bg-[#ddc8ee] bg-cover bg-center"
  style={{ backgroundImage: 'url(/assets/hero-bg.webp)' }}
>
```

### Component Modularity Strategy
**Decision**: Separate components for each major section (Hero, Services, Mission, Expertise, Footer)  
**Rationale**:
- Adheres to Clean Code principle (single responsibility)
- Each component < 200 lines
- Enables independent development and verification
- Facilitates responsive design adjustments per section

### Accessibility Implementation
**Decision**: Semantic HTML5 elements + ARIA labels where needed  
**Rationale**:
- `<nav>`, `<main>`, `<section>`, `<article>` for structure
- Alt text on all images (FR-014)
- Keyboard navigation for all interactive elements
- Sufficient color contrast (WCAG 2.1 AA)
- Focus indicators on all focusable elements

---

# Phase 1: Data Model & Contracts

## Content Type Definitions

See `contracts/content-types.ts` for complete TypeScript interfaces.

### Service Entry Structure
```typescript
interface ServiceEntry {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}
```

### Expertise Card Structure
```typescript
interface ExpertiseCard {
  id: string;
  iconName: keyof typeof icons; // lucide-react icon name
  title: string;
  description: string;
}
```

### Footer Data Structure
```typescript
interface FooterData {
  logo: string;
  navigationLinks: Array<{ label: string; href: string }>;
  contact: {
    address: string;
    email: string;
    phone: string;
    website: string;
  };
  copyright: string;
}
```

See `data-model.md` for full entity relationship diagrams and validation rules.

## Development Quickstart

See `quickstart.md` for complete setup and verification procedures.

**Key Steps**:
1. Install dependencies: `npm install react-router-dom`
2. Configure theme colors in `tailwind.config.js`
3. Create components following structure above
4. Implement mobile-first responsive design
5. Manual verification checklist in quickstart

---

# Phase 2: Not Included

This plan stops after Phase 1 (research, data model, contracts, quickstart).  
Run `/speckit.tasks` to generate the detailed task breakdown for implementation.
