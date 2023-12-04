"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { LuArrowUpDown } from "react-icons/lu"


export type SuggestedNames = {
  id: string
  name: string //nome da pessoa que enviou a sugestão
  fish_id: string,
  scientific_name: string
  state: string,
  municipality: string,
  community: string,
  suggestedName: string,
  status: "pending" | "approved" | "discarded"
}

export const columns: ColumnDef<SuggestedNames> [] = [
  // {
  //   accessorKey: "name",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         className="text-white hover:text-[#0064C8]"
  //         variant="ghost"
  //         size="sm"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Nome
  //         <LuArrowUpDown className="ml-2 h-4 w-4" />
  //       </Button>
  //     )
  //   },
  // },
  {
    accessorKey: "scientific_name",
    header: () => <div className="text-white font-medium whitespace-nowrap">Nome Científico</div>,
  },
  {
    accessorKey: "municipality",
    header: () => <div className="text-white font-medium whitespace-nowrap">Município</div>,
  },
  {
    accessorKey: "state",
    header: () => <div className="text-white font-medium whitespace-nowrap">Estado</div>,
  },
  {
    accessorKey: "community",
    header: () => <div className="text-white font-medium whitespace-nowrap">Comunidade</div>,
  },
  {
    accessorKey: "suggestedName",
    header: () => <div className="text-white font-medium whitespace-nowrap">Nome Sugerido</div>,
  },
  {
    accessorKey: "status",
    header: () => <div className="text-white font-medium whitespace-nowrap">Status</div>,
    cell: ({ row }) => { 
      const status = row.getValue("status")

      if(status === "pending")
        return (
        <Badge variant="pending" >{status}</Badge>
      )

      if(status === "approved")
        return (
          <Badge variant="approved">{status}</Badge>
        )

      if(status === "discarded")
        return (
          <Badge variant="discarded" className="text-white font-medium whitespace-nowrap">{status}</Badge>
        )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
]