import { FishService } from "@/services/FishService"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const useSearchForm = () => {
  const searchFormSchema = z.object({
    scientific_name: z.string().max(50).optional(),
    common_name: z.string().optional(),
    state: z.string().max(2).optional(),
    municipality: z.string().optional(),
    community: z.string().optional(),
  })

  type SearchFormValues = z.infer<typeof searchFormSchema>

  const defaultValues: Partial<SearchFormValues> = {
    state: "RJ"
  }

  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormSchema),
    defaultValues,
    mode: "onChange",
  })
  
  const onSubmit = (data: SearchFormValues) => {
    FishService.getAll({
      scientific_name: data.scientific_name,
      common_name: data.common_name,
      state: data.state,
      municipality_id: data.municipality,
      community_id: data.community,
    })
  }

  return {
    form,
    onSubmit
  }
}  


