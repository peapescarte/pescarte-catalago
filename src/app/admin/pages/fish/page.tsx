import { useFish } from "@/hooks/useFish";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export default function Fish() {
  const { fish: data } = useFish();

  return (
    <DataTable columns={columns} data={data} />
  )
}