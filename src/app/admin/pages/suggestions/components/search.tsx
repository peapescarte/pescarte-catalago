
import { Input } from "@/components/ui/input"
import { Table } from "@tanstack/react-table"

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export function DataTableSearch<TData>({ table }: DataTablePaginationProps<TData>) {
  return (
    <div>
      <Input
        placeholder="Faça uma pesquisa..."
        value={(table.getColumn("scientific_name")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("scientific_name")?.setFilterValue(event.target.value)
        }
        className="h-12 w-[150px] lg:w-[250px] xl:w-[650px]"
      />
    </div>
  )
}