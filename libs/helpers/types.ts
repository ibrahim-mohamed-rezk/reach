// home interfaces

// featured projects
export interface FeaturedProject {
  id: number;
  title: string;
  slug: string;
  description: string;
  client_name: string;
  service: {
    id: number;
    title: string;
    slug: string;
    icon: string | null;
  };
  completion_date: string;
  technologies: string;
  website_url: string;
  image: string;
  gallery: string[];
  is_featured: boolean;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

// featured posts
export interface FeaturedPost {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  content: string;
  featured_image: string;
  published_at: string;
  featured: number;
}

// home api
export interface HomeData {
  featured_projects?: FeaturedProject[];
  featured_posts?: FeaturedPost[];
}

// job
export interface Job {
  id: number;
  title: string;
  slug: string;
  description: string;
  location: string;
  type: string;
  experience_level: string;
  salary_min: string;
  salary_max: string;
  department: string;
  is_active: boolean;
  deadline: string;
  positions_available: number;
  required_skills: string[];
  created_at: string;
  updated_at: string;
}

// Service
export interface FeaturedService {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  image: string;
  short_description: string;
}

// public pagination
export interface Meta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
