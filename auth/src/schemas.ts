import { z } from "zod";

// Define the Role enum values as a union of string literals
const RoleEnum = z.enum(["ADMIN", "USER", "HOST"]);

// Define the AccountStatus enum values as a union of string literals
const AccountStatusEnum = z.enum(["PENDING", "ACTIVE", "SUSPENDED", "DELETED"]);

export const UserCreateSchema = z.object({
  auth0Id: z.string().optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  gender: z.string().optional(),
  bio: z.string().optional(),
  dob: z.string().optional(),
  email: z.string().optional(),
  mobile: z.string().optional(),
  role: RoleEnum.optional(),
  verified: z.boolean().optional(),
  status: AccountStatusEnum.optional(),
});
