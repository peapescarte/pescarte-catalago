"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useWatch } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useMunicipality } from "@/hooks/useMunicipality"
import { CommunityService } from "@/services/CommunityService"
import { axiosClient } from "@/lib/axios"
import { useCallback, useEffect, useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { cn } from "@/lib/utils"


const useCreateCommunityForm = () => {
  const createCommunityFormSchema = z.object({
    state: z.string().max(50),
    municipality: z.string(),
    name: z.string(),
  })

  type CreateCommunityFormValues = z.infer<typeof createCommunityFormSchema>

  const form = useForm<CreateCommunityFormValues>({
    resolver: zodResolver(createCommunityFormSchema),
    defaultValues: {
      state: "RJ",
    },
  })

  const onSubmit = (data: CreateCommunityFormValues) => {
    CommunityService.create({
      name: data.name,
      state: data.state,
      municipality: data.municipality,
    })
  }

  return {
    form,
    onSubmit
  }
}

type state = {
  id: number;
  sigla: string;
  nome: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  };
};

type municipalityProps = {
  id: number;
  nome: string;
}

type CreateCommunityFormProps = {
  states: state[]
}

export default function CreateCommunityForm({ states }: CreateCommunityFormProps) {
  const [municipalities, setMunicipalities] = useState<municipalityProps[]>([])
  // const { municipalities } = useMunicipality()
  const { form, onSubmit } = useCreateCommunityForm()
  const state = useWatch({
    control: form.control,
    name: "state"
  })


  const getAllMunicipalities = useCallback(async (state: string) => {
    const { data } = await axiosClient.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`)
    const cidades = data.map(({ id, nome }: municipalityProps) => ({
      id, nome
    }))

    console.log(cidades)
    setMunicipalities(cidades)
  }, [])

  useEffect(() => {
    getAllMunicipalities(state)
  }, [getAllMunicipalities, state])

  return (
    <Form {...form}>
      <form
        className="space-y-8"
        onSubmit={form.handleSubmit(onSubmit)}>

        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem className="xl:w-1/2 xl:flex-grow">
              <FormLabel>Nome da Comunidade</FormLabel>
              <FormControl>
                <Input
                  className="xl:h-12"
                  placeholder="Lambari"
                  {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="state"
          control={form.control}
          render={({ field }) => (
            <FormItem className=" xl:w-1/2 xl:flex-grow">
              <FormLabel>Estado</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="xl:h-10">
                    <SelectValue placeholder="Selecione um estado" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <ScrollArea className="h-[200px]">
                    {
                      states.map((state) => {
                        return (
                          <SelectItem key={state.sigla} value={state.sigla}>{state.sigla}</SelectItem>
                        )
                      })
                    }
                  </ScrollArea>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        {/* <FormField
            name="municipality"
            control={form.control}
            render={({ field }) => (
              <FormItem className="xl:w-1/2 xl:flex-grow">
                <FormLabel>Município</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="xl:h-10">
                      <SelectValue placeholder="Selecione um município" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <ScrollArea className="h-[200px]">
                      {
                        municipalities.map((municipality) => {
                          return (
                            <SelectItem key={municipality.nome} value={municipality.nome}>{municipality.nome}</SelectItem>
                          )
                        })
                      }
                    </ScrollArea>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          /> */}

        <FormField
          name="municipality"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Município</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-1/2 justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? municipalities.find(
                          (municipality) => municipality.nome === field.value
                        )?.nome
                        : "Selecione o município"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[800px] p-0">
                  <Command>
                    <CommandInput placeholder="Procure um município..." />
                    <ScrollArea className="h-[200px]">
                    <CommandEmpty>Município não encontrado</CommandEmpty>
                    <CommandGroup>
                      {municipalities.map((municipality) => (
                        <CommandItem
                          value={municipality.nome}
                          key={municipality.nome}
                          onSelect={() => {
                            form.setValue("municipality", municipality.nome)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              municipality.nome === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {municipality.nome}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                    </ScrollArea>
                  </Command>
                </PopoverContent>
              </Popover>
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