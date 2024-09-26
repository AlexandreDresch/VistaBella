import { z } from "zod";
import { nameRegex, phoneRegex } from "../utils/utils";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres." })
    .max(50, { message: "O nome deve ter no máximo 50 caracteres." })
    .regex(nameRegex, {
      message:
        "O nome deve ser completo e só conter caracteres alfabéticos válidos.",
    }),
  email: z.string().email({ message: "Endereço de e-mail inválido." }),
  phone: z
    .string()
    .min(8, {
      message: "O número de telefone deve ter pelo menos 8 caracteres.",
    })
    .max(14, {
      message: "O número de telefone deve ter no máximo 14 caracteres.",
    })
    .regex(phoneRegex, { message: "Formato de número de telefone inválido." }),
  message: z.string().optional(),
  checkbox: z
    .boolean()
    .refine((val) => val === true, {
      message: "Você deve concordar com o processamento de dados.",
    }),
});
