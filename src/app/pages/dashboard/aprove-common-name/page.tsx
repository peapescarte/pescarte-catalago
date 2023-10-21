"use client"

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import {
  LuMailX,
  LuMailCheck,
  LuInbox,
  LuMail,
  LuPlusSquare
} from "react-icons/lu";
import { SuggestionNamesTable } from "@/components/dashboard/Table";
import { useState } from "react";
import { Search } from "@/components/dashboard/Search";
import { SideBar } from "@/components/dashboard/SideBar";

export default function AproveCommonName({ searchParams }: { searchParams: { q: string }; }) {
  const search = searchParams.q ?? '';

  const [filter, setFilter] = useState('all')

  function handleFilter(filter: string) {
    setFilter(filter)
  }

  return (
    <>
      <Header />

      <div className="w-full min-h-screen flex">
        <SideBar handleFilter={handleFilter}/>

        <main className="flex-1 p-10 space-y-6">
          <Search />
          <SuggestionNamesTable filter={filter} search={search}/>

        </main>
      </div>

      <Footer />
    </>
  );
}
