export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  liveUrl?: string;
  videoUrl?: string;
  category: 'freelance' | 'university' | 'personal';
  technologies: string[];
  timeline: string;
  status: 'completed' | 'in-progress';
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  hoverIcon?: string;
  delay?: number;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface FormField {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea';
  required?: boolean;
  rows?: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}