import { Timestamp } from "./external";
import { WithId } from "./general";

export type MenuOrdering = {
  firstLevelIds: string[];
  secondLevelIdsByFirstLevelId: {
    [firstLevelId: string]: string[];
  };
};

export type MenuDisplay = "default" | "ordering" | "stock";

export type Category = {
  name: string;
  enabled: boolean;
  /** Item external code. */
  externalId?: string;
  // metadata
  createdAt: Timestamp;
  updatedAt?: Timestamp;
  // trasient
  items?: WithId<Product>[];
};

export type ProductPrice = {
  /** Used when a discount is applied. */
  originalValue?: number;
  /** Final product price. */
  value: number;
};

export type ProductStock = {
  enabled: boolean;
  value?: number;
};

export type Product = {
  name: string;
  category: {
    id: string;
    name: string;
  };
  description?: string;
  price: ProductPrice;
  enabled: boolean;
  /** Number of people served by the product portion. */
  serving?: number;
  stock?: ProductStock;
  /** Product classification with respect to specific diets. */
  classifications?: string[];
  complementsGroupsIds?: string[];
  /** Image path to menu gallery item. */
  imagePath?: string | null;
  /** Item external code. */
  externalId?: string;
  // metadata
  createdAt: Timestamp;
  updatedAt?: Timestamp;
  // transient
  imageUrl?: string | null;
  complementsGroups?: WithId<ComplementsGroup>[];
};

export interface ComplementsGroup {
  productId: string;
  name: string;
  required: boolean;
  /** Minimum items allowed per group. */
  minimum: number;
  /** Maximum items allowed per group. */
  maximum: number;
  enabled: boolean;
  complements: Complement[];
  /** Item external code. */
  externalId?: string;
}

export interface Complement {
  name: string;
  description?: string;
  price: number;
  enabled: boolean;
  /** Maximum allowed for the item. Zero for does not apply. */
  maximum: number;
  /** Item external code. */
  externalId?: string;
}
