import { FishService, LocalityService } from "@/services";
import CreateFishForm from "./forms/createFishForm";

export default async function NewFish() {
  const states = await LocalityService.getAllState()
  const gears = await FishService.getAllGear()
  const habitats = await FishService.getAllHabitats()
  const municipalities = await LocalityService.getMunicipalityByUF()
  const communities = await LocalityService.getAllCommunity()

  return (
    <CreateFishForm states={states} gears={gears} habitats={habitats} municipalities={municipalities} communities={communities} />
  )
}