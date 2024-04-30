import { SuggestedNameOut, SuggestedNameIn } from "./CommonName"
import { GearOut } from "./Gear"
import { HabitatOut } from "./Habitat"

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
  gears: string[],
  habitats: string[],
  suggested_names: SuggestedNameIn[]
}
