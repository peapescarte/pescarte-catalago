"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCommunity } from "@/hooks/useCommunity";
import { useMunicipality } from "@/hooks/useMunicipality";
import { useStates } from "@/hooks/useStates";
import { useSuggest } from "@/hooks/useSuggest";

type SuggestionProps = {
  id: string
}

export function SuggestionForm({ id } : SuggestionProps) {
  const {form, onSubmit } = useSuggest()

  const { states } = useStates()
  const { municipalities } = useMunicipality()
  const { communities } = useCommunity()

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
          <Button variant="cancel" className="w-full">Cancel</Button>
          <Button variant="submit" className="w-full" type="submit">Enviar</Button>
        </div>
      </form>
    </Form>
  )
}