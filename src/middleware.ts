import { APP_ROUTES } from "@/constants/app-router";
import { AuthService } from "@/services/AuthService";
import { NextRequest, NextResponse } from "next/server";


export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

export default async function auth(req: NextRequest) {
  const pathname = req.nextUrl.pathname
  
  console.log(APP_ROUTES.public.includes(pathname))

  if(APP_ROUTES.public.includes(pathname)) {
    return NextResponse.next()
  }

  const session = await AuthService.session()

  if(!session) {
    return NextResponse.redirect(new URL('/pages/login', req.url))
  }

  return NextResponse.next()
}