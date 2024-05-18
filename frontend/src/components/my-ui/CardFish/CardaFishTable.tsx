import { string } from "zod"
import { CardFish } from "./CardFish"

import { FishService } from "@/services/FishService"

type CardFishTablePros = {
  search : {
    scientific_name: string
    common_name: string
    community_id: string
  }
}

export async function CardFishTable({ search }: CardFishTablePros) {
  const fish = await FishService.getFishByFilter(search)

  return (
    <div className = "flex flex-col gap-6 mt-12 mb-20" >
      {fish.length > 0 ? (
        <div>
          {
            fish.map((fish) => {
              return (
                <CardFish
                  key={fish.id}
                  id={fish.id}
                  suggested_names={fish.suggested_names}
                  scientific_name={fish.scientific_name}
                  native={fish.native}
                  gears={fish.gears}
                  image_data={fish.image_data}
                />
              )
            })
          }
        </div>
        ) : (
        <div> Não há peixe! </div>
      )}
    </div>
  )
}