import { Timestamp } from "./external";
import { Flavor } from "./general";

export type BillStatus =
  | "open"
  | "requested"
  | "waiting-payment"
  | "paid"
  | "canceled";

export type BillCustomer = {
  code: string;
  name: string;
};

export type BillQuota = {
  customer: BillCustomer;
  status: BillStatus;
  value?: number;
  // transient
  items?: OrderItem[];
};

export type BillSummary = {
  subtotal: number;
  serviceFee: number;
  paid: number;
  total: number;
};

export type Creator = {
  flavor: Flavor;
  name: string;
  code?: string;
};

export type OrderItem = {
  id: string;
  category: string;
  name: string;
  quantity: number;
  price: number;
};

export type OrderStatus = "pending" | "confirmed" | "dispatched" | "canceled";

export type Order = {
  billId: string;
  table: number;
  createdBy: Creator;
  items: OrderItem[];
  comment?: string;
  status: OrderStatus;
  value: number;
  // metadata
  createdAt: Timestamp;
  updatedAt?: Timestamp;
  // transient
  code?: string;
};

export type Bill = {
  // code: string;
  table: number;
  createdBy: Creator;
  status: BillStatus;
  serviceFee: boolean;
  quotas: BillQuota[];
  // metadata
  createdAt: Timestamp;
  updatedAt?: Timestamp;
  value?: number;
  // trasient
  orders?: Order[];
};

export type Notification = {
  type: "order" | "bill";
  id: string;
  table: number;
  timestamp: Timestamp;
};
