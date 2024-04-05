export type WithId<T extends object> = T & {
  id: string;
};

export type Environment = "staging" | "production";

export interface LatLng {
  latitude: number;
  longitude: number;
}

export type Flavor = "customer" | "business" | "staff";
