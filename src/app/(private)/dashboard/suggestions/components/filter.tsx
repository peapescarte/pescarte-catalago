import { Button } from "@/components/ui/button"
import { Table } from "@tanstack/react-table"
import { RxCross2 } from "react-icons/rx"
import { DataTableFacetedFilter } from "./facetedFilter"
import { DataTableSearch } from "./search"
import { LuMail, LuMailCheck, LuMailX } from "react-icons/lu"

interface DataTableToolbarProps<TData> {
  table: Table<TData>

}

export function DataTableFilter<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  const statuses = [
    {
      value: "pending",
      label: "Pending",
      icon: LuMail,
    },
    {
      value: "approved",
      label: "Approved",
      icon: LuMailCheck,
    },
    {
      value: "discarded",
      label: "Discarded",
      icon: LuMailX,
    }
  ]
  

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <DataTableSearch table={table} />
        
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-12 px-2 lg:px-3"
          >
            Limpar
            <RxCross2 className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}