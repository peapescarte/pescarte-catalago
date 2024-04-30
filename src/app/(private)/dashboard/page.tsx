import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FishService, LocalityService, SuggestionNameService } from "@/services"
import { FishIcon, Inbox, MapPinned } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default async function DashboardPage() {
  const fish = await FishService.getAll()
  const community = await LocalityService.getAllCommunity()
  const suggested_names = await SuggestionNameService.getAll()

  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link href="admin/fish">
            <Card className="hover:text-[#0064C8] cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Peixes
                </CardTitle>
                <FishIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {
                  fish && fish.length > 0 ? (
                    <div className="text-2xl font-bold">{fish.length}</div>
                  ) : (
                    <div className="text-2xl font-bold">{0}</div>
                  )
                }
                <p className="text-xs text-muted-foreground">
                  peixes cadastrados
                </p>
              </CardContent>
            </Card >
           </Link>
            <Link href="admin/communities">
            <Card className="hover:text-[#0064C8] cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Comunidades
                </CardTitle>
                <MapPinned className="h-4 w-4 text-muted-foreground"/>
              </CardHeader>
              <CardContent>
              {
                  community && community.length > 0 ? (
                    <div className="text-2xl font-bold">{community.length}</div>
                  ) : (
                    <div className="text-2xl font-bold">{0}</div>
                  )
                }
                <p className="text-xs text-muted-foreground">
                  comunidades cadastradas
                </p>
              </CardContent>
            </Card>
            </Link>
            <Link href="admin/suggestions">
            <Card className="hover:text-[#0064C8] cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Nomes Sugeridos
                </CardTitle>
                <Inbox className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
              {
                  suggested_names && suggested_names.length > 0 ? (
                    <div className="text-2xl font-bold">{suggested_names.length}</div>
                  ) : (
                    <div className="text-2xl font-bold">{0}</div>
                  )
                }
                <p className="text-xs text-muted-foreground">
                  nomes sugeridos
                </p>
              </CardContent>
            </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}