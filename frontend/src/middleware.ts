import { NextRequest, NextResponse } from 'next/server';
import { isSessionValid } from './services/AuthService';



export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)', '/', '/login', '/send-common-name/:path*'],
};

export async function middleware(req: NextRequest) {

  const pathname = req.nextUrl.pathname;
  if(!pathname.startsWith("/dashboard")) {
    return NextResponse.next();
  }

  const session = await isSessionValid();
  if (!session) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}