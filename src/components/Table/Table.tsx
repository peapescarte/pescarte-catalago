import { useState } from "react";
import { Modal } from "../Modal";
import { useNames } from "@/hooks";

type TableProps = {
  filter?: string
}

export function Table({ filter = 'all' }: TableProps) {
  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = useState(0)
  const { names } = useNames();

  function handleOpenModal(index: number) {
    setItem(index)
    setOpenModal(true);
  }


  return (
    <div className="space-y-2">
      <div className="overflow-auto rounded-lg shadow hidden md:block">
        <table className="w-full">
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
              <div key={index} onClick={() => setOpenModal(true)} className="space-y-3 p-4 rounded-lg shadow cursor-pointer hover:text-white hover:bg-[#0064C8] hover:ease-in-out durantion-300">

                <div className="text-sm">
                  {name.name}
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <div>{name.municipality}</div>
                  <div>{name.state}</div>
                </div>

                <div className="text-sm">{name.region}</div>

                <div className="flex flex-col gap-2 text-sm sm:flex-row sm:space-x-2">
                  <div>{name.scientific_name}</div>
                  <div>{name.suggestionName}</div>
                </div>

              </div>
            )


          if (filter === 'all')
            return (
              /* Card - Responsivo */
              <div key={index} onClick={() => setOpenModal(true)} className="space-y-3 p-4 rounded-lg shadow cursor-pointer hover:text-white hover:bg-[#0064C8] hover:ease-in-out durantion-300">

                <div className="text-sm">
                  {name.name}
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <div>{name.municipality}</div>
                  <div>{name.state}</div>
                </div>

                <div className="text-sm">{name.region}</div>

                <div className="flex flex-col gap-2 text-sm sm:flex-row sm:space-x-2">
                  <div>{name.scientific_name}</div>
                  <div>{name.suggestionName}</div>
                </div>

              </div>
            )
          })}


      </div>

      <Modal isOpen={openModal} item={item} closeModal={() => setOpenModal(false)} />
    </div>

  )
}