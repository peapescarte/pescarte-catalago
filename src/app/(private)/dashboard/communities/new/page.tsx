import { axiosClient } from "@/libs/axios";
import CreateCommunityForm from "./forms/createCommunityForm";

async function getAllStates()  {
  const { data: states } = await axiosClient.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")

  return states
}

export default async function NewCommunity() {
  const states = await getAllStates()

  return (
    <CreateCommunityForm states={states}  />
  )
}