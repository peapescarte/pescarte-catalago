import Image from "next/image";

import { Header } from "@/components/Header";

import redes from "../../../public/redes.png"
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";

export default function SendCommonName() {
  return (
    <>
      <Header />
      <Image className="w-full" src={redes} alt="Uma rede de pesca vermelha e azul toda junta" />
      <main className="flex flex-col items-center justify-center gap-[5rem] mx-10 mt-20 mb-32 max-[375px]:mx-4">
        <h1  className="font-bold text-4xl text-[#404040] mb-10 max-[375px]:text-3xl max-[375px]:text-center">Enviar novo nome popular</h1>
        <form className="w-[22.5rem] max-[375px]:w-[15rem] flex flex-col gap-10">
          <div className="w-full flex flex-col gap-3">
            <label className="font-medium">Sua região</label>
            <input className="max-w-[360px] p-3 border border-[#E7E7E7] rounded focus:outline-none focus:border-[#0064C8] focus:ring-[#0064C8] focus:ring-1"  type="text" />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label className="font-medium">Nome popular na sua região</label>
            <input className="max-w-[360px] p-3 border border-[#E7E7E7] rounded focus:outline-none focus:border-[#0064C8] focus:ring-[#0064C8] focus:ring-1" type="text" />
          </div>
          <div className="w-full flex gap-10 justify-between">
            <button className="w-[10rem] max-[375px]:w-[6rem] flex items-center justify-center gap-2 h-12 py-6 px-4 rounded border border-[#99C1E9] hover:bg-[#99C1E9] text-[#66A2DE] hover:text-white">Cancelar</button>
            <button className="w-[10rem] max-[375px]:w-[6rem] flex items-center justify-center gap-2 h-12 py-6 px-4 rounded bg-[#0064C8] hover:bg-[#3383D3] text-[#fff]">Enviar</button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  )
}