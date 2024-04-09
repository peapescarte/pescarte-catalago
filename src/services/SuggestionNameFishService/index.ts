import { axiosClient } from "@/libs/axios"
import { redirect } from "next/dist/server/api-utils"
import { toast } from "sonner"

type CreateSuggestionProps = {
  fish_id:string,
  name: string,
  email: string,
  state: string,
  municipality_id: string,
  community_id: string,
  suggestedName: string,
}

export const SuggestionNameFishService = {
  create: async function ({ 
    fish_id,
    name,
    email,
    state,
    municipality_id,
    community_id,
    suggestedName
  }: CreateSuggestionProps): Promise<any | undefined> {
    try {
      //chamada de API
      console.log(
        'SuggestionService.suggest', 
        fish_id,
        name,
        email,
        state,
        municipality_id,
        community_id,
        suggestedName
      )
      
      // await axiosClient.post("/api/suggestion", {
      //   fish_id,
      //   name,
      //   email,
      //   state,
      //   community_id,
      //   municipality_id,
      //   suggestedName})

      return {
        status: 200,
        message: 'Sugestão realizada com sucesso',
      }
    } catch (error: any) {
      if (error.response) {
        return {
          status: error.response.status,
          message: `${error.response.status} - ${error.message}`,
        } 

      }
    }
  },

  getAllSuggestion: async function() {
    const { data } = await axiosClient.get(`/suggested-common-names`)
    return data
  }
}