import { useFish } from "@/hooks/useFish";
import { DataTable } from "./new/tables/data-table";
import { columns } from "./new/tables/columns";
import { useCommunity } from "@/hooks/useCommunity";

export default function Communities() {
  const { communities } = useCommunity();

  return (
    <DataTable columns={columns} data={communities} />
  )
}