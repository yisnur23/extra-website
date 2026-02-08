# Data Model: Extra Engineering Solutions Home Page

**Feature**: 001-home-page  
**Date**: 2026-02-07  
**Purpose**: Define content structures, validation rules, and entity relationships for home page components

---

## Entity Overview

The home page consists of 6 primary content entities:

1. **Navigation** - Top navigation bar with links
2. **Hero** - Primary hero section with background and CTA
3. **Service Entry** - Individual service offering (4 instances)
4. **Mission Statement** - Company mission and values text
5. **Expertise Card** - Area of expertise (6 instances)
6. **Footer** - Footer content with contact information

---

## 1. Navigation Entity

### Structure

```typescript
interface Navigation {
  logo: {
    text: string;        // "EXTRA Engineering Solution"
    href: string;        // "/"
  };
  links: NavigationLink[];
}

interface NavigationLink {
  id: string;            // Unique identifier (e.g., "about", "services")
  label: string;         // Display text (e.g., "About", "Services")
  href: string;          // Route path (e.g., "/about", "/services")
  external: boolean;     // Whether link opens in new tab
}
```

### Validation Rules

- **logo.text**: Required, non-empty string, max 100 characters
- **logo.href**: Required, valid route path starting with "/"
- **links**: Required array, min 1 item, max 6 items
- **link.id**: Required, unique within array, lowercase-hyphenated format
- **link.label**: Required, non-empty string, max 50 characters
- **link.href**: Required, valid route path or URL
- **link.external**: Required boolean

### Instance Data

```typescript
const navigation: Navigation = {
  logo: {
    text: "EXTRA Engineering Solution",
    href: "/",
  },
  links: [
    { id: "about", label: "About", href: "/about", external: false },
    { id: "services", label: "Services", href: "/services", external: false },
    { id: "contact", label: "Contact Us", href: "/contact", external: false },
  ],
};
```

---

## 2. Hero Section Entity

### Structure

```typescript
interface HeroSection {
  backgroundImage: {
    desktop: string;     // Path to desktop image (1920x1080)
    tablet: string;      // Path to tablet image (1024x768)
    mobile: string;      // Path to mobile image (750x1334)
    alt: string;         // Alt text for accessibility
  };
  fallbackColor: string; // Hex color for image load failure
  overlay: {
    enabled: boolean;    // Whether to show dark overlay
    opacity: number;     // 0-1, overlay opacity
  };
  content: {
    headline: string;    // Primary headline
    subheadline: string; // Supporting text
    cta: {
      primary: {
        text: string;    // Button text
        href: string;    // Destination route
      };
      secondary?: {      // Optional secondary CTA
        text: string;
        href: string;
      };
    };
  };
}
```

### Validation Rules

- **backgroundImage.desktop**: Required, valid image path (.webp/.jpg)
- **backgroundImage.tablet**: Required, valid image path
- **backgroundImage.mobile**: Required, valid image path
- **backgroundImage.alt**: Required, descriptive text, 50-150 characters
- **fallbackColor**: Required, valid hex color (e.g., "#ddc8ee")
- **overlay.enabled**: Required boolean
- **overlay.opacity**: Required, number between 0 and 1
- **content.headline**: Required, 10-80 characters
- **content.subheadline**: Required, 50-200 characters
- **cta.primary**: Required object
- **cta.primary.text**: Required, 5-30 characters
- **cta.primary.href**: Required, valid route path
- **cta.secondary**: Optional, same validation as primary if provided

### Instance Data

```typescript
const hero: HeroSection = {
  backgroundImage: {
    desktop: "/assets/hero/industrial-robots-desktop.webp",
    tablet: "/assets/hero/industrial-robots-tablet.webp",
    mobile: "/assets/hero/industrial-robots-mobile.webp",
    alt: "Industrial automation robots working in a modern manufacturing facility",
  },
  fallbackColor: "#ddc8ee",
  overlay: {
    enabled: true,
    opacity: 0.4,
  },
  content: {
    headline: "Innovative Industrial Automation Solutions for Ethiopia",
    subheadline: "Leading provider of SCADA systems, PLC programming, and IoT solutions that enhance operational efficiency and real-time monitoring",
    cta: {
      primary: {
        text: "Get Started",
        href: "/contact",
      },
    },
  },
};
```

