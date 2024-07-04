import { Timestamp } from "./external";

export type AdminRole = "root" | "staff";
export type BusinessRole = "owner" | "manager" | "collaborator";
export type UserRole = AdminRole | BusinessRole;

export type UserProfileSituation =
  | "pending"
  | "approved"
  | "rejected"
  | "blocked"
  | "deleted";

export type UserProfileTimestamps = {
  [K in UserProfileSituation]?: Timestamp;
};

export type UserProfile = {
  email: string;
  name?: string;
  cpf?: string;
  phone?: string;
  situation: UserProfileSituation;
  // metadata
  timestamps: UserProfileTimestamps;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
};
