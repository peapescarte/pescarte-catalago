"use client"


import { Button } from "@/components/ui/button"
import { CommunityOut } from "@/models/Community"
import { ColumnDef } from "@tanstack/react-table"
import { LuArrowUpDown } from "react-icons/lu"


export const columns: ColumnDef<CommunityOut>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          className="text-white hover:text-[#0064C8]"
          variant="ghost"
          size="sm"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Comunidade
          <LuArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const name: string = row.getValue("name")

      return (
        <p className="ml-2 font-medium">{name}</p>
      )
    }
  },
  {
    accessorKey: "uf",
    header: ({ column }) => {
      return (
        <Button
          className="text-white hover:text-[#0064C8]"
          variant="ghost"
          size="sm"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Estado
          <LuArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const uf: string = row.getValue("uf")

      return (
        <p className="ml-2 font-medium">{uf}</p>
      )
    }
  },
  {
    accessorKey: "municipality",
    header: ({ column }) => {
      return (
        <Button
          className="text-white hover:text-[#0064C8]"
          variant="ghost"
          size="sm"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Município
          <LuArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const municipality: string = row.getValue("municipality")

      return (
        <p className="ml-2 font-medium">{municipality}</p>
      )
    }
  },
]