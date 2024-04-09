"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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

import { FishService } from "@/services/FishService"
import { cn } from "@/libs/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area";
import { useStates } from "@/hooks/useStates"
import { useMunicipality } from "@/hooks/useMunicipality"
import { useCommunity } from "@/hooks/useCommunity"

const fishHabitat = [
  {
    id: "mar",
    label: "Mar",
  },
  {
    id: "rio",
    label: "Rio",
  },
  {
    id: "lagoa",
    label: "Lagoa",
  },
  {
    id: "brejo",
    label: "Brejo",
  },
]

const fishGear = [
  {
    id: "rede",
    label: "Rede",
  },
  {
    id: "barcomotor",
    label: "Barco Motor",
  },
  {
    id: "tarrafa",
    label: "Tarrafa",
  },
  {
    id: "azol",
    label: "Azol",
  },
]

const useCreateFishForm = () => {
  const createFishFormSchema = z.object({
    scientific_name: z.string().min(3, { message: "O nome digitado deve ter mais de 3 caracteres" }).max(50),
    commons_names: z.array(z.object({
      common_name: z.string().min(1, { message: "Por favor, insira um nome comum ao peixe." }),
      state: z.string().min(2).max(2),
      municipality: z.string().min(1),
      community: z.string().min(1),
    })).optional(),
    native: z.boolean().default(false),
    image: z.any(),
    fishHabitat: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "Você precisa selecionar pelo menos um habitat.",
    }),
    fishGear: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "Você precisa selecionar pelo menos um ferramenta para captura.",
    }),
    copyright: z.boolean().default(false).refine(value => value === true, {
      message: "É necessário confirmar os direitos autorais sobre a imagem."
    })
  })

  type CreateFishFormValues = z.infer<typeof createFishFormSchema>

  const form = useForm<CreateFishFormValues>({
    resolver: zodResolver(createFishFormSchema),
    defaultValues: {
      fishHabitat: ["lagoa", "brejo"],
      fishGear: ["azol", "rede"],
      scientific_name: "",
    },
  })

  const onSubmit = (data: CreateFishFormValues) => {
    FishService.create({
      scientific_name: data.scientific_name,
      commons_names: data.commons_names,
      native: data.native,
      image: data.image,
      fishHabitat: data.fishHabitat,
      fishGear: data.fishGear,
    })
  }

  return {
    form,
    onSubmit
  }
}

export default function CreateFishForm() {

  const { states } = useStates()
  const { municipalities } = useMunicipality()
  const { communities } = useCommunity()

  const { form, onSubmit } = useCreateFishForm()

  const { fields, append } = useFieldArray({
    name: "commons_names",
    control: form.control,
  })

  return (
    <Form {...form}>
      <form
        className="space-y-8"
        onSubmit={form.handleSubmit(onSubmit)}>

        <FormField
          name="scientific_name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome científico</FormLabel>
              <FormControl>
                <Input
                  className="h-12"
                  placeholder="Geophagus brasiliensis"
                  {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="space-y-4">
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-4">
              <FormField
                control={form.control}
                name={`commons_names.${index}.common_name`}
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel className={cn(index !== 0 && "sr-only")}>
                      Novo nome comum
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>

                )}
              />

              <FormField
                name={`commons_names.${index}.state`}
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-1/3">
                    <FormLabel className={cn(index !== 0 && "sr-only")}>Estado</FormLabel>
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
                name={`commons_names.${index}.municipality`}
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel className={cn(index !== 0 && "sr-only")}>Município</FormLabel>
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
                name={`commons_names.${index}.community`}
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel className={cn(index !== 0 && "sr-only")}>Comunidade</FormLabel>
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
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => append({ common_name: "", state: "", municipality: "", community: "" })}
          >
            Adicionar novo nome comum
          </Button>
        </div>


        <FormField
          control={form.control}
          name="native"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Espécie Nativa
                </FormLabel>
                <FormDescription>
                  Por favor, selecione caso a espécie seja nativa da região.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <FormField
          name="fishHabitat"
          control={form.control}
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Habitats</FormLabel>
                <FormDescription>
                  Selecione os locais onde o peixe pode ser encontrado.
                </FormDescription>
              </div>
              {fishHabitat.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="fishHabitat"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== item.id
                                  )
                                )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="fishGear"
          control={form.control}
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Ferramentas de Pesca</FormLabel>
                <FormDescription>
                  Selecione as ferramentas utilizadas na caputura do peixe.
                </FormDescription>
              </div>
              {fishGear.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="fishGear"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== item.id
                                  )
                                )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="image"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-base">Envie uma imagem</FormLabel>
              <FormControl>
                <input
                  type="file"
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="copyright"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Confirmo que possuo os Direitos Autorais da imagem selecionada.
                  </FormLabel>
                  <FormDescription>
                    Por favor, confirme os direitos autorais. Não serão aceitas imagens cuja não possua os direitos autorais.
                  </FormDescription>
                </div>
              </div>
              <FormMessage />
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