import Image from "next/image";

import fish from "../../../public/peixe.png";
import fish_ico from "../../../public/fish_ico.svg";

export function CardFish() {
  return (
    <div className="w-[1360px] flex items-center gap-10 pr-11 border border-[#E7E7E7] rounded-lg">
      <Image src={fish} placeholder="blur" alt="Um peixe" />
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="font-bold text-2xl">Lambari</h2>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex flex-col gap-2 text-sm">
            <p>
              <strong>Nome Científico: </strong>Astynax sp.
            </p>
            <p>
              <strong>Espécie: </strong>Nativa
            </p>
            <p>
              <strong>Captura: </strong>
              <span className="bg-[#F3F3F3] rounded p-1 m-1">Tarrafa</span>
              <span className="bg-[#F3F3F3] rounded p-1 m-1">Anzol</span>
              <span className="bg-[#F3F3F3] rounded p-1 m-1">Barco-Motor</span>
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="86"
            viewBox="0 0 2 86"
            fill="none"
          >
            <path d="M1 0V86" stroke="#E7E7E7" />
          </svg>
          <div className="flex flex-col gap-2 text-sm">
            <h3 className="font-bold text-xl">Nomes Populares</h3>
            <p>
              <strong>Espécie: </strong> 
              Piabinhas Lambari
            </p>
            <p>
              <strong>Captura: </strong>
              <span className="bg-[#F3F3F3] rounded p-1 m-1">Nome X</span>
              <span className="bg-[#F3F3F3] rounded p-1 m-1">Nome Y</span>  
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="86"
            viewBox="0 0 2 86"
            fill="none"
          >
            <path d="M1 0V86" stroke="#E7E7E7" />
          </svg>
          <div>
            <button className="max-w-[185px] flex items-center justify-center gap-4 py-2 px-4 text-[#3383D3] border border-[#3383D3] rounded">
              <Image src={fish_ico} width={24} height={24} alt="fish icon" />
              <p className="text-left leading-4">Enviar outro nome popular</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
