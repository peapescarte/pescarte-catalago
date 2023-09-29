import Image from "next/image";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LuFish } from "react-icons/lu";

import redes from "../../../public/redes.png";
import fish from "../../../public/peixe.png";

type FishProps = {
  common_name: string;
  scientific_name: string;
  native: boolean;
  gears: string[];
};

export default function SendCommonName({
  common_name = "Piaba",
  scientific_name = "Astyanax bimaculatus",
  native = true,
  gears = ["rede de arrasto"],
}: FishProps) {
  return (
    <>
      <Header />
      <Image
        className="w-full"
        src={redes}
        alt="Uma rede de pesca vermelha e azul"
      />

      <h1 className="font-bold text-center text-2xl text-[#404040] mt-10 mb-20 md:text-4xl">
        Enviar novo nome popular
      </h1>

      <main className="flex flex-col gap-16 mb-16 items-center justify-center lg:flex-row">

        {/* Card Fish */}
        <div className="border border-[#E7E7E7] rounded-lg lg:self-start m-2">

          {/* Image */}
          <Image src={fish} placeholder="blur" alt="Um peixe" className="rounded" />

          {/* Info */}
          <div className="flex flex-col gap-4 px-4 py-6">

            {/* Name */}
            <h2 className="font-bold text-2xl">{common_name}</h2>

            {/* Sci info */}
            <div className="flex flex-col gap-2">
              <p>
                <strong>Nome Científico: </strong>
                {scientific_name}
              </p>

              <p>
                <strong>Espécie: </strong>
                {native ? "Nativa" : "Invasora"}
              </p>

              <p>
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
              <h3 className="font-bold text-xl">Nomes Populares</h3>
              <div className="flex flex-col gap-2">
                <p>
                  <strong>Campos dos Goytacazes:</strong>
                  <span className="bg-[#F3F3F3] rounded p-1 m-1">Piabinhas</span>
                  <span className="bg-[#F3F3F3] rounded p-1 m-1">Lambari</span>
                </p>
              </div>
            </div>

          </div>
        </div>
                    
        {/* Form */}
        <form className="max-w-[360px] w-full flex flex-col gap-8 p-2">
          <div className="flex flex-col gap-2">
            <label className="font-medium">Seu nome completo</label>
            <input
              className="p-1 border border-[#E7E7E7] rounded focus:outline-none focus:border-[#0064C8] focus:ring-[#0064C8] focus:ring-1"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Estado</label>
            <input
              className="p-1 border border-[#E7E7E7] rounded focus:outline-none focus:border-[#0064C8] focus:ring-[#0064C8] focus:ring-1"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium">Município</label>
            <input
              className="p-1 border border-[#E7E7E7] rounded focus:outline-none focus:border-[#0064C8] focus:ring-[#0064C8] focus:ring-1"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Região</label>
            <input
              className="p-1 border border-[#E7E7E7] rounded focus:outline-none focus:border-[#0064C8] focus:ring-[#0064C8] focus:ring-1"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Nome popular na sua região</label>
            <input
              className="p-1 border border-[#E7E7E7] rounded focus:outline-none focus:border-[#0064C8] focus:ring-[#0064C8] focus:ring-1"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:justify-between">
            <button className="flex items-center justify-center gap-2 p-3 rounded border border-[#99C1E9] hover:bg-[#99C1E9] text-[#66A2DE] hover:text-white md:w-40">
              Cancelar
            </button>
            <button className="flex items-center justify-center gap-2 p-3 rounded bg-[#0064C8] hover:bg-[#3383D3] text-white md:w-40">
              Enviar
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
