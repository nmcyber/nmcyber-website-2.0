export type NavigationLink = {
  name: string;
  href: string;
  external?: boolean;
};

export type NavigationItem = NavigationLink & {
  mobileOverviewLabel?: string;
  submenus: NavigationLink[];
};
