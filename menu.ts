import { Timestamp } from "./external";
import { WithId } from "./general";

export type MenuOrdering = {
  firstLevelIds: string[];
  secondLevelIdsByFirstLevelId: {
    [firstLevelId: string]: string[];
  };
};

export type Category = {
  name: string;
  enabled: boolean;
  // metadata
  createdAt: Timestamp;
  updatedAt?: Timestamp;
  // trasient
  items?: WithId<Product>[];
};

export type Product = {
  name: string;
  category: {
    id: string;
    name: string;
  };
  description?: string;
  price: number;
  stock?: number;
  imageUrl?: string | null;
  additionalInfos?: string[];
  enabled: boolean;
  // metadata
  createdAt: Timestamp;
  updatedAt?: Timestamp;
};
