import { columns } from "./components/tables/columns"
import { DataTable } from "./components/tables/data-table"
import { useSuggestedNames } from "@/hooks/useSuggestedNames";

// async function getData(): Promise<SuggestedNames[]> {
//   // Fetch data from your API here.
//   const { suggestionNames } = useSuggestedNames();

//   return suggestionNames
// }

export default function Suggestions() {
  //const data = await getData()  

  const { suggestionNames: data } = useSuggestedNames();

  return (
    <DataTable columns={columns} data={data} />
  )
}
