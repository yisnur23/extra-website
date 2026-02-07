<!--
SYNC IMPACT REPORT
==================
Version Change: [NONE] → 1.0.0
Ratification: Initial constitution established 2026-02-07

Principles Defined:
- I. Clean Code
- II. Responsive UI
- III. Intuitive UX
- IV. Appealing UI
- V. Minimal Dependencies

Added Sections:
- Technology Stack Requirements
- Development Workflow

Templates Requiring Updates:
✅ plan-template.md - Constitution Check section updated
✅ spec-template.md - Test references removed
✅ tasks-template.md - All test tasks removed

Follow-up: Constitution fully established and templates synchronized
-->

# Extra Website Constitution

## Core Principles

### I. Clean Code

Code MUST be clean, modular, and maintainable. Every component, function, and module MUST have a single, well-defined responsibility. Code MUST be self-documenting through clear naming and logical structure.

**Requirements**:
- Components MUST be small and focused (max 200 lines preferred)
- Functions MUST do one thing well
- Naming MUST be descriptive and consistent (camelCase for variables/functions, PascalCase for components)
- Complex logic MUST be extracted into utility functions or custom hooks
- Prop drilling MUST be avoided through proper component composition or context when appropriate
- Code duplication MUST be eliminated through reusable components and utilities

**Rationale**: Clean, modular code accelerates development, reduces bugs, and ensures long-term maintainability as the project scales.

### II. Responsive UI

All UI components MUST be fully responsive and work seamlessly across all device sizes (mobile, tablet, desktop). Mobile-first approach MUST be followed.

