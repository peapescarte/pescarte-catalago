import Image from "next/image";

import { CardFish, CardFishTable } from "@/components/my-ui/CardFish";
import { Footer } from "@/components/my-ui/Footer";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import redes from "@/assets/backgrounds/redes.png";
import { Toaster } from "@/components/ui/sonner";
import { SearchForm } from "./forms/search-form";
import { FishService, LocalityService } from "@/services";

export const dynamic = 'force-dynamic';

type HomeSearchProps = {
  searchParams?: {
    scientific_name: string
    common_name: string
    community_id: string
    page?: string
  }
}

export default async function Home({searchParams}: HomeSearchProps) {
  const states = await LocalityService.getAllState(true)

  const search = {
    scientific_name: searchParams?.scientific_name || '',
    common_name: searchParams?.common_name || '',
    community_id: searchParams?.community_id || ''
  }

  return (
    <>
      <Image
        className="w-full"
        src={redes}
        alt="Uma rede de pesca vermelha e azul toda junta"
      />
      <main className="flex flex-col items-center gap-6 mx-10 mt-20 mb-32">

        {/* Title e Search */}
        <div className="w-full max-w-[1300px]">
          <h1 className="font-bold text-4xl text-[#404040] mb-10 md:items-center">Catálogo de Peixes</h1>

          {/* Search */}
          <SearchForm states={states}/>
          <Toaster position="top-right" richColors />
        </div>

        <CardFishTable search={search}/>

      </main>
      <Footer />
    </>
  );
}
