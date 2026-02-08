# Tasks: Extra Engineering Solutions Home Page

**Feature Branch**: `001-home-page`  
**Input**: Design documents from `/specs/001-home-page/`  
**Prerequisites**: plan.md (required), spec.md (required), data-model.md, research.md, contracts/, quickstart.md

**Tests**: This project does NOT include tests per constitutional mandate. All test-related tasks are forbidden.

**Organization**: Tasks are grouped by user story to enable independent implementation and manual verification of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/` at repository root
- Paths use absolute references from project root
- React components use `.tsx` extension
- TypeScript files use `.ts` extension

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Install react-router-dom dependency for multi-page navigation
- [X] T002 Create directory structure: src/components/home, src/components/layout, src/pages, src/assets/images, src/types, src/styles
- [X] T003 [P] Copy TypeScript content types from specs/001-home-page/contracts/content-types.ts to src/types/content.ts
- [X] T004 [P] Create src/styles/theme.css with CSS custom properties for brand colors (#ddc8ee primary, #ffffff secondary, #a61e1e accent)
- [X] T005 [P] Update tailwind.config.js to reference CSS custom properties and Roboto font family
- [X] T006 Update src/main.tsx to import theme.css

**Checkpoint**: Project structure ready with configuration complete

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T007 Create Container component in src/components/layout/Container.tsx with responsive max-width and padding
- [X] T008 [P] Setup Router configuration in src/App.tsx with BrowserRouter and Routes
- [X] T009 [P] Create placeholder AboutPage component in src/pages/AboutPage.tsx with "Coming Soon" message and link to home
- [X] T010 [P] Create placeholder ServicesPage component in src/pages/ServicesPage.tsx with "Coming Soon" message and link to home
- [X] T011 [P] Create placeholder ContactPage component in src/pages/ContactPage.tsx with "Coming Soon" message and link to home

**Checkpoint**: Foundation ready - routing works, placeholder pages exist, user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - First-Time Visitor Discovery (Priority: P1) 🎯 MVP

**Goal**: Display complete home page with all content sections (hero, services, mission, expertise, footer) to enable visitor discovery and lead conversion

**Independent Verification**: Navigate to home page (http://localhost:5173/) and verify all sections render correctly with proper layout on desktop (1280px), tablet (768px), and mobile (375px). All content should be visible and readable.

### Implementation for User Story 1

- [X] T012 [P] [US1] Create Navigation component in src/components/home/Navigation.tsx with logo, About/Services/Contact links, and desktop navigation
- [X] T013 [P] [US1] Add mobile hamburger menu to Navigation using shadcn Sheet component and lucide-react Menu icon
- [X] T014 [P] [US1] Create Hero component in src/components/home/Hero.tsx with background image, fallback color, headline, subheadline, and CTA button
- [X] T015 [P] [US1] Create ServiceCard component in src/components/home/ServiceCard.tsx with image, title, description, and alternating layout support
- [X] T016 [US1] Create Services component in src/components/home/Services.tsx with 4 ServiceCard instances using alternating image-left/right pattern
- [X] T017 [P] [US1] Create Mission component in src/components/home/Mission.tsx with title and content paragraphs
- [X] T018 [P] [US1] Create ExpertiseCard component in src/components/home/ExpertiseCard.tsx with lucide-react icon, title, and description
- [X] T019 [US1] Create Expertise component in src/components/home/Expertise.tsx with 6 ExpertiseCard instances (Factory, Monitor, Radio, Network, Gauge, Shield icons)
- [X] T020 [P] [US1] Create Footer component in src/components/home/Footer.tsx with 3 columns (logo, navigation links, contact info) and copyright
- [X] T021 [US1] Create HomePage component in src/pages/HomePage.tsx composing Navigation, Hero, Services, Mission, Expertise, Footer components
- [X] T022 [US1] Add HomePage route to src/App.tsx for "/" path
- [X] T023 [US1] Verify responsive layout on mobile (375px) - all sections stack vertically, text readable, touch targets 44x44px
- [X] T024 [US1] Verify responsive layout on tablet (768px) - appropriate two-column grids, no horizontal scroll
- [X] T025 [US1] Verify responsive layout on desktop (1280px) - full multi-column layouts with proper spacing

**Checkpoint**: At this point, User Story 1 should be fully functional - complete home page displays with all sections, responsive across devices

---

## Phase 4: User Story 2 - Navigation and Information Access (Priority: P2)

**Goal**: Enable visitors to navigate between pages using menu links and hero CTA button

**Independent Verification**: Click each navigation link (About, Services, Contact Us) and hero CTA button, verify they navigate to correct pages without errors. Test on both desktop and mobile (hamburger menu).

### Implementation for User Story 2

- [X] T026 [US2] Add Link components from react-router-dom to Navigation component for About, Services, Contact Us menu items
- [X] T027 [US2] Add Link component to Hero CTA button navigating to /contact
- [X] T028 [US2] Add Link component to Footer navigation links
- [X] T029 [US2] Verify About link navigates to /about page correctly
- [X] T030 [US2] Verify Services link navigates to /services page correctly
- [X] T031 [US2] Verify Contact Us link navigates to /contact page correctly
- [X] T032 [US2] Verify Hero CTA button navigates to /contact page correctly
- [X] T033 [US2] Verify mobile hamburger menu opens and closes correctly on tablet and mobile
- [X] T034 [US2] Verify mobile menu links navigate correctly and close menu after navigation

**Checkpoint**: At this point, User Stories 1 AND 2 should both work - home page displays AND navigation works independently

---

## Phase 5: User Story 3 - Multi-Device Access (Priority: P3)

**Goal**: Ensure consistent, optimized experience across all device sizes with appropriate responsive behavior

**Independent Verification**: Test on physical devices or browser DevTools responsive mode at 375px (mobile), 768px (tablet), 1280px (desktop), and 1920px (wide) widths. Verify no horizontal scroll, text readable, interactive elements have hover/focus states.

### Implementation for User Story 3

- [X] T035 [P] [US3] Add hover states to all Navigation links using Tailwind hover: classes
- [X] T036 [P] [US3] Add hover state to Hero CTA button (shadcn Button includes hover by default, verify it's visible)
- [X] T037 [P] [US3] Add hover states to Footer links using Tailwind hover: classes
- [X] T038 [US3] Verify focus indicators visible on all interactive elements using Tailwind focus: classes for keyboard navigation
- [X] T039 [US3] Test Services section image-text alternation on mobile (should stack vertically), tablet (alternating two-column), desktop (full two-column)
- [X] T040 [US3] Test Expertise cards grid on mobile (1 column), tablet (2 columns), desktop (3 columns)
- [X] T041 [US3] Test Footer layout on mobile (stacks vertically: logo, navigation, contact), tablet and desktop (3 columns side-by-side)
- [X] T042 [US3] Verify touch targets on mobile are minimum 44x44px for all buttons and links
- [X] T043 [US3] Test hero background image fallback by temporarily breaking image path, verify #ddc8ee background displays with content still visible
- [X] T044 [US3] Test on ultra-wide screen (1920px+) - verify content centers with Container max-width, no excessive stretching
- [X] T045 [US3] Test on very narrow screen (320px) - verify no horizontal scroll, all content accessible

**Checkpoint**: All user stories should now be independently functional - complete home page with working navigation and optimized responsive behavior

---

## Phase 6: Content & Assets

**Purpose**: Add real content and optimized images

- [X] T046 [P] Add hero background images to src/assets/images/ (desktop 1920x1080, tablet 1024x768, mobile 750x1334, WebP format)
- [X] T047 [P] Add 4 service images to src/assets/images/services/ (desktop 640x480, mobile 375x280, WebP format)
- [X] T048 [P] Optimize all images to WebP format with appropriate quality settings (hero ~250KB desktop, services ~60KB each)
- [X] T049 Update Hero component with actual image paths and responsive srcset attributes
- [X] T050 Update Services component with actual service data from data-model.md (PLC Automation, SCADA Systems, IoT Solutions, Unified Networks)
- [X] T051 Update Mission component with actual mission statement text from docs/extra_engineering_solution_ai_ready_markdown.md
- [X] T052 Update Expertise component with actual expertise data from data-model.md (6 cards with appropriate descriptions)
- [X] T053 Update Footer component with actual contact information (Addis Ababa, info@extraengineeringsolution.com, +251 933 941 798)
- [X] T054 Verify all images have descriptive alt text for accessibility
- [X] T055 Verify total page weight is under 2MB using browser DevTools Network tab

**Checkpoint**: All content and assets are real, images optimized, page weight meets target

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and final quality checks

- [X] T056 [P] Run TypeScript compiler and fix any type errors (npm run build)
- [X] T057 [P] Run ESLint and fix any linting issues (npm run lint)
- [X] T058 Verify no console errors or warnings in browser DevTools Console
- [X] T059 [P] Run Lighthouse accessibility audit, verify score ≥ 90, fix any issues identified
- [X] T060 [P] Run Lighthouse performance audit, verify score ≥ 85, fix any issues identified
- [X] T061 [P] Verify color contrast meets WCAG 2.1 Level AA standards (black text on #ddc8ee background, accent red on white)
- [X] T062 Test keyboard navigation (Tab through all elements, verify logical tab order, all interactive elements reachable)
- [X] T063 Verify page load time under 2 seconds on throttled "Fast 3G" connection in DevTools
- [X] T064 Verify bundle size under 500KB gzipped using build output
- [X] T065 Final manual verification using complete checklist in specs/001-home-page/quickstart.md sections 5.1-5.4
- [X] T066 Document any known issues or future improvements in implementation notes

**Checkpoint**: All quality gates pass, ready for deployment

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Content & Assets (Phase 6)**: Can run in parallel with user stories (assets can be added incrementally)
- **Polish (Phase 7)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Depends only on Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Depends on User Story 1 (needs pages to navigate to) - Can integrate with US1
- **User Story 3 (P3)**: Depends on User Story 1 and 2 (needs content and navigation to test responsiveness) - Enhancement of existing features

### Within Each User Story

- Components can be built in parallel if they don't depend on each other (marked with [P])
- Composition components (Services, Expertise, HomePage) depend on their child components (ServiceCard, ExpertiseCard, individual sections)
- Manual verification tasks should run after implementation tasks complete
- Responsive verification runs after all components exist

### Parallel Opportunities

- **Setup phase**: Tasks T003, T004, T005 can run in parallel (different files)
- **Foundational phase**: Tasks T009, T010, T011 can run in parallel (placeholder pages)
- **User Story 1 implementation**: Tasks T012, T013, T014, T015, T017, T018, T020 can run in parallel (independent components)
- **User Story 3 implementation**: Tasks T035, T036, T037 can run in parallel (different components)
- **Content phase**: Tasks T046, T047, T048 can run in parallel (different assets)
- **Polish phase**: Tasks T056, T057, T059, T060, T061 can run in parallel (independent audits)

---

## Parallel Example: User Story 1 Core Components

```bash
# Launch all independent components for User Story 1 together:
Task: "Create Navigation component in src/components/home/Navigation.tsx..."
Task: "Add mobile hamburger menu to Navigation using shadcn Sheet..."
Task: "Create Hero component in src/components/home/Hero.tsx..."
Task: "Create ServiceCard component in src/components/home/ServiceCard.tsx..."
Task: "Create Mission component in src/components/home/Mission.tsx..."
Task: "Create ExpertiseCard component in src/components/home/ExpertiseCard.tsx..."
Task: "Create Footer component in src/components/home/Footer.tsx..."

