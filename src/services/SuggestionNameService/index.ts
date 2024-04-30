import { axiosClient } from "@/libs/axios"
import { SuggestedNameOut, SuggestedNameResponse, SuggestedNameIn, SuggestedNameOutProps } from "@/models/SuggestedName"
import { LocalityService } from "../LocalityService"
import { FishService } from "../FishService"

export const SuggestionNameService = {
  create: async function ({ 
    name,
    email,
    fish_id,
    community_id,
    suggested_name
  }: SuggestedNameIn) {
    try {
      await axiosClient.post("/suggested-common-name/", {
        name,
        email,
        fish_id,
        community_id,
        suggested_name
      })

      alert("Cadastrado com sucesso!")
      window.location.href = '/'

    } catch (error: any) {
      alert(`Cadastro não realizado ${error}`)
      window.location.href = '/'
    }
  },

  getAll: async function(): Promise<SuggestedNameOutProps[]> {
    try { 
      const { data } = await axiosClient.get<SuggestedNameResponse[]>('/suggested-common-name/')
      const suggestedNames: SuggestedNameOutProps[] = await Promise.all(
        data.map(async (suggestedName) => {
          const community = await LocalityService.getCommunityById(suggestedName.community_id);
          const fish = await FishService.getFishById(suggestedName.fish_id);
      
          return {
            ...suggestedName,
            scientific_name: fish.scientific_name,
            municipality: community.municipality,
            community: community.name,
            image_data: fish.image_data,
            uf: community.uf
          };
        })
      );
      
      return suggestedNames

    } catch (error) {
      console.error('Erro na chamada da API:', error);
      return []; 
    }
  },

  getSuggestionPeding: async function(): Promise<SuggestedNameOut[]> {
    try { 
      const { data } = await axiosClient.get<SuggestedNameResponse[]>('/suggested-common-names?status=PENDING')
      const suggestedNames: SuggestedNameOut[] = await Promise.all(
        data.map(async (suggestedName) => {
          const community = await LocalityService.getCommunityById(suggestedName.community_id);
          const fish = await FishService.getFishById(suggestedName.fish_id);
      
          return {
            ...suggestedName,
            scientific_name: fish.scientific_name,
            municipality: community.municipality,
            community: community.name,
          };
        })
      );
      
      return suggestedNames

    } catch (error) {
      console.error('Erro na chamada da API:', error);
      return []; 
    }
  },

  getSuggestionApproved: async function(): Promise<SuggestedNameOut[]> {
    try { 
      const { data } = await axiosClient.get<SuggestedNameResponse[]>('/suggested-common-names?status=APPROVED')
      const suggestedNames: SuggestedNameOut[] = await Promise.all(
        data.map(async (suggestedName) => {
          const community = await LocalityService.getCommunityById(suggestedName.community_id);
          const fish = await FishService.getFishById(suggestedName.fish_id);
      
          return {
            ...suggestedName,
            scientific_name: fish.scientific_name,
            municipality: community.municipality,
            community: community.name,
          };
        })
      );
      
      return suggestedNames

    } catch (error) {
      console.error('Erro na chamada da API:', error);
      return []; 
    }
  },

  getSuggestionRejected: async function(): Promise<SuggestedNameOut[]> {
    try { 
      const { data } = await axiosClient.get<SuggestedNameResponse[]>('/suggested-common-names?status=REJECTED')
      const suggestedNames: SuggestedNameOut[] = await Promise.all(
        data.map(async (suggestedName) => {
          const community = await LocalityService.getCommunityById(suggestedName.community_id);
          const fish = await FishService.getFishById(suggestedName.fish_id);
      
          return {
            ...suggestedName,
            scientific_name: fish.scientific_name,
            municipality: community.municipality,
            community: community.name,
          };
        })
      );
      
      return suggestedNames

    } catch (error) {
      console.error('Erro na chamada da API:', error);
      return []; 
    }
  },

  approveSuggestion: async function(id: string) {
    try {
      await axiosClient.post('/suggested-common-name/approve', {
        ids: [id]
      })

      window.location.reload();

    } catch (error) {
      console.error('Erro na chamada da API:', error);
    }
  },

  rejectSuggestion: async function(id: string) {
    try {
      await axiosClient.post('/suggested-common-name/reject', {
        ids: [id]
      })

      window.location.reload();

    } catch (error) {
      console.error('Erro na chamada da API:', error);
    }
  },


}