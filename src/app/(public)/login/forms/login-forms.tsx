"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/hooks/useLogin";

// import { Button, buttonVariants } from '@/components/ui/button';
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import Link from 'next/link';
import AuthActions from "@/services/modules/auth/actions/auth";

export function LoginForm() {
  const { form, onSubmit } = useLogin();

  return (
    <Form {...form}>
      <form
        className="space-y-8"
        action={AuthActions.login}>
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
  //   <Card className="w-[350px]">
  //   <CardHeader>
  //     <CardTitle>Codegus</CardTitle>
  //     <CardDescription>Faça login para continuar.</CardDescription>
  //   </CardHeader>
  //   <form action={AuthActions.login}>
  //     <CardContent>
  //       <div className="grid w-full items-center gap-4">
  //         <div className="flex flex-col space-y-1.5">
  //           <Label htmlFor="email">Email</Label>
  //           <Input id="email" name="email" type="email" required />
  //         </div>
  //         <div className="flex flex-col space-y-1.5">
  //           <Label htmlFor="password">Senha</Label>
  //           <Input id="password" name="password" type="password" required />
  //         </div>
  //       </div>
  //     </CardContent>
  //     <CardFooter className="flex justify-between">
  //       <Button type="submit">Entrar</Button>
  //       <Link
  //         href="/portal/cadastro"
  //         className={buttonVariants({ variant: 'link' })}
  //       >
  //         Criar Conta
  //       </Link>
  //     </CardFooter>
  //   </form>
  // </Card>
  )
}