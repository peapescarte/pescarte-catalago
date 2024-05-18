"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { useSuggest } from "@/hooks/useSuggest";
import { City } from "@/models/City";
import { CommunityOut } from "@/models/Community";
import { State } from "@/models/State";
import { LocalityService } from "@/services";
import { useCallback, useEffect, useState } from "react";
import { useWatch } from "react-hook-form";

type SuggestionProps = {
  id: string
  states: State[]
}

export function SuggestionForm({ id, states } : SuggestionProps) {
  const [municipalities, setMunicipalities] = useState<City[]>([])
  const [communities, setCommunities] = useState<CommunityOut[]>([])

  const { form, onSubmit } = useSuggest()

  const uf = useWatch({
    control: form.control,
    name: "uf"
  })

  const municipality = useWatch({
    control: form.control,
    name: "municipality"
  })

  const getAllMunicipalities = useCallback(async (uf: string) => {
    const cities = await LocalityService.getMunicipalityByUF(uf, true)

    setMunicipalities(cities)
  }, [])

  const getCommunitiesByMunicipality = useCallback(async (municipality_id: string) => {
    const communities = await LocalityService.getCommunityByMunicipality(municipality_id) 

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
        className="w-full space-y-8"
        onSubmit={form.handleSubmit((data) => onSubmit(data, id))}>

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
          name="uf"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estado</FormLabel>
              <Select
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
          <Link href="/" className="w-full">
            <Button variant="cancel" className="w-full">Cancel</Button>
          </Link>
          <Button variant="submit" className="w-full" type="submit">Enviar</Button>
        </div>
      </form>
    </Form>
  )
}
