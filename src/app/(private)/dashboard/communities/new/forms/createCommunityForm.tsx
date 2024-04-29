"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useWatch } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useCallback, useEffect, useState } from "react"
import { LocalityService } from "@/services"
import { State } from "@/models/State"


const useCreateCommunityForm = () => {
  const createCommunityFormSchema = z.object({
    uf: z.string().max(50),
    municipality_id: z.string(),
    name: z.string(),
  })

  type CreateCommunityFormValues = z.infer<typeof createCommunityFormSchema>

  const form = useForm<CreateCommunityFormValues>({
    resolver: zodResolver(createCommunityFormSchema),
    defaultValues: {
      uf: "RJ",
    },
  })

  const onSubmit = (data: CreateCommunityFormValues) => {
    const response = LocalityService.createCommunity({
      name: data.name.toLowerCase(),
      description: "*",
      municipality_id: data.municipality_id
    })
  }

  return {
    form,
    onSubmit
  }
}

type municipalityProps = {
  id: string;
  uf: string;
  name: string;
}

type CreateCommunityFormProps = {
  states: State[]
}

export default function CreateCommunityForm({ states }: CreateCommunityFormProps) {
  const [municipalities, setMunicipalities] = useState<municipalityProps[]>([])

  const { form, onSubmit } = useCreateCommunityForm()
  const uf = useWatch({
    control: form.control,
    name: "uf"
  })

  const getAllMunicipalities = useCallback(async (uf: string) => {
    const cities = await LocalityService.getMunicipalityByUF(uf)
    
    setMunicipalities(cities)
  }, [])

  useEffect(() => {
    getAllMunicipalities(uf)
  }, [getAllMunicipalities, uf])

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
          name="uf"
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
                          <SelectItem key={state.uf} value={state.uf}>{state.uf}</SelectItem>
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
          name="municipality_id"
          control={form.control}
          render={({ field }) => (
            <FormItem className=" xl:w-1/2 xl:flex-grow">
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
                          <SelectItem key={municipality.id} value={municipality.id}>{municipality.name}</SelectItem>
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