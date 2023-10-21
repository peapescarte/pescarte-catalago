"use client"

import Image from "next/image";

import { SlClose } from 'react-icons/sl'

import fishExample from "../../../../public/peixe.png";
import { useEffect, useRef } from "react";
import { useFish, useSuggestionsNames } from "@/hooks";


type ModalProps = {
  item: number;
  isOpen: boolean;
  closeModal: () => void;

}

export function Modal({ item, isOpen, closeModal }: ModalProps) {

  const {fish: allFish } = useFish();
  const { suggestionNames } = useSuggestionsNames();

  const name = suggestionNames[item];
  const fish = allFish.find((fish) => fish.scientific_name === name.scientific_name);

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      const dialog = dialogRef.current;
      if (dialog) {
        dialog.showModal();
      }
    }
  }, [isOpen]);

  function handleCloseModal() {
    const dialog = dialogRef.current;
    if (dialog) {
      closeModal();
      dialog.close();
    }
  }

  function handleDiscard() {
    const dialog = dialogRef.current;
    if (dialog) {
      closeModal();
      dialog.close();
    }
  }

  return (
    <dialog ref={dialogRef} className="max-w-[630px] border-2 rounded-lg">
      <div className="flex flex-col gap-10 p-10">

        { /* Titulo */ }
        <div className="flex items-center justify-between gap-6">
          <h1 className="text-xl text-[#0064C8]">{name.suggestionName}</h1>
          <SlClose onClick={handleCloseModal} className="w-6 h-6 text-[#cfcfcf] cursor-pointer hover:text-[#0064C8] hover:ease-in duration-300"/>
        </div>

        { /* Infos */ }
        <div>
          <h2 className="text-[#404040]">Enviado Por:</h2>
          <p className="text-[#707070]">{name.name}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-52">
            <h2 className="text-[#404040]">Estado:</h2>
            <p className="text-[#707070]">{name.state}</p>
          </div>

          <div className="w-52">
            <h2 className="text-[#404040]">Município:</h2>
            <p className="text-[#707070]">{name.municipality}</p>
          </div>

          <div className="w-52">
            <h2 className="text-[#404040]">Região:</h2>
            <p className="text-[#707070]">{name.region}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-52">
            <h2 className="text-[#404040]">Nome Científico:</h2>
            <p className="text-[#707070]">{name.scientific_name}</p>
          </div>

          <div className="w-52">
            <h2 className="text-[#404040]">Nome Popular Enviado:</h2>
            <p className="text-[#707070]">{name.suggestionName}</p>
          </div>
        </div>

        <div>
          <h2 className="text-[#404040]">Foto:</h2>
          <Image src={fish?.image || fishExample} alt="Um peixe" width={160} height={160} className="rounded" />
        </div>

      </div>


      { /* Buttons */}
      <div className="flex flex-col gap-2 my-10 items-center justify-center md:flex-row">
        <button onClick={() => handleDiscard()} className="flex items-center justify-center gap-2 p-3 rounded border border-[#99C1E9] hover:bg-[#99C1E9] text-[#66A2DE] hover:text-white w-40">
          Descartar
        </button>
        <button className="flex items-center justify-center gap-2 p-3 rounded bg-[#0064C8] hover:bg-[#3383D3] text-white w-40">
          Aprovar
        </button>
      </div>
    </dialog>
  );
}
