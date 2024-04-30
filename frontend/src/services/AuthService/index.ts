"use server"
import * as jose from 'jose';
import { cookies } from 'next/headers';

export async function openSessionToken(token: string) {
  const secret = new TextEncoder().encode(process.env.AUTH_SECRET || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
  const { payload } = await jose.jwtVerify(token, secret);

  return payload;
}

export async function createSessionToken(payload = {}) {
  const secret = new TextEncoder().encode(process.env.AUTH_SECRET || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
  const session = await new jose.SignJWT(payload)
    .setProtectedHeader({
      alg: 'HS256',
    })
    .setExpirationTime('1d')
    .sign(secret);
  const { exp } = await openSessionToken(session);

  cookies().set('session', session, {
    expires: (exp as number) * 1000,
    path: '/',
    httpOnly: true,
  });
}

export async function isSessionValid() {
  const sessionCookie = cookies().get('session');

  if (sessionCookie) {
    const { value } = sessionCookie;
    const { exp } = await openSessionToken(value);
    const currentDate = new Date().getTime();
    return (exp as number) * 1000 > currentDate;
  }

  return false;
}

export async function destroySession() {
  cookies().delete('session');
}