import { useState } from "react";
import { Modal } from "../Modal";
import { useSuggestionsNames } from "@/hooks";

type TableProps = {
  filter?: string
  search: string
}

export function SuggestionNamesTable({ filter = 'all', search = '' }: TableProps) {
  
  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = useState(0)
  const { suggestionNames } = useSuggestionsNames();

  const names = suggestionNames.filter((x) => x.scientific_name.toLowerCase().includes(search.toLocaleLowerCase()))

  function handleOpenModal(index: number) {
    setItem(index)
    setOpenModal(true);
  }

  return (
    <div className="space-y-4">
      <div className="overflow-auto rounded-lg shadow hidden md:block">
        <table className="w-full">
          <thead className="bg-[#0064C8] text-white font-medium">
            <tr>
              <td className="p-3 whitespace-nowrap">
                Nome
              </td>
              <td className="p-3 whitespace-nowrap">
                Estado
              </td>
              <td className="p-3 whitespace-nowrap">
                Município
              </td>
              <td className="p-3 whitespace-nowrap">
                Região
              </td>
              <td className="p-3 whitespace-nowrap">
                Nome popular enviado
              </td>
              <td className="p-3 whitespace-nowrap">
                Nome científico
              </td>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 ">


            {names.map((name, index) => {
              if (name.status === filter)
                return (

                  <tr key={index} onClick={() => handleOpenModal(index)} className="cursor-pointer text-sm text-gray-700 hover:text-white hover:bg-[#0064C8] hover:ease-in-out durantion-300">
                    {/* <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><input type="checkbox" className="h-4 w-4 text-[#0064C8] border-[#0064C8] rounded"/></td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><input type="checkbox" className="h-4 w-4 text-[#0064C8] border-[#0064C8] rounded"/></td> */}
                    <td className="p-3 whitespace-nowrap">{name.name}</td>
                    <td className="p-3 whitespace-nowrap">{name.state}</td>
                    <td className="p-3 whitespace-nowrap">{name.municipality}</td>
                    <td className="p-3 whitespace-nowrap">{name.region}</td>
                    <td className="p-3 whitespace-nowrap">{name.suggestionName}</td>
                    <td className="p-3 whitespace-nowrap">{name.scientific_name}</td>
                    {/* <td className="p-3 whitespace-nowrap">08:34</td> */}
                  </tr>


                )

              if (filter === 'all')
                return (

                  <tr key={index} onClick={() => handleOpenModal(index)} className="cursor-pointer text-sm text-gray-700 hover:text-white hover:bg-[#0064C8] hover:ease-in-out durantion-300">
                    {/* <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><input type="checkbox" className="h-4 w-4 text-[#0064C8] border-[#0064C8] rounded"/></td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><input type="checkbox" className="h-4 w-4 text-[#0064C8] border-[#0064C8] rounded"/></td> */}
                    <td className="p-3 whitespace-nowrap">{name.name}</td>
                    <td className="p-3 whitespace-nowrap">{name.state}</td>
                    <td className="p-3 whitespace-nowrap">{name.municipality}</td>
                    <td className="p-3 whitespace-nowrap">{name.region}</td>
                    <td className="p-3 whitespace-nowrap">{name.suggestionName}</td>
                    <td className="p-3 whitespace-nowrap">{name.scientific_name}</td>
                    {/* <td className="p-3 whitespace-nowrap">08:34</td> */}
                  </tr>

                )
            })}

          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 gap-4 md:hidden">

        {names.map((name, index) => {

          // if (name.status === filter)
          return (
            /* Card - Responsivo */
            <div key={index} onClick={() => setOpenModal(true)} className="group space-y-3 p-4 rounded-lg shadow cursor-pointer hover:text-white hover:bg-[#0064C8] hover:ease-in-out durantion-300">

              <div className="text-sm">
                <h2>Nome</h2>
                <p className="text-[#707070] group-hover:text-white">{name.name}</p>
              </div>

              <div className="flex items-center space-x-9 text-sm">
                <div>
                  <h2>Nome</h2>
                  <p className="text-[#707070] group-hover:text-white">{name.municipality}</p>
                </div>

                <div>
                  <h2>Estado</h2>
                  <p className="text-[#707070] group-hover:text-white">{name.state}</p>
                </div>
              </div>

              <div className="text-sm">
                <h2>Região</h2>
                <p className="text-[#707070] group-hover:text-white">{name.region}</p>
              </div>

              <div className="flex flex-col gap-2 text-sm sm:flex-row sm:space-x-2">
                <div>
                  <h2>Nome científico</h2>
                  <p className="text-[#707070] group-hover:text-white">{name.scientific_name}</p>
                </div>
                <div>
                  <h2>Nome popular enviado</h2>
                  <p className="text-[#707070] group-hover:text-white">{name.suggestionName}</p>
                </div>
              </div>

            </div>
          )
        })}


      </div>

      <Modal isOpen={openModal} item={item} closeModal={() => setOpenModal(false)} />
    </div>

  )
}