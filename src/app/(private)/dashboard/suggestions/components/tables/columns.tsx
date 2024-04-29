"use client"

import { Badge } from "@/components/ui/badge"
import { SuggestedNameOutProps } from "@/models/SuggestedName"
import { ColumnDef } from "@tanstack/react-table"


export const columns: ColumnDef<SuggestedNameOutProps> [] = [
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
    accessorKey: "uf",
    header: () => <div className="text-white font-medium whitespace-nowrap">Estado</div>,
  },
  {
    accessorKey: "community",
    header: () => <div className="text-white font-medium whitespace-nowrap">Comunidade</div>,
  },
  {
    accessorKey: "suggested_name",
    header: () => <div className="text-white font-medium whitespace-nowrap">Nome Sugerido</div>,
  },
  {
    accessorKey: "status",
    header: () => <div className="text-white font-medium whitespace-nowrap">Status</div>,
    cell: ({ row }) => { 
      const status = row.getValue("status")

      if(status === "PENDING")
        return (
        <Badge variant="pending" >{status}</Badge>
      )

      if(status === "APPROVED")
        return (
          <Badge variant="approved">{status}</Badge>
        )

      if(status === "REJECTED")
        return (
          <Badge variant="discarded" className="text-white font-medium whitespace-nowrap">{status}</Badge>
        )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
]