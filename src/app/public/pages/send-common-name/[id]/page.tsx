"use client"

import Image from "next/image";

import { Footer } from "@/components/Footer";

import { SuggestionForm } from "../components/suggestion-form";

import { useFish } from "@/hooks/useFish";

import fishExample from "../../../../../../public/peixe.png";
import redes from "../../../../../../public/redes.png"

export default function SendCommonName({ params }: { params: { id: string } }) {
  const { fish: allFish } = useFish();

  const oneFish = allFish.find(fish => fish.id === params.id)

  return (
    <>
      <Image
        className="w-full"
        src={redes}
        alt="Uma rede de pesca vermelha e azul"
      />

      <h1 className="font-bold text-center text-2xl text-[#404040] mt-10 mb-20 md:text-4xl">
        Enviar novo nome popular
      </h1>

      <main className="m-2 flex flex-col-reverse gap-16 mb-16 items-center justify-center lg:flex-row">
        <div className="md:w-[360px] border border-[#E7E7E7] rounded-lg lg:self-start">

          {/* Image */}
          <Image src={oneFish?.image || fishExample} alt="Um peixe" className="rounded" width="360" height="200"/>

          {/* Info */}
          <div className="flex flex-col gap-4 px-4 py-6">

            {/* Name */}
            <h2 className="font-bold text-2xl">{oneFish?.common_name[0].names[0].name}</h2>

            {/* Sci info */}
            <div className="flex flex-col gap-2">
              <p>
                <strong>Nome Científico: </strong>
                {oneFish?.scientific_name}
              </p>

              <p>
                <strong>Espécie: </strong>
                {oneFish?.native ? "Nativa" : "Invasora"}
              </p>

              <p>
                <strong>Captura: </strong>
                {oneFish?.gears ? (
                  oneFish?.gears.map((gear) => {
                    return (
                      <span key={gear} className="bg-[#F3F3F3] rounded p-1 m-1">
                        {gear}
                      </span>
                    );
                  })
                ) : (
                  <p>Loading</p>
                )}
              </p>
            </div>

            {/* common info */}
            <div className="flex flex-col gap-2 text-sm">
              <h3 className="font-bold text-lg">Nomes Populares</h3>
              <div className="flex flex-col gap-2">
                {
                  oneFish?.common_name?.map((region) => {
                    return (
                      <p key={region.region} className="text-xs">
                        <strong>{region.region}:</strong>
                        {region.names?.map((name) => {
                          if (name.approve)
                            return (
                              <span key={name.name} className="bg-[#F3F3F3] rounded p-1 m-1">{name.name}</span>
                            )
                        })}

                      </p>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="w-full m-4 md:w-[360px]">
          <SuggestionForm id={params.id}/>
        </div>
    
      </main>
      <Footer />
    </>
  );
}