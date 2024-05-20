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
