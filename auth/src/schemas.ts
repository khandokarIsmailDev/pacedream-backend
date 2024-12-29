import { z } from "zod";

export const UserCreateSchema = z.object({
    auth0Id:z.string().optional(),
    first_name:z.string().optional(),
    last_name:z.string().optional(),
    gender:z.string().optional(),
    bio:z.string().optional(),
    dob:z.string().optional(),
    email:z.string().optional(),
    mobile:z.string().optional(),
    role:z.string().optional(),
    verified:z.boolean().optional(),
    status:z.string().optional()
})