import Image from "next/image";

import { Header } from "@/components/Header";
import { CardFish } from "@/components/CardFish";
import { Footer } from "@/components/Footer";
import { Pagination } from "@/components/Pagination";

import redes from "../../public/redes.png";
import { LuSearch } from "react-icons/lu";

export default function Home() {
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
        <div className="w-full self-start">
          <h1 className="font-bold text-4xl text-[#404040] mb-10 md:items-center">Catálogo de Pescados</h1>

          {/* Search */}
          <div className="flex flex-col gap-10 lg:flex-row md:items-center">
            <div className="max-w-[380px] w-full flex flex-col gap-3">
              <label className="font-medium">Buscar por nome científico ou popular</label>
              <input className="w-full p-3 border border-[#E7E7E7] rounded focus:outline-none focus:border-[#0064C8] focus:ring-[#0064C8] focus:ring-1" type="text" />
            </div>

            <div className="max-w-[380px] w-full flex flex-col gap-3">
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
          <CardFish
            common_name="Lambari"
            scientific_name="Astynax sp."
            native={true}
            gears={["Tarrafa", "Anzol", "Barco Motor"]}
          />
          <CardFish
            common_name="Lambari"
            scientific_name="Astynax sp."
            native={true}
            gears={["Tarrafa", "Anzol", "Barco Motor"]}
          />
          <CardFish
            common_name="Lambari"
            scientific_name="Astynax sp."
            native={true}
            gears={["Tarrafa", "Anzol", "Barco Motor"]}
          />
          <CardFish
            common_name="Lambari"
            scientific_name="Astynax sp."
            native={true}
            gears={["Tarrafa", "Anzol", "Barco Motor"]}
          />
          <CardFish
            common_name="Lambari"
            scientific_name="Astynax sp."
            native={true}
            gears={["Tarrafa", "Anzol", "Barco Motor"]}
          />
          <CardFish
            common_name="Lambari"
            scientific_name="Astynax sp."
            native={true}
            gears={["Tarrafa", "Anzol", "Barco Motor"]}
          />
          <CardFish
            common_name="Lambari"
            scientific_name="Astynax sp."
            native={true}
            gears={["Tarrafa", "Anzol", "Barco Motor"]}
          />
          <CardFish
            common_name="Lambari"
            scientific_name="Astynax sp."
            native={true}
            gears={["Tarrafa", "Anzol", "Barco Motor"]}
          />
          <CardFish
            common_name="Lambari"
            scientific_name="Astynax sp."
            native={true}
            gears={["Tarrafa", "Anzol", "Barco Motor"]}
          />
          <CardFish
            common_name="Lambari"
            scientific_name="Astynax sp."
            native={true}
            gears={["Tarrafa", "Anzol", "Barco Motor"]}
          />
        </div>
        <Pagination />
      </main>
      <Footer />
    </>
  );
}
