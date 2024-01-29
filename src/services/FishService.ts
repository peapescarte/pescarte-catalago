import axios from "axios"
import { toast } from "sonner"

type FishCreateProps = {
  scientific_name: string,
  native: boolean,
  image: string,
  fishHabitat: string[],
  fishGear: string[],
}

type FishGetAllProps = {
  scientific_name?: string,
  common_name?: string,
  state?: string,
  municipality_id?: string,
  community_id?: string,
}

export const FishService = {
  create: async function ({ 
    scientific_name,
    native,
    image,
    fishHabitat,
    fishGear,
  }: FishCreateProps): Promise<any | undefined> {
    try {
      //chamada de API
      console.log(
        'FishService.create', 
        scientific_name,
        native,
        image,
        fishHabitat,
        fishGear,
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
  },

  getAll: async function ({
    scientific_name,
    common_name,
    state,
    municipality_id,
    community_id,
   }: FishGetAllProps): Promise<any | undefined> {
    const props = [ scientific_name, common_name, state, municipality_id, community_id ]
    const everyPropsAreUndefined = props.every(value => value === undefined || value === "")

    if(everyPropsAreUndefined) {
      toast("Informe algum valor", {
        description: "Por favor, antes de realizar uma pesquisa, insira valores em um ou mais campo indicado!",
        action: {
          label: "OK",
          onClick: () => console.log("OK"),
        },
      })

      return;
    }

    try {
      //chamada de API
      console.log(
        'FishService.getAll', 
        scientific_name,
        common_name,
        state,
        municipality_id,
        community_id,
      )

      toast.success("Pesquisa realizada com Sucesso")

      return {
        status: 200,
        message: 'Busca realizada com sucesso'
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(`Status: ${error.response.status} - ${error.message}`)
      }
    }
   }
}