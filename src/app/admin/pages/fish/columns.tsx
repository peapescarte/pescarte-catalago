"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import { LuArrowUpDown } from "react-icons/lu"

type Name = {
  name: string;
  approve: boolean;
}

type CommonName = {
  region: string;
  names: Name[];
}

export type FishProps = {
  id: string;
  scientific_name: string;
  native: boolean;
  image: string;
  gears: string[];
  common_name: CommonName[];
}

export const columns: ColumnDef<FishProps>[] = [
  {
    accessorKey: "image",
    header: () => <div className="text-white font-medium whitespace-nowrap">Imagem</div>,
    cell: ({ row }) => {
      const image: string = row.getValue("image")

      return (
        <Image className="m-0 rounded" src={image} alt="" height={40} width={60}/>
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
      const gears: string[] = row.getValue("gears")

      const gearsRender: JSX.Element[] = []

      gears.forEach(gear => {
        gearsRender.push(
          <Badge className="ml-1 bg-[#F3F3F3] font-normal text-black hover:text-black" variant="default">{gear}</Badge>
        )
      });

      return gearsRender
    },
  },
  {
    accessorKey: "common_name",
    header: () => <div className="text-white font-medium whitespace-nowrap">Nomes Populares</div>,
    cell: ({ row }) => {
      const commonNames: CommonName[] = row.getValue("common_name")

      const namesRender: JSX.Element[] = []

      commonNames.forEach(commonName => {
        const names: Name[] = commonName.names

        names.forEach(name => {
          if(name.approve)
            namesRender.push(
              <Badge className="ml-1 bg-[#F3F3F3] font-normal text-black hover:text-black" variant="default">{name.name}</Badge>
            )
        })
      });

      return namesRender
    },
  },
]