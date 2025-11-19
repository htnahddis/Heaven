// api/auth/signout/route.ts
import { NextResponse } from 'next/server';

const COOKIE_NAME = 'token';

export async function POST() {
  const clearCookie = `${COOKIE_NAME}=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax`;
  return NextResponse.json({ message: 'Signed out' }, { status: 200, headers: { 'Set-Cookie': clearCookie } });
}
