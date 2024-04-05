import { Timestamp } from "./external";

export type AdminRole = "root" | "staff";
export type BusinessRole = "owner" | "manager" | "collaborator";
export type UserRole = AdminRole | BusinessRole;

export type UserProfileSituation =
  | "pending"
  | "approved"
  | "rejected"
  | "blocked";

export type UserProfile = {
  email: string;
  name?: string;
  cpf?: string;
  phone?: string;
  situation?: UserProfileSituation;
  // metadata
  createdAt: Timestamp;
  updatedAt?: Timestamp;
};
