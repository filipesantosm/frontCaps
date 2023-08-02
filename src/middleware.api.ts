import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getTokenFromCookies } from './utils/cookies';

export function middleware(request: NextRequest) {
  if (!getTokenFromCookies()) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Add the protected routes to this config matcher
export const config = {
  matcher: [
    '/adicionar-saldo',
    '/alterar-senha',
    '/escolher-titulo',
    '/extrato',
    '/finalizar-compra',
    '/finalizar-compra/:path*',
    '/meus-titulos',
    '/perfil',
  ],
};
