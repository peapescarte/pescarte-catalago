import { Header } from "@/components/Header";
import { CardFish } from "@/components/card-fish";
import Image from "next/image";

import { Pagination } from "@/components/Pagination";
import { Button } from "@/components/Button";

import redes from "../../public/redes.png"
import { Footer } from "@/components/Footer";

export default function Catalog() {
  return (
    <>
      <Header />
      <Image className="w-full" src={redes} alt="Uma rede de pesca vermelha e azul toda junta" />
      <main className="flex flex-col items-center gap-6 mx-10 mt-20 mb-32">
        <div className="w-[1360px]">
          <h1 className="font-bold text-4xl text-[#404040] mb-10">Catálogo de Pescados</h1>

          <div className="flex gap-10">
            <div className="flex flex-col gap-3">
              <label className="font-medium">Buscar por nome científico ou popular</label>
              <input className="w-[360px] p-3 border border-[#E7E7E7] rounded focus:outline-none focus:border-[#0064C8] focus:ring-[#0064C8] focus:ring-1" type="text" />
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-medium">Buscar por região</label>
              <input className="w-[360px] p-3 border border-[#E7E7E7] rounded focus:outline-none focus:border-[#0064C8] focus:ring-[#0064C8] focus:ring-1" type="text" />
            </div>

            <div className="self-end mb-1">
              <Button text="Pesquisar" icon=""/>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-12 mb-20">
          <CardFish />
          <CardFish />
          <CardFish />
          <CardFish />
          <CardFish />
          <CardFish />
          <CardFish />
          <CardFish />
          <CardFish />
          <CardFish />
        </div>


        <Pagination />
      </main>
      <Footer />
    </>
  );
}
