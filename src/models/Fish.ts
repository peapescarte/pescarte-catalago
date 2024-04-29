import { SuggestedNameOut, SuggestedNameIn } from "./CommonName"
import { GearIn, GearOut } from "./Gear"
import { HabitatIn, HabitatOut } from "./Habitat"

export type FishOut = {
  id: string,
  scientific_name: string,
  native: boolean,
  image_data: string | null,
  gears: GearOut[],
  habitats: HabitatOut[],
  suggested_names: SuggestedNameOut[]
}

export type FishIn = {
  scientific_name: string,
  native: boolean,
  image_data: string | null,
  gears: GearIn[],
  habitats: HabitatIn[],
  suggested_names: SuggestedNameIn[]
}
