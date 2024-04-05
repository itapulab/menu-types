import { Timestamp } from "./external";
import { LatLng } from "./general";

export type BusinessType = "bar" | "restaurant";

export type BusinessSituation =
  | "pending"
  | "approved"
  | "payment-pending"
  | "blocked";

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

export type BusinessOperation = {
  tables: number;
  stock: boolean;
};

export type Business = {
  code: string;
  type: BusinessType;
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
  createdAt: Timestamp;
  updatedAt?: Timestamp;
  // transient
  logoUrl?: string | null;
};
