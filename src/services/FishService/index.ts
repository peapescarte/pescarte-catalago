import { axiosClient } from "@/libs/axios"
import { FishIn, FishOut } from "@/models/Fish"
import { HabitatOut } from "@/models/Habitat"
import { GearOut } from "@/models/Gear"
import axios from "axios"
import { toast } from "sonner"

type FishGetFilter = {
  scientific_name?: string,
  common_name?: string,
  community_id?: string,
}

export const FishService = {
  create: async function ({
    scientific_name,
    native,
    image_data,
    habitats,
    gears,
    suggested_names,
  }: FishIn){
    try {
      // criar o peixe
      const {data: response} = await axiosClient.post(`/fish`, {
        scientific_name,
        native,
        image_data,
        habitats,
        gears
      })

      // associar imagem ao peixe
      await axiosClient.post(`/fish`, {
        fish_id: response.id,
        file: image_data
      })

      // criar nomes comuns para o peixe
      if (suggested_names.length > 0){
        for (const suggested_name of suggested_names) {
          await axiosClient.post(`/suggested-common-name`, {
            name: "admin",
            email: "admin@email.com",
            fish_id: response.id,
            community_id: suggested_name.community_id,
            suggested_name: suggested_name.common_name
          })
        }
      }

      toast.success("Peixe cadastrado com sucesso")
      window.location.href = '/dashboard/fish'

    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(`Status: ${error.response.status} - ${error.message}`)
      }
    }
  },

  getAll: async function (): Promise<FishOut[]> {
    try { 
      const { data: fish } = await axiosClient.get<FishOut[]>(`/fish/`)
      return fish

    } catch (error) {
      console.error('Erro na chamada da API:', error);
      return []; 
    }
  },

  getFishByFilter: async function ({
    scientific_name,
    common_name,
    community_id,
  }: FishGetFilter): Promise<FishOut[]> {
    const props = [scientific_name, common_name, community_id]
    const everyPropsAreUndefined = props.every(value => value === undefined || value === "")

    if (everyPropsAreUndefined) {
      toast("Informe algum valor", {
        description: "Por favor, antes de realizar uma pesquisa, insira valores em um ou mais campo indicado!",
        action: {
          label: "OK",
          onClick: () => console.log("OK"),
        },
      })

      return [];
    }

    try {
      const { data: fish } = await axiosClient.get<FishOut[]>(`/fish/?scientific_name=${scientific_name}&common_name=${common_name}&community_id=${community_id}`)
     
      toast.success("Pesquisa realizada com Sucesso")

      return fish

    } catch (error) {
      console.error('Erro na chamada da API:', error);
      return []; 
    }
  },

  getFishById: async function (id: string): Promise<FishOut> {
    try { 
      const { data: fish } = await axiosClient.get<FishOut>(`/fish/${id}`)
      return fish

    } catch (error) {
      console.error('Erro na chamada da API:', error);
      return  {
        id: "a47f517c-0218-45ce-a513-72b0591f22f2",
        scientific_name: "Astyanax sp.",
        native: true,
        image_data: null,
        gears: [
          {
            "id": "bddb8891-0f14-495f-959e-2bf5180b19da",
            "name": "anzol"
          }
        ],
        habitats: [
          {
            "id": "1f146949-a1bf-495b-8459-54581e520699",
            "name": "lagoa"
          }
        ],
        "suggested_names": [
          {
            "community": "armação dos búzios",
            "names": [
              "aracá"
            ]
          }
        ]
      }
    }
  },

  getAllHabitats: async function (): Promise<HabitatOut[]> {
    try { 
      const { data: habitats } = await axiosClient.get<HabitatOut[]>(`/habitat`)
      return habitats

    } catch (error) {
      console.error('Erro na chamada da API:', error);
      return []; 
    }
  },

  getAllGear: async function (): Promise<GearOut[]> {
    try { 
      const { data: gears } = await axiosClient.get<GearOut[]>(`/gear`)
      return gears

    } catch (error) {
      console.error('Erro na chamada da API:', error);
      return []; 
    }
  }
}