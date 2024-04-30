"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm, useWatch } from "react-hook-form"
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
import { State } from "@/models/State"
import { GearOut } from "@/models/Gear"
import { HabitatOut } from "@/models/Habitat"
import { City } from "@/models/City"
import { CommunityOut } from "@/models/Community"


const useCreateFishForm = () => {

  const ACCEPTED_IMAGE_TYPES = ["image/jpg"]

  const createFishFormSchema = z.object({
    scientific_name: z.string().min(3, { message: "O nome digitado deve ter mais de 3 caracteres" }).max(50),
    suggested_names: z.array(z.object({
      common_name: z.string().min(1, { message: "Por favor, insira um nome comum ao peixe." }),
      uf: z.string().min(2).max(2),
      municipality: z.string().min(1),
      community_id: z.string().min(1),
    })).optional(),
    native: z.boolean().default(false).optional(),
    image_data: z.any()
    .refine(file => file instanceof File, { message: "Espera-se um arquivo" }),
    // .refine(file => ACCEPTED_IMAGE_TYPES.includes(file.type), "Apenas esses tipos são permitidos: .jpg"),
    habitats: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "Você precisa selecionar pelo menos um habitat.",
    }),
    gears: z.array(z.string()).refine((value) => value.some((item) => item), {
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
      gears: [],
      habitats: [],
      native: false
    }
  })

  const onSubmit = (data: CreateFishFormValues) => {
    FishService.create({
      scientific_name: data.scientific_name,
      suggested_names: data.suggested_names || [],
      native: data.native || false,
      image_data: data.image_data,
      habitats: data.habitats,
      gears: data.gears,
    })
  }

  return {
    form,
    onSubmit
  }
}

type CreateFishProps = {
  states: State[],
  gears: GearOut[],
  habitats: HabitatOut[]
  municipalities: City[]
  communities: CommunityOut[]
}

export default function CreateFishForm({ municipalities, communities, gears, habitats, states }: CreateFishProps) {

  const { form, onSubmit } = useCreateFishForm()

  const { fields, append, remove } = useFieldArray({
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
                name={`suggested_names.${index}.common_name`}
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
                name={`suggested_names.${index}.uf`}
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
                name={`suggested_names.${index}.municipality`}
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
                name={`suggested_names.${index}.community_id`}
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
              {/* <Button
              type="button"
              variant="outline"
              size="sm"
              className={cn(index === 0 ? "mt-8" : "mt-2.5")}
              onClick={() => remove(index)}
            >
              X
            </Button> */}
            </div>
          ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => append({ common_name: "", uf: "RJ", municipality: "", community: "" })}
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
          name="habitats"
          control={form.control}
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Habitats</FormLabel>
                <FormDescription>
                  Selecione os locais onde o peixe pode ser encontrado.
                </FormDescription>
              </div>
              {habitats.map((habitat) => (
                <FormField
                  key={habitat.id}
                  control={form.control}
                  name="habitats"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={habitat.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(habitat.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, habitat.id])
                                : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== habitat.id
                                  )
                                )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {habitat.name}
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
          name="gears"
          control={form.control}
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Ferramentas de Pesca</FormLabel>
                <FormDescription>
                  Selecione as ferramentas utilizadas na caputura do peixe.
                </FormDescription>
              </div>
              {gears.map((gear) => (
                <FormField
                  key={gear.id}
                  control={form.control}
                  name="gears"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={gear.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(gear.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, gear.id])
                                : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== gear.id
                                  )
                                )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {gear.name}
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
          name="image_data"
          control={form.control}
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-base">Envie uma imagem</FormLabel>
              <FormControl>
              <Input type="file" className="cursor-pointer"  accept=".jpg, .jpeg, .png, .webp" {...fieldProps} 
                onChange={(event) =>
                  onChange(event.target.files && event.target.files[0])
                }
              />
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