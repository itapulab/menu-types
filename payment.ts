import { BusinessService } from "./business";
import { Timestamp } from "./external";

export type PaymentStatus = "pending" | "paid" | "canceled";

export type PaymentMethod = "pix" | "billet" | "credits";

export type Payment = {
  businessId: string;
  services: BusinessService[];
  value: number;
  discount: number;
  fees: number;
  total: number;
  status: PaymentStatus;
  method?: PaymentMethod;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  expiresAt: Timestamp;
  paidAt?: Timestamp;
};
