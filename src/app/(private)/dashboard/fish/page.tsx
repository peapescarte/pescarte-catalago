import { useFish } from "@/hooks/useFish";
import { DataTable } from "./new/tables/data-table";
import { columns } from "./new/tables/columns";

export default function Fish() {
  const { fish: data } = useFish();

  return (
    <DataTable columns={columns} data={data} />
  )
}