"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCommunity } from "@/hooks/useCommunity";
import { useMunicipality } from "@/hooks/useMunicipality";
import { useSearchForm } from "@/hooks/useSearchForm";
import { useStates } from "@/hooks/useStates";

export function SearchForm() {
  const { form, onSubmit } = useSearchForm()
  const { states } = useStates()
  const { municipalities } = useMunicipality()
  const { communities } = useCommunity()

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
              <FormItem className="w-full xl:flex-grow">
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