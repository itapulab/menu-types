export type PlatformService = {
  value: number;
};

export type PlatformParams = {
  services: {
    menu: PlatformService;
  };
  mgm: {
    enabled: boolean;
    credit: number;
  };
};

export type PlatformMenuGalleryCategory = "beer" | "soda" | "juice";

export type PlatformMenuGalleryItem = {
  order: number;
  category: PlatformMenuGalleryCategory;
  name: string;
  path: string;
};
