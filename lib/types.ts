export interface Skill {
  _id: string;
  name: string;
  level: number;
  description: string;
  icon: string;
  category: string;
  years: number;
  projects: Project[];
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
  skills: Skill[]; // Populated references
  links: ProjectLink[];
}

export interface ProjectLink {
  name: string;
  url: string;
  type: "demo" | "github" | "case-study";
}

export interface Skill {
  _id: string;
  name: string;
  icon: string; // assuming the skill has an icon or similar field
}
