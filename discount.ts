import { BusinessService } from "./business";
import { Timestamp } from "./external";

export type DiscountStatus = "processing" | "approved" | "spent" | "canceled";

export type DiscountTimestamps = {
  [K in DiscountStatus]?: Timestamp;
};

export type DiscountOrigin = {
  campaign: "mgm";
  service: BusinessService;
};

export type Discount = {
  origin: DiscountOrigin;
  fromId: string;
  toId: string;
  status: DiscountStatus;
  timestamps: DiscountTimestamps;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
  value: number;
};
