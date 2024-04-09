import Image from "next/image";

import { LuFish } from "react-icons/lu";
import Link from "next/link";

type Name = {
  name: string;
  approve: boolean;
}

type CommonName = {
  region: string;
  names: Name[];
}

type CardFishProps = {
  id: string;
  scientific_name: string;
  native: boolean;
  image: string;
  gears: string[];
  common_name: CommonName[];
};

export function CardFish({
  id,
  common_name,
  scientific_name,
  native,
  gears,
  image,
}: CardFishProps) {
  return (
    <div className="flex flex-col xl:flex-row border border-[#E7E7E7] rounded-lg xl:flex">
      {/* Image */}
      <Image src={image} alt="Um peixe" className="rounded md:w-full xl:w-1/4"  width={390} height={194}/>

      {/* Content */}
      <div className="xl:flex xl:flex-col xl:self-center xl:flex-1">

        {/* Name */}
        <h2 className="font-bold text-2xl p-1 xl:ml-3">{common_name[0].names[0].name}</h2>

        {/* Info */}
        <div className="flex flex-col gap-4 p-4 xl:flex-row xl:gap-8 xl:justify-between">

          {/* Sci info */}
          <div className="flex flex-col gap-2 w-1/2">
            <div className="text-xs">
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
                    <span key={gear} className="bg-[#F3F3F3] rounded p-1 m-1">
                      {gear}
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
              {
                common_name?.map((region) => {
                  return (
                    <p key={region.region} className="text-xs">
                      <strong>{region.region}:</strong>
                      {region.names?.map((name) => {
                        if(name.approve)
                          return (
                            <span key={name.name} className="bg-[#F3F3F3] rounded p-1 m-1">{name.name}</span>
                          )
                      })}

                    </p>
                  )
                })
              }
            </div>
          </div>

          {/* button */}
          <Link href={`/public/send-common-name/${id}`} className="self-center">
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
