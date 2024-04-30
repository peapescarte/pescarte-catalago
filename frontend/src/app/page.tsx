import Image from "next/image";

import { CardFish } from "@/components/my-ui/CardFish";
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
export default async function Home() {
  const states = await LocalityService.getAllState(true)
  const fish = await FishService.getAll()
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
          {/* <SearchForm states={states}/> */}
          <Toaster position="top-right" richColors />
        </div>

        {fish.length > 0 ? (
          <>
            <div className="flex flex-col gap-6 mt-12 mb-20">
              {fish.map((fish) => {
                return (
                  <CardFish
                    key={fish.id}
                    id={fish.id}
                    suggested_names={fish.suggested_names}
                    scientific_name={fish.scientific_name}
                    native={fish.native}
                    gears={fish.gears}
                    image_data={fish.image_data}
                  />
                )
              })}
            </div>
            {/* <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          */}
            </> 
        ) : (
          <div className="flex flex-col gap-6 mt-12 mb-20"> Não há peixe! </div>
        )}
      </main>
      <Footer />
    </>
  );
}
