import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z
    .string()
    .min(4, { message: "Email must be at least 4 characters" })
    .email({ message: "Must be a valid email" })
    .optional(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
