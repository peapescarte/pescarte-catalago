import { axiosClient } from "@/lib/axios"

type CommunityProps = {
  name: string,
  state: string,
  municipality:string,
}

export const CommunityService = {
  create: async function({ 
    name,
    state,
    municipality
  }: CommunityProps): Promise<any | undefined> {
    try {
      //chamada de API
      console.log(
        'CommunityService.create', 
        name,
        state,
        municipality
      )

      return {
        status: 200,
        message: 'Sugestão realizada com sucesso'
      }
    } catch (error) {
      
    }
  }
}
