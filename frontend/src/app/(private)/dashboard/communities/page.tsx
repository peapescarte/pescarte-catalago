import { DataTable } from "./new/tables/data-table";
import { columns } from "./new/tables/columns";
import { LocalityService } from "@/services";

export const dynamic = 'force-dynamic';
export default async function Communities() {
  const communities = await LocalityService.getAllCommunity()

  return (
    <DataTable columns={columns} data={communities} />
  )
}