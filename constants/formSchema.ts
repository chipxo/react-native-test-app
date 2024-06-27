import { t } from "i18next";
import { z } from "zod";
import "@/utils/i18n";

export const signUpSchema = z.object({
  name: z.string().min(2, { message: t("nameReq") }),
  email: z
    .string()
    .min(4, { message: t("emailReq") })
    .email({ message: t("emailValid") })
    .optional(),
  password: z.string().min(8, t("passReq")),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
