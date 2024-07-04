import { Timestamp } from "./external";
import { LatLng } from "./general";
import { UserRole } from "./user";

export type BusinessType = "bar" | "restaurant";

export type BusinessSituation =
  | "pending"
  | "approved"
  | "payment-pending"
  | "suspended"
  | "blocked"
  | "deleted";

export type BusinessStatus = "available" | "unavailable";

export type BusinessSubscription = "monthly" | "yearly";

export type BusinessAddress = {
  cep: string;
  street: string;
  number?: string;
  additional?: string;
  city: string;
  state: string;
  neighborhood?: string;
  latlng?: LatLng;
};

export type BusinessMenuMode = "default" | "read-only";

export type BusinessOperation = {
  tables: number;
  menuMode?: BusinessMenuMode;
};

export type BusinessTimestamps = {
  [K in BusinessSituation]?: Timestamp;
};

export type BusinessService = "menu";

export type Business = {
  code: string;
  type: BusinessType;
  services: BusinessService[];
  /** Member get member program business id. */
  mgmId?: string;
  cnpj?: string;
  companyName?: string;
  name?: string;
  slug?: string;
  description?: string;
  phone?: string;
  address?: BusinessAddress;
  operation?: BusinessOperation;
  // cuisine?: string; // cuisine's name
  subscription?: BusinessSubscription;
  managers: string[];
  status: BusinessStatus;
  situation: BusinessSituation;
  // reviews?: BusinessReviews;
  // metadata
  timestamps: BusinessTimestamps;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
  // transient
  logoUrl?: string | null;
};

export type BusinessManager = {
  email: string;
  role: UserRole | null;
};
