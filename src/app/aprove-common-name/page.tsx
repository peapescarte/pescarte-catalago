"use client"

import Image from "next/image";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { Modal } from "@/components/Modal";
import { useState } from "react";

import {
  LuMailX,
  LuMailCheck,
  LuInbox,
  LuMail,
  LuSearch,
  LuArrowLeft,
} from "react-icons/lu";

export default function AproveCommonName() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex">
        <aside className="py-10 ps-10 hidden md:block">
          <ul>
            <li>
              <a
                href="#"
                className="flex gap-x-4 justify-start py-4 px-6 text-[#707070] hover:bg-[#3383D3] hover:text-white hover:rounded-md"
              >
                <LuInbox className="w-6 h-6" />
                Todas
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-x-4 justify-start py-4 px-6 text-[#707070] hover:bg-[#3383D3] hover:text-white hover:rounded-md"
              >
                <LuMail className="w-6 h-6" />
                Recebidas
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-x-4 justify-start py-4 px-6 text-[#707070] hover:bg-[#3383D3] hover:text-white hover:rounded-md"
              >
                <LuMailCheck className="w-6 h-6" />
                Aprovadas
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-x-4 justify-start py-4 px-6 text-[#707070] hover:bg-[#3383D3] hover:text-white hover:rounded-md"
              >
                <LuMailX className="w-6 h-6" />
                Descartadas
              </a>
            </li>
          </ul>
        </aside>

        <main className="flex-1 p-10 space-y-6">

          <div className="relative w-full">
            <div className="absolute top-2 left-2 inline-flex items-center p-2">
              <LuSearch className=" text-[#9F9F9F]" />
            </div>
            <input
              className="w-full h-12 pl-10 pr-4 py-1 placeholder-[#9F9F9F] border border-[#E7E7E7] rounded focus:outline-none focus:border-[#0064C8] focus:ring-[#0064C8] focus:ring-1"
              type="search"
              placeholder="Faça um pesquisa..."
            />
          </div>

          <div className="space-y-2">
            <h3>Recebidas</h3>
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
                  <tr className="cursor-pointer text-sm text-gray-700 hover:text-white hover:bg-[#0064C8] hover:ease-in-out durantion-300">
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
              <div className="space-y-3 p-4 rounded-lg shadow cursor-pointer hover:text-white hover:bg-[#0064C8] hover:ease-in-out durantion-300">

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
          </div>

          <div className="space-y-2">
            <h3>Todas</h3>
            <div className="overflow-auto rounded-lg shadow hidden md:block">
              <table className="w-full">
                <tbody className="divide-y divide-gray-100 ">
                  <tr className="cursor-pointer text-sm text-gray-700 hover:text-white hover:bg-[#0064C8] hover:ease-in-out durantion-300">
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
                  <tr className="cursor-pointer text-sm text-gray-700 hover:text-white hover:bg-[#0064C8] hover:ease-in-out durantion-300">
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

              {/* Card */}
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
          </div>

          <Modal isOpen={openModal} closeModal={() => setOpenModal(false)}/>
        </main>
      </div>
      <Footer />
    </>
  );
}
