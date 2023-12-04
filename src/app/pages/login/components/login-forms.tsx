"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/hooks/useLogin";

export function LoginForm() {
  const { form, onSubmit } = useLogin();

  return (
    <Form {...form}>
      <form
        className="space-y-8"
        onSubmit={form.handleSubmit(onSubmit)}>

        <FormField
          name="cpf"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>CPF</FormLabel>
              <FormControl>
                <Input
                  className="w-64 md:w-[360px] h-12"
                  type="text"
                  placeholder="Digite seu CPF"
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input
                  className="w-64 md:w-[360px] h-12"
                  type="password"
                  placeholder="Digite sua senha"
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="submit" className="w-full md:w-[360px] h-12">
          Acessar
        </Button>
      </form>
    </Form>
  )
}