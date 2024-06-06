import { Creator, OrderItem } from "./bill";
import { BusinessRole } from "./user";

export type BasePayloadMeta = {
  version: string | null;
  platform?: "mobile" | "web";
  ip?: string;
};
export interface BasePayload {
  meta: BasePayloadMeta;
}

export type CreateUserPayload = {
  email: string;
  name?: string | null;
} & BasePayload;

export type CompleteRegistrationPayload = {
  businessId: string;
} & BasePayload;

export type CreateBusinessSlugPayload = {
  businessId: string;
  slug: string;
} & BasePayload;

export type CreateBusinessUserPayload = {
  businessId: string;
  users: {
    email: string;
    role: BusinessRole;
  }[];
} & BasePayload;

export type VerifyUserIdTokenPayload = {
  token: string;
} & BasePayload;

export type CreateBusinessBillPayload = {
  token: string;
  createdBy: Creator;
} & BasePayload;

export type CreateBusinessOrderPayload = {
  token: string;
  orderItems: OrderItem[];
} & BasePayload;

export type CreateManagersPayload = {
  businessId: string;
  usersData: {
    email: string;
    role: BusinessRole;
  }[];
} & BasePayload;

export type GetManagersPayload = {
  businessId: string;
} & BasePayload;

export type UpdateManagerPayload = {
  businessId: string;
  email: string;
  role: BusinessRole;
} & BasePayload;

export type DeleteManagerPayload = {
  businessId: string;
  email: string;
} & BasePayload;

export type GetQRCodesDataPayload = {
  businessId: string;
  tables: number;
} & BasePayload;

export type GetQRCodeTokenInfosPayload = {
  token: string;
  type?: "redirect" | "data";
} & BasePayload;
