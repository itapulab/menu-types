import { BusinessService } from "./business";
import { Timestamp } from "./external";

export type PaymentStatus = "processing" | "pending" | "paid" | "canceled";

export type PaymentMethod = "pix" | "billet" | "credits";

export type PaymentTimestamps = {
  [K in PaymentStatus]?: Timestamp;
};

export type Payment = {
  businessId: string;
  services: BusinessService[];
  /** Sum of service values. */
  value: number;
  /** Sum of discounts found <= to value. */
  discount: number;
  /** Sum of fees charged for this payment. */
  fees: number;
  /** Result value of the real payment transaction. */
  total: number;
  status: PaymentStatus;
  method?: PaymentMethod;
  billetUrl?: string;
  // metadata
  timestamps: PaymentTimestamps;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  expiresAt: Timestamp;
};
