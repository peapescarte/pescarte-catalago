import { axiosClient } from "@/libs/axios"

type CommunityProps = {
  name: string,
  state: string,
  municipality:string,
}

export const LocalityService = {
  create: async function({ 
    name,
    state,
    municipality
  }: CommunityProps): Promise<any | undefined> {
    try {
      //chamada de API
      console.log(
        'LocalityService.create', 
        name,
        state,
        municipality
      )

      //  await axiosClient.post("/api/suggestion", {
      //   name,
      //   description,
      //   municipality_id
      // })

      return {
        status: 200,
        message: 'Sugestão realizada com sucesso'
      }
    } catch (error) {
      
    }
  },

  getAllCommunity: async function() {
    const { data } = await axiosClient.get(`/community/`)
    return data
  },

  getCommunityByMunicipality: async function(municipality: string) {

  },

  getAllState: async function() {
    const { data } = await axiosClient.get(`/uf`)
    return data
  },

  getMunicipalityByUF: async function(uf: string) {
    const { data } = await axiosClient.get(`/cities?uf=${uf}`)
    return data
  }
}
