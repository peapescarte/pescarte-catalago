import { DataTable } from "./new/tables/data-table";
import { columns } from "./new/tables/columns";
import { FishService } from "@/services";

export const dynamic = 'force-dynamic';
export default async function Fish() {
  const fish = await FishService.getAll()

  return (
    <DataTable columns={columns} data={fish} />
  )
}