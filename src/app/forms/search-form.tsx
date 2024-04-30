"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { LocalityService } from "@/services";
import { useCallback, useEffect, useState } from "react";
import { State } from "@/models/State";
import { useWatch } from "react-hook-form";
import { CommunityOut } from "@/models/Community";
import { City } from "@/models/City";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from "next/link";
import { useRouter } from 'next/navigation'

const searchFormSchema = z.object({
  scientific_name: z.string().max(50).optional(),
  common_name: z.string().optional(),
  uf: z.string().max(2).optional(),
  municipality_id: z.string().optional(),
  community: z.string().optional(),
})

type SearchFormValues = z.infer<typeof searchFormSchema>

const defaultValues: Partial<SearchFormValues> = {
  uf: "RJ",
  municipality_id: "",
}

type SearchFormProps = {
  states: State[]
}


export function SearchForm({states} : SearchFormProps) {
  
  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormSchema),
    defaultValues,
    mode: "onChange",
  })

  const router = useRouter();

   const onSubmit = (data: SearchFormValues) => {
    router.push(`/?scientific_name=${data.scientific_name}&common_name=${data.common_name}&community_id=${data.community}`)
  }

  const [municipalities, setMunicipalities] = useState<City[]>([])
  const [communities, setCommunities] = useState<CommunityOut[]>([])

  const uf = useWatch({
    control: form.control,
    name: "uf"
  })

  const municipality = useWatch({
    control: form.control,
    name: "municipality_id"
  })

  const getAllMunicipalities = useCallback(async (uf: string | undefined) => {
    const cities = await LocalityService.getMunicipalityByUF(uf, true)

    setMunicipalities(cities)
  }, [])

  const getCommunitiesByMunicipality = useCallback(async (municipality_id: string | undefined) => {
    const communities = await LocalityService.getCommunityByMunicipality(municipality_id || "") 

    setCommunities(communities)
  }, [])

  useEffect(() => {
    getAllMunicipalities(uf)
  }, [getAllMunicipalities, uf])

  useEffect(() => {
    getCommunitiesByMunicipality(municipality)
  }, [getCommunitiesByMunicipality, municipality])

  return (
    <Form {...form}>
      <form
        className="space-y-8"
        onSubmit={form.handleSubmit(onSubmit)}>

        <div className="space-y-8 xl:space-y-0 xl:flex xl:items-center xl:gap-8">
          <FormField
            name="scientific_name"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full xl:flex-grow">
                <FormLabel>Nome científico</FormLabel>
                <FormControl>
                  <Input
                    className="xl:h-12"
                    placeholder="Astynax sp."
                    {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="common_name"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full xl:flex-grow">
                <FormLabel>Nome popular</FormLabel>
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

          <FormField
            name="community"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full xl:flex-grow">
                <FormLabel>Comunidade</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="xl:h-10">
                      <SelectValue placeholder="Selecione uma comunidade" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <ScrollArea className="h-[200px]">
                      {
                        communities.map((community) => {
                          return (
                            <SelectItem key={community.id} value={community.id}>{community.name}</SelectItem>
                          )
                        })
                      }
                    </ScrollArea>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>


        <div className="flex gap-2 md:justify-between">
          <Button variant="submit" className="w-full" type="submit">Pesquisar</Button>
        </div>
      </form>
    </Form>
  )
}