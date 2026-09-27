export type Language = 'fr' | 'en';

export interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  area: string;
  category: string;
  description: string;
  materials: string[];
  imageUrl: string;
  aspect?: string;
  featured?: boolean;
}

export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon?: string;
}

export interface StudioStep {
  step: string;
  title: string;
  description: string;
}

export interface MaterialSpecimen {
  name: string;
  origin: string;
  finish: string;
  useCase: string;
  imageUrl: string;
}

export interface SocialTile {
  id: number;
  imageUrl: string;
  caption: string;
  tag: string;
  location?: string;
}
