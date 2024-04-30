import { SuggestionNameService } from "@/services";
import { columns } from "./components/tables/columns"
import { DataTable } from "./components/tables/data-table"

export const dynamic = 'force-dynamic';
export default async function Suggestions() {

  const suggestions = await SuggestionNameService.getAll()

  return (
    <DataTable columns={columns} data={suggestions} />
  )
}
