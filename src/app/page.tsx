"use client"

import Image from "next/image";

import { Header } from "@/components/Header";
import { CardFish } from "@/components/CardFish";
import { Footer } from "@/components/Footer";
import { Pagination } from "@/components/Pagination";

import redes from "../../public/redes.png";
import { LuSearch } from "react-icons/lu";
import { useFish } from "@/hooks";

export default function Home() {
  const { fish: allFish } = useFish();

  return (
    <>
      <Header />
      <Image
        className="w-full"
        src={redes}
        alt="Uma rede de pesca vermelha e azul toda junta"
      />
      <main className="flex flex-col items-center gap-6 mx-10 mt-20 mb-32">
        
        {/* Title e Search */}
        <div className="w-full max-w-[1120px]">
          <h1 className="font-bold text-4xl text-[#404040] mb-10 md:items-center">Catálogo de Pescados</h1>

          {/* Search */}
          <div className="flex flex-col gap-10 lg:flex-row md:items-center">
            <div className="md:max-w-[400px] w-full flex flex-col gap-3">
              <label className="font-medium">Buscar por nome científico ou popular</label>
              <input className="w-full p-3 border border-[#E7E7E7] rounded focus:outline-none focus:border-[#0064C8] focus:ring-[#0064C8] focus:ring-1" type="text" />
            </div>

            <div className="md:max-w-[400px] w-full flex flex-col gap-3">
              <label className="font-medium">Buscar por região</label>
              <input className="p-3 border border-[#E7E7E7] rounded focus:outline-none focus:border-[#0064C8] focus:ring-[#0064C8] focus:ring-1" type="text" />
            </div>
            
            <button className="flex items-center justify-center gap-2 p-4 rounded bg-[#0064C8] text-white hover:bg-[#3383D3] lg:h-12 lg:mt-9 lg:max-w-[200px] md:w-full md:max-w-[380px]">
              <LuSearch />
              Pesquisar
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-12 mb-20">
          {allFish?.map((fish) => {
              return (
                <CardFish
                  key={fish.id}
                  id={fish.id}
                  common_name={fish.common_name}
                  scientific_name={fish.scientific_name}
                  native={fish.native}
                  gears={fish.gears}
                  image={fish.image}
                />
              )
          })}
        </div>
        <Pagination />
      </main>
      <Footer />
    </>
  );
}
