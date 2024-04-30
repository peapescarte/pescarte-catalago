import Image from "next/image";

import { Footer } from "@/components/my-ui/Footer";

import fishExample from "@/assets/examples/peixe.png";
import redes from "@/assets/backgrounds/redes.png"
import { SuggestionForm } from "../forms/suggestion-form";
import { FishService, LocalityService } from "@/services";

export default async function SendCommonName({ params }: { params: { id: string } }) {
  const fish = await FishService.getFishById(params.id)
  const states = await LocalityService.getAllState(true)

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
          {fish.image_data != null ? (
            <Image src={fish.image_data}
              alt="Um peixe"
              className="rounded"
              width="360"
              height="200" />
          ) : (
            <Image src={fishExample}
              alt="Um peixe"
              className="rounded"
              width="360"
              height="200" />
          )}

          {/* Info */}
          <div className="flex flex-col gap-4 px-4 py-6">
            {/* Name */}
            {fish.suggested_names != undefined && fish.suggested_names.length > 0 ? (
              <h2 className="font-bold text-2xl p-1 xl:ml-3">{fish.suggested_names[0].names[0]}</h2>
            ) : (
              <h2 className="font-bold text-2xl p-1 xl:ml-3">Peixe</h2>
            )}

            {/* Sci info */}
            <div className="flex flex-col gap-2">
              <p>
                <strong>Nome Científico: </strong>
                {fish.scientific_name}
              </p>

              <p>
                <strong>Espécie: </strong>
                {fish.native ? "Nativa" : "Invasora"}
              </p>

              <p>
                <strong>Captura: </strong>
                {fish.gears ? (
                  fish.gears.map((gear) => {
                    return (
                      <span key={gear.id} className="bg-[#F3F3F3] rounded p-1 m-1">
                        {gear.name}
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
                  fish.suggested_names?.map((suggested_name) => {
                    return (
                      <p key={suggested_name.community} className="text-xs">
                        <strong>{suggested_name.community}:</strong>
                        {suggested_name.names?.map((name) => {
                          return (
                            <span key={name} className="bg-[#F3F3F3] rounded p-1 m-1">{name}</span>
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
          <SuggestionForm id={params.id} states={states} />
        </div>

      </main>
      <Footer />
    </>
  );
}