# Then after these complete, build composition components:
Task: "Create Services component in src/components/home/Services.tsx..." (depends on ServiceCard)
Task: "Create Expertise component in src/components/home/Expertise.tsx..." (depends on ExpertiseCard)

# Finally, compose the page:
Task: "Create HomePage component in src/pages/HomePage.tsx..." (depends on all above)
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T006)
2. Complete Phase 2: Foundational (T007-T011) - CRITICAL, blocks all stories
3. Complete Phase 3: User Story 1 (T012-T025)
4. **STOP and VALIDATE**: Manually verify home page displays correctly on all devices
5. Can deploy/demo at this point with MVP functionality

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Verify manually → Deploy/Demo (MVP - complete home page!)
3. Add User Story 2 → Verify manually → Deploy/Demo (navigation works)
4. Add User Story 3 → Verify manually → Deploy/Demo (fully responsive)
5. Add Content & Assets → Verify manually → Deploy/Demo (production-ready content)
6. Add Polish → Verify manually → Deploy/Demo (production quality)

Each phase adds value without breaking previous functionality.

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 core components (T012-T020)
   - Developer B: Content & Assets (can start early) (T046-T055)
   - Developer C: Placeholder pages and routing (T009-T011, T008)
3. After US1 complete:
   - Developer A: User Story 2 (navigation links) (T026-T034)
   - Developer B: User Story 3 (responsive polish) (T035-T045)
4. Final: Team runs Polish phase together (T056-T066)

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and manually verifiable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
- No testing tasks per constitution - use manual verification checklists in quickstart.md

---

## Task Summary

**Total Tasks**: 66
- Setup: 6 tasks
- Foundational: 5 tasks
- User Story 1: 14 tasks (T012-T025)
- User Story 2: 9 tasks (T026-T034)
- User Story 3: 11 tasks (T035-T045)
- Content & Assets: 10 tasks (T046-T055)
- Polish: 11 tasks (T056-T066)

**Parallel Opportunities**: 23 tasks marked [P] can run in parallel

**MVP Scope**: Tasks T001-T025 (31 tasks) = Complete home page with all sections

**Independent Test Criteria**:
- US1: Home page displays all sections correctly on 3 breakpoints
- US2: All navigation links work without errors
- US3: Responsive behavior optimized, hover/focus states visible

**Critical Path**: Setup (6) → Foundational (5) → US1 (14) = 25 tasks for MVP

