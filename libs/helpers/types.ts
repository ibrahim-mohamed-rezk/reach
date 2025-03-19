// home interfaces

// featured projects
export interface FeaturedProject {
  id: number;
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
