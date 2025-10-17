export interface BaseResource {
  id: number;
  title: string;
  downloadUrl: string;
  icon: string;
}

export interface FeaturedResource extends BaseResource {
  image: string;
  description: string;
  featured: boolean;
  type?: undefined;
}

export interface StandardResource extends BaseResource {
  type: string;
  description?: undefined;
  image?: undefined;
  featured?: undefined;
}

export type Resource = FeaturedResource | StandardResource;

export interface ResourcesSection {
  title: string;
  resources: Resource[];
}
