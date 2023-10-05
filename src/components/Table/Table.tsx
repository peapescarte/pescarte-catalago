import { useState } from "react";
import { Modal } from "../Modal";

type TableProps = {
  filter ?: string
}

export function Table({filter='all'}: TableProps) { 
      const [openModal, setOpenModal] = useState(false);

      return (
      <div className="space-y-2">
            <div className="overflow-auto rounded-lg shadow hidden md:block">
              <table className="w-full">
                <tbody className="divide-y divide-gray-100 ">
                  <tr onClick={() => setOpenModal(true)} className="cursor-pointer text-sm text-gray-700 hover:text-white hover:bg-[#0064C8] hover:ease-in-out durantion-300">
                    {/* <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><input type="checkbox" className="h-4 w-4 text-[#0064C8] border-[#0064C8] rounded"/></td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><input type="checkbox" className="h-4 w-4 text-[#0064C8] border-[#0064C8] rounded"/></td> */}
                    <td className="p-3 whitespace-nowrap">Nome Sobrenome</td>
                    <td className="p-3 whitespace-nowrap">ES</td>
                    <td className="p-3 whitespace-nowrap">Município</td>
                    <td className="p-3 whitespace-nowrap">Região</td>
                    <td className="p-3 whitespace-nowrap">Nome Regional do peixe</td>
                    <td className="p-3 whitespace-nowrap">Nome científico do peixe</td>
                    <td className="p-3 whitespace-nowrap">08:34</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 gap-4 md:hidden">

              {/* Card - Responsivo */}
              <div onClick={() => setOpenModal(true)} className="space-y-3 p-4 rounded-lg shadow cursor-pointer hover:text-white hover:bg-[#0064C8] hover:ease-in-out durantion-300">

                <div className="text-sm">
                  Nome Sobrenome
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <div>Município</div>
                  <div>ES</div>
                </div>

                <div className="text-sm">Região</div>

                <div className="flex flex-col gap-2 text-sm sm:flex-row sm:space-x-2">
                  <div>Nome científico do peixe</div>
                  <div>Nome Regional do peixe</div>
                </div>

              </div>
            </div>

            <Modal isOpen={openModal} closeModal={() => setOpenModal(false)}/>
          </div>

      )
}