---

## 3. Service Entry Entity

### Structure

```typescript
interface ServiceEntry {
  id: string;            // Unique identifier
  title: string;         // Service name/headline
  description: string;   // Service description
  image: {
    desktop: string;     // Desktop image path (640x480)
    mobile: string;      // Mobile image path (375x280)
    alt: string;         // Alt text for accessibility
  };
  imagePosition: 'left' | 'right';  // Which side image appears (desktop)
  order: number;         // Display order (1-4)
}
```

### Validation Rules

- **id**: Required, unique, lowercase-hyphenated format
- **title**: Required, 10-60 characters
- **description**: Required, 100-300 characters
- **image.desktop**: Required, valid image path (.webp/.jpg)
- **image.mobile**: Required, valid image path
- **image.alt**: Required, descriptive text, 50-150 characters
- **imagePosition**: Required, must be 'left' or 'right'
- **order**: Required, positive integer, unique within services array

### Relationship Rules

- **Alternating Pattern**: Services MUST alternate imagePosition
  - order 1 (odd): imagePosition = 'left'
  - order 2 (even): imagePosition = 'right'
  - order 3 (odd): imagePosition = 'left'
  - order 4 (even): imagePosition = 'right'

### Instance Data (4 services)

```typescript
const services: ServiceEntry[] = [
  {
    id: "plc-automation",
    title: "PLC-Based Control Systems",
    description: "Expert design, implementation, and optimization of PLC systems using Siemens S7-300/S7-400. Seamless integration for power generation and manufacturing facilities with focus on reliability and efficiency.",
    image: {
      desktop: "/assets/services/plc-systems-desktop.webp",
      mobile: "/assets/services/plc-systems-mobile.webp",
      alt: "Siemens PLC control panel in an industrial facility",
    },
    imagePosition: "left",
    order: 1,
  },
  {
    id: "scada-monitoring",
    title: "Ignition SCADA Systems",
    description: "Scalable SCADA development for real-time monitoring, data logging, and alarming. Advanced data visualization that drives operational efficiency and enables data-driven decision making.",
    image: {
      desktop: "/assets/services/scada-systems-desktop.webp",
      mobile: "/assets/services/scada-systems-mobile.webp",
      alt: "SCADA control room with multiple monitoring screens",
    },
    imagePosition: "right",
    order: 2,
  },
  {
    id: "iot-remote",
    title: "IoT & MQTT Solutions",
    description: "Smart industrial environments with MQTT-based data acquisition. Secure device-to-device and device-to-cloud communication for remote monitoring and predictive maintenance.",
    image: {
      desktop: "/assets/services/iot-solutions-desktop.webp",
      mobile: "/assets/services/iot-solutions-mobile.webp",
      alt: "IoT sensors and connected devices in smart industrial environment",
    },
    imagePosition: "left",
    order: 3,
  },
  {
    id: "unified-network",
    title: "Unified Network Structures",
    description: "Unified Network Infrastructure implementation with secure and scalable connectivity across all industrial devices and systems. Future-proof architecture for Industry 4.0.",
    image: {
      desktop: "/assets/services/network-infrastructure-desktop.webp",
      mobile: "/assets/services/network-infrastructure-mobile.webp",
      alt: "Network infrastructure diagram showing unified connectivity",
    },
    imagePosition: "right",
    order: 4,
  },
];
```

---

## 4. Mission Statement Entity

### Structure

```typescript
interface MissionStatement {
  title: string;           // Section heading
  content: string[];       // Array of paragraphs
  highlightedValues?: string[];  // Optional key values to emphasize
}
```

### Validation Rules

