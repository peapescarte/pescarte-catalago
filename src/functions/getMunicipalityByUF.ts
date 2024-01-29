import { axiosClient } from "@/lib/axios"

export async function getMunicipalityByUF(uf: string) {
  const { data } = await axiosClient.get(`api/municipality/${uf}`)

  return data
}