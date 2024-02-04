import { axiosClient } from "@/lib/axios";
import CreateCommunityForm from "./components/createCommunityForm";

async function getAllStates()  {
  const { data: states } = await axiosClient.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")

  return states
}

export default async function NewCommunity() {
  const states = await getAllStates()
  console.log(states)

  return (
    <CreateCommunityForm states={states}  />
  )
}