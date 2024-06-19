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
  chargeServiceFee: boolean;
  serviceFee?: number;
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
  name: string;
  quantity: number;
  price: number;
  externalId?: string;
  complements?: OrderItemComplement[];
  notes?: string;
  // transient
  imageUrl?: string | null;
};

export type OrderItemComplement = {
  name: string;
  price: number;
  quantity: number;
  externalId?: string;
  group: {
    id: string;
    name: string;
    externalId?: string;
  };
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
  table: number;
  createdBy: Creator;
  status: BillStatus;
  quotas: BillQuota[];
  serviceFee?: number;
  advancePayment?: number;
  value?: number;
  // metadata
  createdAt: Timestamp;
  updatedAt?: Timestamp;
  // trasient
  orders?: Order[];
};

type OrderNotification = {
  type: "order";
  id: string;
  table: number;
  timestamp: Timestamp;
};

type BillNotification = {
  type: "bill" | "quota";
  id: string;
  table: number;
  status?: BillStatus;
  timestamp: Timestamp;
};

export type Notification = OrderNotification | BillNotification;
