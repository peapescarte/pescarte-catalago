import Image from "next/image";

import { LuFish } from "react-icons/lu";
import Link from "next/link";
import { SuggestedNameOut } from "@/models/CommonName";
import { GearOut } from "@/models/Gear";

import fishExample from "@/assets/examples/peixe.png";

type CardFishProps = {
  id: string;
  scientific_name: string;
  native: boolean;
  image_data: string | null;
  gears: GearOut[];
  suggested_names: SuggestedNameOut[];
};

export function CardFish({
  id,
  suggested_names,
  scientific_name,
  native,
  gears,
  image_data,
}: CardFishProps) {
  return (
    <div className="flex flex-col xl:flex-row border border-[#E7E7E7] rounded-lg xl:flex">
      {/* Image */}
      {image_data != null ? (
        <Image src={image_data} alt="Um peixe" className="rounded md:w-full xl:w-1/4" width={390} height={194}/>
      ) : (
        <Image src={fishExample} alt="Um peixe" className="rounded md:w-full xl:w-1/4"  width={390} height={194}/>
      )}

      {/* Content */}
      <div className="xl:flex xl:flex-col xl:self-center xl:flex-1">

        {/* Name */}
        { (suggested_names != null && suggested_names.length > 0) ? (
          <h2 className="font-bold text-2xl p-1 xl:ml-3">{suggested_names[0].names[0]}</h2>
        ) : (
         <h2 className="font-bold text-2xl p-1 xl:ml-3">Não há nomes comuns</h2>
        )}

        {/* Info */}
        <div className="flex flex-col gap-4 p-4 xl:flex-row xl:gap-8 xl:justify-between">

          {/* Sci info */}
          <div className="flex flex-col gap-2 w-1/2">
            <div className="text-base">
              <strong>Nome Científico: </strong>
              {scientific_name}
            </div>

            <div className="text-xs">
              <strong>Espécie: </strong>
              {native ? "Nativa" : "Invasora"}
            </div>

            <div className="text-xs">
              <strong>Captura: </strong>
              {gears ? (
                gears.map((gear) => {
                  return (
                    <span key={gear.id} className="bg-[#F3F3F3] rounded p-1 m-1">
                      {gear.name}
                    </span>
                  );
                })
              ) : (
                <p>Loading</p>
              )}
            </div>
          </div>

          {/* common info */}
          <div className="flex flex-col gap-2 text-sm w-1/2">
            <h3 className="font-bold text-lg">Nomes Populares</h3>
            <div className="flex flex-col gap-2">
              {suggested_names && suggested_names.length > 0 ? (
                suggested_names.map((Suggested_name) => {
                  return (
                    <p key={Suggested_name.community} className="text-xs">
                      <strong>{Suggested_name.community}:</strong>
                      {Suggested_name.names?.map((name) => {
                          return (
                            <span key={name} className="bg-[#F3F3F3] text-sm  rounded p-1 m-1">{name}</span>
                          )
                      })}
                    </p>
                  )
                })
                ) : (
                  <span className="bg-[#F3F3F3] text-sm rounded p-1 m-1">Não há nomes comuns</span>
                )
              }
            </div>
          </div>

          {/* button */}
          <Link href={`/send-common-name/${id}`} className="self-center">
            <button className="flex items-center justify-center gap-2 p-2 border border-[#3383D3] rounded text-[#3383D3] hover:bg-[#3383D3] hover:text-white xl:w-40">
              <LuFish className="w-6 h-6 xl:w-14 xl:h-14 stroke-1" />
              Enviar outro nome popular
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
