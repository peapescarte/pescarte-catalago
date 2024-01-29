import { SuggestionService } from "@/services/SuggestionService"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const useSuggest = () => {
  const suggestionFormSchema = z.object({
    name: z.string().min(3, { message: "O nome digitado deve ter mais de 3 caracteres" }).max(50),
    email: z.string(),
    state: z.string().max(2),
    municipality: z.string(),
    community: z.string(),
    suggestedName: z.string().min(3, { message: "A sugestão deve ter mais de 3 caracteres" }).max(50),
  })

  type SuggestionFormValues = z.infer<typeof suggestionFormSchema>

  const defaultValues: Partial<SuggestionFormValues> = {
    state: "RJ"
  }

  const form = useForm<SuggestionFormValues>({
    resolver: zodResolver(suggestionFormSchema),
    defaultValues,
    mode: "onChange",
  })
  
  const onSubmit = (data: SuggestionFormValues, fish_id: string) => {
    SuggestionService.create({
      fish_id: fish_id,
      name: data.name,
      email: data.email,
      state: data.state,
      municipality_id: data.municipality,
      community_id: data.community,
      suggestedName: data.suggestedName,
    })
  }

  return {
    form,
    onSubmit
  }
}  


