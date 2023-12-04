"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FishService } from "@/services/FishService"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

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

const useCreateFishForm = () => {
  const createFishFormSchema = z.object({
    name: z.string().min(3, { message: "O nome digitado deve ter mais de 3 caracteres" }).max(50),
    email: z.string(),
    state: z.string().max(2),
    municipality: z.string(),
    community: z.string(),
    suggestedName: z.string().min(3, { message: "A sugestão deve ter mais de 3 caracteres" }).max(50),
  })

  type CreateFishFormValues = z.infer<typeof createFishFormSchema>

  const defaultValues: Partial<CreateFishFormValues> = {
    state: "RJ"
  }

  const form = useForm<CreateFishFormValues>({
    resolver: zodResolver(createFishFormSchema),
    defaultValues,
    mode: "onChange",
  })
  
  const onSubmit = (data: CreateFishFormValues) => {
    FishService.create({
      name: data.name,
      email: data.email,
      state: data.state,
      municipality: data.municipality,
      community: data.community,
      suggestedName: data.suggestedName,
    })
  }

  return {
    form,
    onSubmit
  }
}

export default function CreateFishForm() {

  const {form, onSubmit } = useCreateFishForm()

  return (
    <Form {...form}>
      <form
        className="space-y-8"
        onSubmit={form.handleSubmit(onSubmit)}>

        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome científico do peixe</FormLabel>
              <FormControl>
                <Input
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

        <div className="flex flex-col gap-2 md:flex-row md:justify-end">
          <Button variant="cancel" className="w-40">Cancel</Button>
          <Button variant="submit" className="w-40" type="submit">Enviar</Button>
        </div>
      </form>
    </Form>
  )
}