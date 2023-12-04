import axios from "axios"

type SuggestionProps = {
  name: string,
  email: string,
  state: string,
  municipality: string,
  community: string,
  suggestedName: string,
}

export const FishService = {
  create: async function ({ 
    name,
    email,
    state,
    municipality,
    community,
    suggestedName
  }: SuggestionProps): Promise<any | undefined> {
    try {
      //chamada de API
      console.log(
        'SuggestionService.suggest', 
        name,
        email,
        state,
        municipality,
        community,
        suggestedName
      )

      return {
        status: 200,
        message: 'Sugestão realizada com sucesso'
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(`Status: ${error.response.status} - ${error.message}`)
      }
    }
  }
}