**Requirements**:
- Use Tailwind responsive classes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`)
- Test on minimum 3 breakpoints: mobile (375px), tablet (768px), desktop (1280px)
- Touch targets MUST be at least 44x44px on mobile
- Text MUST be readable without zooming on mobile (min 16px base)
- Layouts MUST adapt gracefully without horizontal scroll
- Images MUST be responsive and optimized

**Rationale**: Users access web applications from diverse devices. Responsive design ensures consistent user experience and maximizes accessibility.

### III. Intuitive UX

User experience MUST be intuitive and require minimal learning curve. Users MUST understand how to interact with the interface without instructions.

**Requirements**:
- Navigation MUST be clear and consistent across all pages
- Interactive elements MUST provide clear visual feedback (hover, active, disabled states)
- Forms MUST provide inline validation and clear error messages
- Loading states MUST be indicated for asynchronous operations
- Actions MUST be reversible where possible or require confirmation for destructive operations
- Information architecture MUST follow user mental models and common patterns
- Accessibility MUST follow WCAG 2.1 Level AA standards (semantic HTML, ARIA labels, keyboard navigation)

**Rationale**: Intuitive UX reduces friction, increases user satisfaction, and decreases support burden.

### IV. Appealing UI

Visual design MUST be polished, modern, and aesthetically pleasing. Consistency in design language MUST be maintained throughout the application.

**Requirements**:
- Use shadcn/ui components as the foundation for consistent design
- Maintain consistent spacing using Tailwind spacing scale (multiples of 4px)
- Typography MUST use the defined font stack (@fontsource-variable/roboto)
- Color palette MUST be limited and consistent (use CSS custom properties)
- Animations MUST be subtle and purposeful (use tw-animate-css)
- Icons MUST be consistent (use lucide-react icon set exclusively)
- Visual hierarchy MUST be clear through size, weight, color, and spacing
- Dark/light mode support is RECOMMENDED but not mandatory for v1

**Rationale**: Appealing UI creates positive first impressions, builds trust, and differentiates the product in competitive markets.

### V. Minimal Dependencies

Dependencies MUST be minimal and justified. Every dependency MUST provide significant value and MUST NOT be added for trivial functionality.

**Requirements**:
- New dependencies MUST be approved and documented with justification
- Prefer native browser APIs and standard React patterns over libraries
- Utility dependencies (lodash, moment.js, etc.) are DISCOURAGED unless absolutely necessary
- Bundle size MUST be monitored (use `vite build --report`)
- Duplicate functionality across dependencies MUST be avoided
- Dependencies MUST be actively maintained and well-supported

**Current approved stack**:
- React 19.2.0 (core framework)
- Tailwind CSS 4.1.18 (styling)
- shadcn component library (UI components)
- lucide-react (icons)
- Supporting: class-variance-authority, clsx, tailwind-merge (utility)

**Rationale**: Fewer dependencies mean smaller bundle sizes, faster builds, fewer security vulnerabilities, and reduced maintenance burden.

## Technology Stack Requirements

### Mandatory Technology Constraints

**Framework**: React.js 19.2.0 with TypeScript  
**Styling**: Tailwind CSS 4.1.18 exclusively (no CSS-in-JS, no styled-components)  
**Components**: shadcn/ui components (from local component library)  
**Icons**: lucide-react only  
**Build Tool**: Vite 7.2.4  
**Type Safety**: TypeScript 5.9.3 with strict mode enabled

### Forbidden Practices

**Testing is ABSOLUTELY FORBIDDEN**:
- NO test files (no `.test.tsx`, `.spec.tsx`, `.test.ts`, `.spec.ts`)
- NO testing frameworks (no Jest, Vitest, Testing Library, Cypress, Playwright)
- NO test scripts in package.json
- NO test directories (`tests/`, `__tests__/`)
- NO test coverage tools
- NO CI/CD test gates

**Rationale**: Project scope explicitly excludes testing to maximize development velocity and reduce complexity. Quality assurance will be handled through manual verification and production monitoring.

### Discouraged Patterns

- State management libraries (Redux, MobX, Zustand) - use React Context + hooks
- Form libraries (Formik, React Hook Form) - build custom form handling with React state
- Animation libraries beyond tw-animate-css
- Date libraries (moment, date-fns) - use native Date API or Intl
- HTTP clients beyond native fetch
- Routing libraries for single-page apps - keep it simple

## Development Workflow

### Code Structure

```
src/
├── components/        # Reusable UI components (shadcn + custom)
│   └── ui/           # shadcn base components
├── pages/            # Page-level components
├── hooks/            # Custom React hooks
├── utils/            # Utility functions and helpers
├── types/            # TypeScript type definitions
└── App.tsx           # Main application entry
```

### Component Development Guidelines

1. **Component Creation**: Start with shadcn component if available, extend as needed
2. **Props**: Define explicit TypeScript interfaces for all component props
3. **Composition**: Prefer component composition over prop drilling
4. **Hooks**: Extract reusable logic into custom hooks
5. **Styling**: Use Tailwind utility classes; avoid inline styles

### Quality Gates

**Before Committing**:
- ✅ Code MUST compile without TypeScript errors
- ✅ Linting MUST pass (`npm run lint`)
- ✅ UI MUST be manually verified on mobile and desktop
- ✅ Console MUST have no errors or warnings
- ✅ All interactive elements MUST have visible states

**Before Merging**:
- ✅ Feature MUST be manually tested across key user flows
- ✅ Responsive behavior MUST be verified
- ✅ Code review MUST confirm clean code principles
- ✅ Bundle size impact MUST be acceptable (check `npm run build`)

### Review Process

Code reviews MUST verify:
1. Adherence to all 5 core principles
2. No new testing code introduced
3. Dependencies justified if added
4. TypeScript types are properly defined
5. Components are properly modular
6. Responsive behavior is implemented
7. User experience is intuitive

## Governance

### Amendment Process

This constitution supersedes all other development practices and guidelines. Amendments require:
1. Written proposal with rationale
2. Impact assessment on existing codebase
3. Team consensus
4. Version bump following semantic versioning:
   - **MAJOR**: Principle removal or incompatible changes
   - **MINOR**: New principle or section added
   - **PATCH**: Clarifications, wording improvements

### Compliance

- All pull requests MUST be reviewed for constitutional compliance
- Violations MUST be justified in writing and approved
- Complexity introduced contrary to principles MUST document simpler alternatives considered and rejected
- Constitution compliance is MANDATORY for merging

### Evolution

This constitution is a living document. As the project evolves:
- Principles may be refined based on learnings
- Technology constraints may be updated as stack evolves
- Governance processes may be adjusted for team efficiency

**Version**: 1.0.0 | **Ratified**: 2026-02-07 | **Last Amended**: 2026-02-07
