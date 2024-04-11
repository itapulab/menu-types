import { Creator } from "./bill";
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
  businessId: string;
  table: number;
  createdBy: Creator;
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

export type UpdateManagersPayload = {
  businessId: string;
  email: string;
  role: BusinessRole;
} & BasePayload;

export type DeleteManagersPayload = {
  businessId: string;
  email: string;
} & BasePayload;
