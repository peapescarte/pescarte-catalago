import CreateCommunityForm from "./forms/createCommunityForm";
import { LocalityService } from "@/services";

export const dynamic = 'force-dynamic';
export default async function NewCommunity() {
  const states = await LocalityService.getAllState()

  return (
    <CreateCommunityForm states={states}  />
  )
}