- **title**: Required, 10-50 characters
- **content**: Required array, 1-3 paragraphs
- **content[n]**: Each paragraph 100-400 characters
- **highlightedValues**: Optional array, 0-5 items
- **highlightedValues[n]**: Each value 5-30 characters

### Instance Data

```typescript
const mission: MissionStatement = {
  title: "Our Mission",
  content: [
    "To deliver innovative, reliable, and efficient automation technologies that enhance industrial processes, operational efficiency, and real-time monitoring capabilities.",
    "We are committed to driving Ethiopia's industrial transformation through cutting-edge SCADA systems, IoT solutions, and integrated control systems that empower businesses to compete in the modern industrial landscape.",
  ],
  highlightedValues: ["Innovation", "Reliability", "Efficiency"],
};
```

---

## 5. Expertise Card Entity

### Structure

```typescript
interface ExpertiseCard {
  id: string;              // Unique identifier
  iconName: LucideIconName; // Icon from lucide-react
  title: string;           // Expertise area name
  description: string;     // Brief description
  order: number;           // Display order (1-6)
}

// Type for lucide-react icon names used
type LucideIconName = 
  | 'Factory' 
  | 'Monitor' 
  | 'Radio' 
  | 'Network' 
  | 'Gauge' 
  | 'Shield';
```

### Validation Rules

- **id**: Required, unique, lowercase-hyphenated format
- **iconName**: Required, must be valid lucide-react icon name
- **title**: Required, 10-50 characters
- **description**: Required, 50-150 characters
- **order**: Required, positive integer 1-6, unique within expertise array

### Icon Mappings

| Expertise Area | Icon Name | Lucide Icon |
|---------------|-----------|-------------|
| Industrial Automation | Factory | `<Factory />` |
| SCADA Systems | Monitor | `<Monitor />` |
| IoT & MQTT | Radio | `<Radio />` |
| Unified Network Structures | Network | `<Network />` |
| Control System Design | Gauge | `<Gauge />` |
| Safety System Integration | Shield | `<Shield />` |

### Instance Data (6 expertise cards)

```typescript
const expertise: ExpertiseCard[] = [
  {
    id: "industrial-automation",
    iconName: "Factory",
    title: "Industrial Automation",
    description: "PLC-based control systems and end-to-end system integration for scalable industrial operations.",
    order: 1,
  },
  {
    id: "scada-systems",
    iconName: "Monitor",
    title: "SCADA Systems",
    description: "Ignition SCADA implementation with data visualization, monitoring, logging, and alarming capabilities.",
    order: 2,
  },
  {
    id: "iot-mqtt",
    iconName: "Radio",
    title: "IoT & MQTT",
    description: "Smart industrial environments with MQTT-based data acquisition and device-to-cloud communication.",
    order: 3,
  },
  {
    id: "unified-network",
    iconName: "Network",
    title: "Unified Network Structures (UNS)",
    description: "Secure and scalable network infrastructure connecting all industrial devices and systems.",
    order: 4,
  },
  {
    id: "control-design",
    iconName: "Gauge",
    title: "Control System Design",
    description: "Custom HMIs, dashboards, and integrated safety systems tailored to industrial requirements.",
    order: 5,
  },
  {
    id: "safety-integration",
    iconName: "Shield",
    title: "Safety System Integration",
    description: "Critical safety system integration with industrial control networks for operational reliability.",
    order: 6,
  },
];
```

---

## 6. Footer Entity

### Structure

```typescript
interface Footer {
  logo: {
    text: string;          // Company name
    href: string;          // Link to home
  };
  navigation: {
    title: string;         // "Quick Links"
    links: FooterLink[];
  };
  contact: {
    title: string;         // "Contact Us"
    address: string;
    email: string;
    phone: string;
    website: string;
  };
  legal: {
    copyright: string;     // Copyright text
  };
}

interface FooterLink {
  label: string;
  href: string;
  external: boolean;
}
```

### Validation Rules

