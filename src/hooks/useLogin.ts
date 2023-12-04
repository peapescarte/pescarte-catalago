import { AuthService } from "@/services/AuthService";
import { validateCPF } from "@/functions/validateCPF"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const useLogin = () => {
  const loginFormSchema = z.object({
    cpf: z.string()
      .min(11, { message: "CPF inválido" })
      .refine((cpf) => validateCPF(cpf), {
        message: "CPF inválido"
      }).refine((value) => /^[0-9]+$/.test(value), {
        message: "Somente números são permitidos",
      }),
    password: z.string()
  })

  type LoginFormValues = z.infer<typeof loginFormSchema>

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    mode: "onSubmit",
  })

  const onSubmit = (data: LoginFormValues) => {
    AuthService.login({
      cpf: data.cpf,
      password: data.password
    })
  }

  return {
    form, 
    onSubmit
  }
}