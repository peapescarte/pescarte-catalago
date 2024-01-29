import { useFish } from "@/hooks/useFish";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useCommunity } from "@/hooks/useCommunity";

export default function Communities() {
  const { communities } = useCommunity();

  return (
    <DataTable columns={columns} data={communities} />
  )
}