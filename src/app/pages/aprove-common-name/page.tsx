"use client"

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import {
  LuMailX,
  LuMailCheck,
  LuInbox,
  LuMail,
  LuSearch,
} from "react-icons/lu";
import { Table } from "@/components/Table/Table";
import { useState } from "react";

export default function AproveCommonName() {
  const [filter, setFilter] = useState('all')

  return (
    <>
      <Header />
      
      <div className="w-full min-h-screen flex">
        <aside className="py-10 ps-10 hidden md:block">
          <ul>
            <li>
              <a
                onClick={() => setFilter('all')}
                href="#"
                className={`flex gap-x-4 justify-start py-4 px-6 text-[#707070] rounded-md hover:bg-[#3383D3] hover:text-white hover:rounded-md ${filter === 'all' ? 'bg-[#3383D3] text-white' : ''}`}
              >
                <LuInbox className="w-6 h-6" />
                Todas
              </a>
            </li>
            <li>
              <a
                onClick={() => setFilter('received')}
                href="#"
                className={`flex gap-x-4 justify-start py-4 px-6 text-[#707070] rounded-md hover:bg-[#3383D3] hover:text-white hover:rounded-md ${filter === 'received' ? 'bg-[#3383D3] text-white' : ''}`}
              >
                <LuMail className="w-6 h-6" />
                Recebidas
              </a>
            </li>
            <li>
              <a
                onClick={() => setFilter('approved')}
                href="#"
                className={`flex gap-x-4 justify-start py-4 px-6 text-[#707070] rounded-md hover:bg-[#3383D3] hover:text-white hover:rounded-md ${filter === 'approved' ? 'bg-[#3383D3] text-white' : ''}`}
              >
                <LuMailCheck className="w-6 h-6" />
                Aprovadas
              </a>
            </li>
            <li>
              <a
                onClick={() => setFilter('discarded')}
                href="#"
                className={`flex gap-x-4 justify-start py-4 px-6 text-[#707070] rounded-md hover:bg-[#3383D3] hover:text-white hover:rounded-md ${filter === 'discarded' ? 'bg-[#3383D3] text-white' : ''}`}
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

          <Table filter={filter} />

        </main>
      </div>

      <Footer />
    </>
  );
}
