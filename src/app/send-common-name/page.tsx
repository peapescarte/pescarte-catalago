import Image from "next/image";

import { Header } from "@/components/Header";

import redes from "../../../public/redes.png"
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";

export default function SendCommonName() {
  return (
    <>
      <Header />
      <Image className="w-full" src={redes} alt="Uma rede de pesca vermelha e azul" />
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl text-[#404040] mt-10 mb-20 md:text-4xl">Enviar novo nome popular</h1>
        <form className="max-w-[360px] w-full flex flex-col gap-10 p-2">
          <div className="flex flex-col gap-2">
            <label className="font-medium">Sua região</label>
            <input className="p-3 border border-[#E7E7E7] rounded focus:outline-none focus:border-[#0064C8] focus:ring-[#0064C8] focus:ring-1"  type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Nome popular na sua região</label>
            <input className="p-3 border border-[#E7E7E7] rounded focus:outline-none focus:border-[#0064C8] focus:ring-[#0064C8] focus:ring-1"  type="text" />
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:justify-between">
            <button className="flex items-center justify-center gap-2 p-4 rounded border border-[#99C1E9] hover:bg-[#99C1E9] text-[#66A2DE] hover:text-white md:w-40">Cancelar</button>
            <button className="flex items-center justify-center gap-2 p-4 rounded bg-[#0064C8] hover:bg-[#3383D3] text-white md:w-40">Enviar</button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  )
}