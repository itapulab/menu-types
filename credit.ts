import { BusinessService } from "./business";
import { Timestamp } from "./external";

export type CreditStatus = "processing" | "approved" | "spent" | "canceled";

export type CreditTimestamps = {
  [K in CreditStatus]?: Timestamp;
};

export type CreditOrigin = {
  campaign: "mgm";
  service: BusinessService;
};

export type Credit = {
  origin: CreditOrigin;
  fromId: string;
  toId: string;
  status: CreditStatus;
  value: number;
  // metadata
  timestamps: CreditTimestamps;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
};
