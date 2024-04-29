"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SuggestedNameOut } from "@/models/CommonName"
import { FishOut } from "@/models/Fish"
import { GearOut } from "@/models/Gear"
import { HabitatOut } from "@/models/Habitat"
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import { LuArrowUpDown } from "react-icons/lu"
import fishExample from "@/assets/examples/peixe.png";

export const columns: ColumnDef<FishOut>[] = [
  {
    accessorKey: "image_data",
    header: () => <div className="text-white font-medium whitespace-nowrap">Imagem</div>,
    cell: ({ row }) => {
      const image_data = row.getValue("image_data") || fishExample
      
      return (
        <Image className="m-0 rounded" src={image_data} alt="" height={40} width={60}/>
      )
    }
  },
  {
    accessorKey: "scientific_name",
    header: ({ column }) => {
      return (
        <Button
          className="text-white hover:text-[#0064C8]"
          variant="ghost"
          size="sm"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome Científico
          <LuArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const scientific_name: string = row.getValue("scientific_name")

      return (
        <p className="ml-2 font-medium">{scientific_name}</p>
      )
    }
  },
  {
    accessorKey: "native",
    header: () => <div className="text-white font-medium whitespace-nowrap">Espécie</div>,
    cell: ({ row }) => {
      const native: boolean = row.getValue("native")

      if (native) {
        return (
          <Badge variant="approved">Nativa</Badge>
        )
      } else {
        return (
          <Badge variant="pending">Invasora</Badge>
        )
      }
    },
  },
  {
    accessorKey: "gears",
    header: () => <div className="text-white font-medium whitespace-nowrap">Captura</div>,
    cell: ({ row }) => {
      const gears: GearOut[] = row.getValue("gears")

      const gearsRender: JSX.Element[] = []

      gears.forEach(gear => {
        gearsRender.push(
          <Badge key={gear.id} className="ml-1 bg-[#F3F3F3] font-normal text-black hover:text-black" variant="default">{gear.name}</Badge>
        )
      });

      return gearsRender
    },
  },
  {
    accessorKey: "habitats",
    header: () => <div className="text-white font-medium whitespace-nowrap">Habitat</div>,
    cell: ({ row }) => {
      const habitats: HabitatOut[] = row.getValue("habitats")

      const gearsRender: JSX.Element[] = []

      habitats.forEach(habitat => {
        gearsRender.push(
          <Badge key={habitat.id} className="ml-1 bg-[#F3F3F3] font-normal text-black hover:text-black" variant="default">{habitat.name}</Badge>
        )
      });

      return gearsRender
    },
  },
  {
    accessorKey: "suggested_names",
    header: () => <div className="text-white font-medium whitespace-nowrap">Nomes Populares</div>,
    cell: ({ row }) => {
      const suggested_names: SuggestedNameOut[] = row.getValue("suggested_names")

      const namesRender: JSX.Element[] = []

      suggested_names.forEach(suggested_name => {
        const names: string[] = suggested_name.names

        names.forEach(name => {
            namesRender.push(
              <Badge key={name} className="ml-1 bg-[#F3F3F3] font-normal text-black hover:text-black" variant="default">{name}</Badge>
            )
        })
      });

      return namesRender
    },
  },
]