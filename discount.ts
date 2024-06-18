import { BusinessService } from "./business";
import { Timestamp } from "./external";

export type DiscountStatus = "processing" | "approved" | "spent" | "canceled";

export type DiscountTimestamps = {
  [K in DiscountStatus]?: Timestamp;
};

export type Discount = {
  origin: {
    campaign: "mgm";
    service: BusinessService;
  };
  fromId: string;
  toId: string;
  status: DiscountStatus;
  timestamps: DiscountTimestamps;
  value: number;
};
