/**
 * Content Type Definitions for Extra Engineering Solutions Home Page
 * Feature: 001-home-page
 * 
 * These TypeScript interfaces define the structure of all content entities
 * used in the home page. They provide compile-time type safety and serve
 * as documentation for content structure.
 */

// ============================================================================
// Navigation Types
// ============================================================================

export interface NavigationLink {
  /** Unique identifier (e.g., "about", "services") */
  id: string;
  /** Display text (e.g., "About", "Services") */
  label: string;
  /** Route path (e.g., "/about", "/services") */
  href: string;
  /** Whether link opens in new tab */
  external: boolean;
}

export interface Navigation {
  logo: {
    /** Company name text */
    text: string;
    /** Link to home page */
    href: string;
  };
  /** Navigation menu links */
  links: NavigationLink[];
}

// ============================================================================
// Hero Section Types
// ============================================================================

export interface HeroSection {
  backgroundImage: {
    /** Desktop image path (1920x1080) */
    desktop: string;
    /** Tablet image path (1024x768) */
    tablet: string;
    /** Mobile image path (750x1334) */
    mobile: string;
    /** Alt text for accessibility */
    alt: string;
  };
  /** Hex color for image load failure (e.g., "#ddc8ee") */
  fallbackColor: string;
  overlay: {
    /** Whether to show dark overlay over background */
    enabled: boolean;
    /** Overlay opacity (0-1) */
    opacity: number;
  };
  content: {
    /** Primary headline */
    headline: string;
    /** Supporting subheadline text */
    subheadline: string;
    cta: {
      primary: {
        /** Primary CTA button text */
        text: string;
        /** Destination route */
        href: string;
      };
      /** Optional secondary CTA */
      secondary?: {
        text: string;
        href: string;
      };
    };
  };
}

// ============================================================================
// Services Section Types
// ============================================================================

export interface ServiceEntry {
  /** Unique identifier (e.g., "plc-automation") */
  id: string;
  /** Service name/headline */
  title: string;
  /** Service description (100-300 characters) */
  description: string;
  image: {
    /** Desktop image path (640x480) */
    desktop: string;
    /** Mobile image path (375x280) */
    mobile: string;
    /** Alt text for accessibility */
    alt: string;
  };
  /** Which side image appears on desktop (left or right) */
  imagePosition: 'left' | 'right';
  /** Display order (1-4) */
  order: number;
}

// ============================================================================
// Mission Statement Types
// ============================================================================

export interface MissionStatement {
  /** Section heading */
  title: string;
  /** Array of paragraph text */
  content: string[];
  /** Optional key values to emphasize */
  highlightedValues?: string[];
}

// ============================================================================
// Expertise Section Types
// ============================================================================

/**
 * Lucide React icon names used for expertise cards
 */
export type LucideIconName = 
  | 'Factory'        // Industrial Automation
  | 'Monitor'        // SCADA Systems
  | 'Radio'          // IoT & MQTT
  | 'Network'        // Unified Network Structures
  | 'Gauge'          // Control System Design
  | 'Shield';        // Safety System Integration

export interface ExpertiseCard {
  /** Unique identifier (e.g., "industrial-automation") */
  id: string;
  /** Lucide React icon name */
  iconName: LucideIconName;
  /** Expertise area name */
  title: string;
  /** Brief description (50-150 characters) */
  description: string;
  /** Display order (1-6) */
  order: number;
}

// ============================================================================
// Footer Types
// ============================================================================

export interface FooterLink {
  /** Link display text */
  label: string;
  /** Destination URL or route */
  href: string;
  /** Whether link opens in new tab */
  external: boolean;
}

export interface Footer {
  logo: {
    /** Company name text */
    text: string;
    /** Link to home page */
    href: string;
  };
  navigation: {
    /** Navigation section title */
    title: string;
    /** Footer navigation links */
    links: FooterLink[];
  };
  contact: {
    /** Contact section title */
    title: string;
    /** Physical address */
    address: string;
    /** Contact email */
    email: string;
    /** Contact phone number */
    phone: string;
    /** Company website */
    website: string;
  };
  legal: {
    /** Copyright text */
    copyright: string;
  };
}

// ============================================================================
// Page Composition Type
// ============================================================================

/**
 * Complete home page data structure
 * Represents all content sections assembled together
 */
export interface HomePageData {
  navigation: Navigation;
  hero: HeroSection;
  services: ServiceEntry[];
  mission: MissionStatement;
  expertise: ExpertiseCard[];
  footer: Footer;
}

// ============================================================================
// Type Guards & Validation Helpers
// ============================================================================

/**
 * Validates that services alternate image positions correctly
 * First service must have image on left, then alternates
 */
export function validateServicesAlternation(services: ServiceEntry[]): boolean {
  return services.every((service, index) => {
    const expectedPosition = index % 2 === 0 ? 'left' : 'right';
    return service.imagePosition === expectedPosition;
  });
}

/**
 * Validates that orders are sequential and unique
 */
export function validateOrders(items: Array<{ order: number }>): boolean {
  const orders = items.map(item => item.order).sort((a, b) => a - b);
  return orders.every((order, index) => order === index + 1);
}

/**
 * Type guard to check if a string is a valid lucide icon name
 */
export function isValidLucideIcon(icon: string): icon is LucideIconName {
  const validIcons: LucideIconName[] = [
    'Factory',
    'Monitor',
    'Radio',
    'Network',
    'Gauge',
    'Shield',
  ];
  return validIcons.includes(icon as LucideIconName);
}

// ============================================================================
// Constants
// ============================================================================

/**
 * Brand colors defined in company requirements
 */
export const BRAND_COLORS = {
  primary: '#ddc8ee',
  secondary: '#ffffff',
  accent: '#a61e1e',
} as const;

/**
 * Responsive breakpoints (Tailwind CSS defaults)
 */
export const BREAKPOINTS = {
  mobile: 375,
  tablet: 768,
  desktop: 1280,
  wide: 1920,
} as const;

/**
 * Icon mappings for expertise areas
 */
export const EXPERTISE_ICON_MAP: Record<string, LucideIconName> = {
  'industrial-automation': 'Factory',
  'scada-systems': 'Monitor',
  'iot-mqtt': 'Radio',
  'unified-network': 'Network',
  'control-design': 'Gauge',
  'safety-integration': 'Shield',
} as const;