- **logo.text**: Required, non-empty string, max 100 characters
- **logo.href**: Required, valid route path
- **navigation.title**: Required, 5-30 characters
- **navigation.links**: Required array, 3-8 items
- **contact.title**: Required, 5-30 characters
- **contact.address**: Required, non-empty string
- **contact.email**: Required, valid email format
- **contact.phone**: Required, valid phone format
- **contact.website**: Required, valid URL
- **legal.copyright**: Required, includes year and company name

### Instance Data

```typescript
const footer: Footer = {
  logo: {
    text: "EXTRA Engineering Solution",
    href: "/",
  },
  navigation: {
    title: "Quick Links",
    links: [
      { label: "About", href: "/about", external: false },
      { label: "Services", href: "/services", external: false },
      { label: "Contact Us", href: "/contact", external: false },
      { label: "Privacy Policy", href: "/privacy", external: false },
    ],
  },
  contact: {
    title: "Contact Us",
    address: "Addis Ababa, Ethiopia",
    email: "info@extraengineeringsolution.com",
    phone: "+251 933 941 798",
    website: "www.extraengineeringsolution.com",
  },
  legal: {
    copyright: "© 2026 Extra Engineering Solutions. All rights reserved.",
  },
};
```

---

## Entity Relationships

```
HomePage
├── Navigation (1)
│   └── NavigationLink (3)
├── Hero (1)
├── Services (1 collection)
│   └── ServiceEntry (4 instances)
├── Mission (1)
├── Expertise (1 collection)
│   └── ExpertiseCard (6 instances)
└── Footer (1)
    └── FooterLink (4)
```

**Cardinality**:
- HomePage has exactly 1 Navigation
- HomePage has exactly 1 Hero
- HomePage has exactly 4 ServiceEntry instances
- HomePage has exactly 1 Mission
- HomePage has exactly 6 ExpertiseCard instances
- HomePage has exactly 1 Footer

**Dependencies**:
- Navigation links reference routes that must exist (About, Services, Contact pages)
- Hero CTA references Contact page route
- Footer navigation links reference the same routes

---

## State Management

**Approach**: Static content (no runtime state)

**Rationale**:
- All content is static (no user input, no dynamic data fetching)
- No need for React state or context
- Content defined as TypeScript constants
- Constitution discourages state management libraries

**Future Considerations**:
- If content moves to CMS: Add data fetching layer
- If multi-language support needed: Add i18n context
- For now: Keep it simple with static constants

---

## Validation Implementation

**TypeScript Interfaces**: See `/contracts/content-types.ts`

**Runtime Validation**: Not required (static content, TypeScript provides compile-time checks)

**Content Validation Checklist** (manual):
- [ ] All required fields populated
- [ ] Character length limits respected
- [ ] Image paths point to existing files
- [ ] Alternating pattern maintained for services
- [ ] All navigation hrefs are valid routes
- [ ] Email, phone, URL formats correct
- [ ] Alt text descriptive and complete

---

## Content Update Workflow

**To Update Content**:

1. Locate content constant in appropriate component file
2. Modify TypeScript constant
3. TypeScript compiler validates against interface
4. Manual verification of rendering
5. Commit changes

**Example** (updating service description):

```tsx
// components/home/Services.tsx

// Before
const services: ServiceEntry[] = [
  {
    id: "plc-automation",
    title: "PLC-Based Control Systems",
    description: "Old description here",
    // ...
  },
];

// After
const services: ServiceEntry[] = [
  {
    id: "plc-automation",
    title: "PLC-Based Control Systems",
    description: "Updated description with new details",
    // ... (TypeScript validates this matches ServiceEntry interface)
  },
];
```

**Content Sources**:
- Company information: `docs/extra_engineering_solution_ai_ready_markdown.md`
- Copywriting: Based on B2B best practices (see research.md)
- Images: To be provided by client or sourced from stock photography

---

**Data Model Complete**: All entities defined with validation rules and instance data. See `contracts/content-types.ts` for TypeScript implementations.

