"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSuggest } from "@/hooks/useSuggest";

const states = [
  { acronym: "AC", name: "Acre" },
  { acronym: "AL", name: "Alagoas" },
  { acronym: "AP", name: "Amapá" },
  { acronym: "AM", name: "Amazonas" },
  { acronym: "BA", name: "Bahia" },
  { acronym: "CE", name: "Ceará" },
  { acronym: "DF", name: "Distrito Federal" },
  { acronym: "ES", name: "Espírito Santo" },
  { acronym: "GO", name: "Goiás" },
  { acronym: "MA", name: "Maranhão" },
  { acronym: "MT", name: "Mato Grosso" },
  { acronym: "MS", name: "Mato Grosso do Sul" },
  { acronym: "MG", name: "Minas Gerais" },
  { acronym: "PA", name: "Pará" },
  { acronym: "PB", name: "Paraíba" },
  { acronym: "PR", name: "Paraná" },
  { acronym: "PE", name: "Pernambuco" },
  { acronym: "PI", name: "Piauí" },
  { acronym: "RJ", name: "Rio de Janeiro" },
  { acronym: "RN", name: "Rio Grande do Norte" },
  { acronym: "RS", name: "Rio Grande do Sul" },
  { acronym: "RO", name: "Rondônia" },
  { acronym: "RR", name: "Roraima" },
  { acronym: "SC", name: "Santa Catarina" },
  { acronym: "SP", name: "São Paulo" },
  { acronym: "SE", name: "Sergipe" },
  { acronym: "TO", name: "Tocantins" }
];

export function SuggestionForm() {
  const {form, onSubmit } = useSuggest()

  return (
    <Form {...form}>
      <form
        className="w-full space-y-8"
        onSubmit={form.handleSubmit(onSubmit)}>

        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu nome completo</FormLabel>
              <FormControl>
                <Input
                  className="w-full"
                  placeholder="John Doe"
                  {...field} />
              </FormControl>
            </FormItem>
          )}
        />

      <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  className="w-full"
                  type="email"
                  placeholder="johndoe@email.com"
                  {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="state"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estado</FormLabel>
              <Select
                disabled 
                onValueChange={field.onChange} 
                defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um estado" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <ScrollArea className="h-[200px]">
                    {
                      states.map((state) => {
                        return (
                          <SelectItem key={state.acronym} value={state.acronym}>{state.acronym}</SelectItem>
                        )
                      })
                    }
                  </ScrollArea>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          name="municipality"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Município</FormLabel>
              <Select
                onValueChange={field.onChange} 
                defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um município" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <ScrollArea className="h-[200px]">
                    {
                      states.map((state) => {
                        return (
                          <SelectItem key={state.acronym} value={state.acronym}>{state.acronym}</SelectItem>
                        )
                      })
                    }
                  </ScrollArea>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          name="community"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comunidade</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma comunidade" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <ScrollArea className="h-[200px]">
                    {
                      states.map((state) => {
                        return (
                          <SelectItem key={state.acronym} value={state.acronym}>{state.acronym}</SelectItem>
                        )
                      })
                    }
                  </ScrollArea>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          name="suggestedName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome popular na sua comunidade</FormLabel>
              <FormControl>
                <Input
                  className="w-full"
                  placeholder="Lambari"
                  {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex gap-2 md:justify-between">
          <Button variant="cancel" className="w-full">Cancel</Button>
          <Button variant="submit" className="w-full" type="submit">Enviar</Button>
        </div>
      </form>
    </Form>
  )
}