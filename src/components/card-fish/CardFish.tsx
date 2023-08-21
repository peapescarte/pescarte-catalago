import Image from "next/image";

import fish from "../../../public/peixe.png";
import { LuFish } from "react-icons/lu";
import Link from "next/link";

type CardFishProps = {
  common_name: string;
  scientific_name: string;
  native: boolean;
  gears: string[];
};

export function CardFish({
  common_name,
  scientific_name,
  native,
  gears,
}: CardFishProps) {
  return (
    <div className="border border-[#E7E7E7] rounded-lg lg:flex">
      {/* Image */}
      <Image src={fish} placeholder="blur" alt="Um peixe" className="rounded" />

      {/* Content */}
      <div className="lg:flex lg:flex-col lg:self-center">
        {/* Name */}
        <h2 className="font-bold text-2xl p-1 lg:ml-3">{common_name}</h2>

        {/* Info */}
        <div className="flex flex-col gap-4 p-4 lg:flex-row lg:gap-8">
          {/* Sci info */}
          <div className="flex flex-col gap-2">
            <p className="text-xs">
              <strong>Nome Científico: </strong>
              {scientific_name}
            </p>

            <p className="text-xs">
              <strong>Espécie: </strong>
              {native ? "Nativa" : "Invasora"}
            </p>

            <p className="text-xs">
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
            </p>
          </div>

          {/* common info */}
          <div className="flex flex-col gap-2 text-sm">
            <h3 className="font-bold text-lg">Nomes Populares</h3>
            <div className="flex flex-col gap-2">
              <p className="text-xs">
                <strong>Campos dos Goytacazes:</strong>
                <span className="bg-[#F3F3F3] rounded p-1 m-1">Piabinhas</span>
                <span className="bg-[#F3F3F3] rounded p-1 m-1">Lambari</span>
              </p>
            </div>
          </div>

          {/* button */}
          <Link href={"/send-common-name"} className="self-center">
            <button className="flex items-center justify-center gap-2 p-2 border border-[#3383D3] rounded text-[#3383D3] hover:bg-[#3383D3] hover:text-white lg:w-40">
              <LuFish className="w-6 h-6 lg:w-14 lg:h-14 stroke-1" />
              Enviar outro nome popular
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
