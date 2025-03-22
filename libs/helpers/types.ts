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
