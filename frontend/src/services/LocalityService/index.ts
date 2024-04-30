import { axiosClient } from "@/libs/axios"
import { CommunityIn, CommunityOut } from "@/models/Community"
import { State } from "@/models/State"
import { City } from "@/models/City"

export const LocalityService = {
  createCommunity: async function({ 
    name,
    description,
    municipality_id
  }: CommunityIn): Promise<any | undefined> {
    try {
      await axiosClient.post("/community", {
        name,
        description: description,
        municipality_id
      })

      alert("Cadastrado com sucesso!")
      window.location.href = '/dashboard/communities'

    } catch (error) {
      alert("Erro ao cadastrar!")
      window.location.href = '/dashboard/communities'
    }
  },

  getAllCommunity: async function(): Promise<CommunityOut[]> {
    try {
      const { data: communities } = await axiosClient.get<CommunityOut[]>(`/community/`)
      return communities
      
    } catch (error) {
      console.error('Erro na chamada da API:', error);
      return []; 
    }
  },

  
  getCommunityById: async function(id: string): Promise<CommunityOut> {
    try {
      const { data: communities } = await axiosClient.get<CommunityOut>(`/community/${id}`)
      return communities
      
    } catch (error) {
      console.error('Erro na chamada da API:', error);
      return {
        id: "59ee835d-6487-4c8f-8707-d4c3a539c6f7",
        name: "armação dos búzios",
        description: "*",
        municipality_id: "f20656ea-438d-416c-acf3-ee7674044316",
        municipality: "ARMAÇÃO DOS BÚZIOS",
        uf: "Rio de Janeiro"
      }; 
    }
  },

  getCommunityByMunicipality: async function(municipality_id: string) {
    try {
      const { data: communities } = await axiosClient.get<CommunityOut[]>(`/community?municipality_id=${municipality_id}`)
      return communities
      
    } catch (error) {
      console.error('Erro na chamada da API:', error);
      return []; 
    }
  },

  getAllState: async function(hasCommunity: boolean = false): Promise<State[]> {
    try {
      const { data: states } = await axiosClient.get<State[]>(`/lookup/uf?has_community=${hasCommunity}`)
      return states
      
    } catch (error) {
      console.error('Erro na chamada da API:', error);
      return []; 
    }
  },

  getMunicipalityByUF: async function(uf: string = "RJ", hasCommunity: boolean = false): Promise<City[]>{
    try {
      const { data: cities } = await axiosClient.get<City[]>(`/lookup/cities?uf=${uf}&has_community=${hasCommunity}`)
      return cities
    } catch (error) {
      console.error('Erro na chamada da API:', error);
      return []; 
    }
  }
}
