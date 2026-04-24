export interface Skill {
  _id: string;
  name: string;
  slug: {
    current: string;
    _type: string;
  };
  description?: string;
  icon: string;
  years?: number;
  projects?: Project[];
}

export interface SkillCategory {
  _id: string;
  title: string;
  description: string;
  icon: string;
  skills: Skill[];
  color: string;
  gradient: string;
}

export interface Project {
  _id: string;
  title: string;
  slug: {
    current: string;
    _type: string;
  }

  subtitle?: string;
  image: string;
  overview?: string;
  role?: string;
  featured: boolean;
  datePublished?: string;
  dateModified?: string;
  skills: Skill[]; // Populated references
  links: ProjectLink[];
}

export interface ProjectLink {
  name: string;
  url: string;
  type: "demo" | "github" | "case-study";
}

export interface Metric {
  _id?: string;
  _key?: string;
  value: string;
  label: string;
}

export interface HeroSettings {
  eyebrow?: string;
  headline?: string;
  highlight?: string;
  /** One-line hero tagline; if omitted, a default with optional `highlight` span is used */
  subheadline?: string;
  /** First accent line, e.g. "Full Stack" */
  titleLead?: string;
  titleConnector?: string;
  titleLine2?: string;
  titleLine3?: string;
  description?: string;
  availability?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  stats?: Metric[];
  technologies?: string[];
}

export interface ContactSettings {
  email?: string;
  phone?: string;
  location?: string;
  timezone?: string;
}

export interface SiteSettings {
  _id: string;
  hero?: HeroSettings;
  contact?: ContactSettings;
}

export interface Service {
  _id: string;
  title: string;
  eyebrow?: string;
  description: string;
  icon?: string;
  accentColor?: string;
  metrics?: Metric[];
  technologies?: string[];
  featured?: boolean;
  order?: number;
}

export interface Experience {
  _id: string;
  company: string;
  role: string;
  companyLogo?: string;
  companyUrl?: string;
  startDate: string;
  endDate?: string;
  displayDate?: string;
  location?: string;
  current?: boolean;
  summary: string;
  achievements?: string[];
  technologies?: string[];
  order?: number;
}

export interface ProcessStep {
  _id: string;
  stepNumber: string;
  label?: string;
  title: string;
  description: string;
  timeline?: string;
  icon?: string;
  order?: number;
}

export interface Testimonial {
  _id: string;
  clientName: string;
  clientRole?: string;
  company?: string;
  projectLabel?: string;
  avatar?: string;
  initials?: string;
  rating?: number;
  quote: string;
  order?: number;
}

export interface PricingPlan {
  _id: string;
  title: string;
  priceRange: string;
  subtitle?: string;
  deliveryTime?: string;
  features?: string[];
  highlighted?: boolean;
  badge?: string;
  ctaLabel?: string;
  ctaHref?: string;
  order?: number;
}
