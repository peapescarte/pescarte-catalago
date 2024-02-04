import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FishIcon, Inbox, MapPinned } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default function DashboardPage() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link href="admin/pages/fish">
            <Card className="hover:text-[#0064C8] cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Peixes
                </CardTitle>
                <FishIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1200</div>
                <p className="text-xs text-muted-foreground">
                  peixes cadastrados
                </p>
              </CardContent>
            </Card >
           </Link>
            <Link href="admin/pages/communities">
            <Card className="hover:text-[#0064C8] cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Comunidades
                </CardTitle>
                <MapPinned className="h-4 w-4 text-muted-foreground"/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">350</div>
                <p className="text-xs text-muted-foreground">
                  comunidades cadastradas
                </p>
              </CardContent>
            </Card>
            </Link>
            <Link href="admin/pages/suggestions">
            <Card className="hover:text-[#0064C8] cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Nomes Sugeridos
                </CardTitle>
                <Inbox className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">534</div>
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