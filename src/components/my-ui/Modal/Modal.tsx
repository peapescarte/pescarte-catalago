"use client"

import Image from "next/image";

import { SlClose } from 'react-icons/sl'

import fishExample from "@/assets/examples/peixe.png";
import { useEffect, useRef } from "react";
import { SuggestedNameOutProps } from "@/models/SuggestedName";
import { SuggestionNameService } from "@/services";
import { Badge } from "@/components/ui/badge";

type ModalProps = {
  row_data: SuggestedNameOutProps | undefined;
  isOpen: boolean;
  closeModal: () => void;
}

export function Modal({ row_data, isOpen, closeModal }: ModalProps) {
  

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

  async function handleReject(id: string = "") {
    await SuggestionNameService.rejectSuggestion(id)
    const dialog = dialogRef.current;
    if (dialog) {
      closeModal();
      dialog.close();
    }
  }

  async function handleApprove(id: string =  "") {
    await SuggestionNameService.approveSuggestion(id)

    const dialog = dialogRef.current;
    if (dialog) {
      closeModal();
      dialog.close();
    }
  }

  return (
    <dialog ref={dialogRef} className="max-w-[630px] border-2 rounded-lg">
      <div className="flex flex-col gap-10 p-10">

        { /* Titulo */}
        <div className="flex items-center justify-between gap-6">
          <h1 className="text-xl font-bold text-[#0064C8]">{row_data?.suggested_name}</h1>
          <SlClose onClick={handleCloseModal} className="w-6 h-6 text-[#cfcfcf] cursor-pointer hover:text-[#0064C8] hover:ease-in duration-300" />
        </div>

        { /* Infos */}
        <div className="space-y-8 font-medium">

          <div className="flex flex-col justify-between md:flex-row gap-12">
            <div className="w-52">
              <h2 className="text-[#404040]">Enviado Por:</h2>
              <p className="text-[#707070]">{row_data?.name}</p>
            </div>
            <div className="w-52">
              <h2 className="text-[#404040]">Email:</h2>
              <p className="text-[#707070]">{row_data?.name}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between md:flex-row gap-12">
            <div className="w-52">
              <h2 className="text-[#404040]">Município:</h2>
              <p className="text-[#707070]">{row_data?.municipality}</p>
            </div>

            <div className="w-52">
              <h2 className="text-[#404040]">Estado:</h2>
              <p className="text-[#707070]">{row_data?.uf}</p>
            </div>

            <div className="w-52">
              <h2 className="text-[#404040]">Comunidade:</h2>
              <p className="text-[#707070]">{row_data?.community}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between md:flex-row gap-12">
            <div className="w-52">
              <h2 className="text-[#404040]">Nome Científico:</h2>
              <p className="text-[#707070]">{row_data?.scientific_name}</p>
            </div>

            <div className="w-52">
              <h2 className="text-[#404040]">Nome Popular Enviado:</h2>
              <p className="text-[#707070]">{row_data?.suggested_name}</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            {/* <h2 className="text-[#404040]">Foto:</h2> */}
              {/* Image */}
            <Image src={row_data?.image_data || fishExample} alt="Um peixe" width="225" height="125" className="rounded-lg" />
          </div>
        </div>

      </div>


      { /* Buttons */}
      { row_data?.status === "PENDING" ? (
      <div className="flex flex-col gap-2 my-10 items-center justify-center md:flex-row">
        <button onClick={() => handleReject(row_data?.id)} className="flex items-center justify-center gap-2 p-3 rounded border border-[#99C1E9] hover:bg-[#99C1E9] text-[#66A2DE] hover:text-white w-40">
          Descartar
        </button>
        <button onClick={() => handleApprove(row_data?.id)} className="flex items-center justify-center gap-2 p-3 rounded bg-[#0064C8] hover:bg-[#3383D3] text-white w-40">
          Aprovar
        </button>
      </div>
      ) : (
        <>
          {row_data?.status === "APPROVED" && (
            <Badge variant="approved">APPROVED</Badge>
          )}
          {row_data?.status === "REJECTED" && (
            <Badge variant="discarded" className="text-white font-medium whitespace-nowrap">
              REJECTED
            </Badge>
          )}
      </>
      )
    }
    </dialog>
  );
}