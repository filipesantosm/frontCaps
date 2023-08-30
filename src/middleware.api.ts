import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('multcap-web: jwt');

  if (!token) {
    const url = request.nextUrl.clone();

    const originalUrl = request.headers.get('Referer');
    const originalPathname = originalUrl?.split(`${url.origin}/`)[1] || '';

    url.pathname = originalPathname;
    url.searchParams.set('modal', 'login');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Add the protected routes to this config matcher

/* '/adicionar-saldo',
    '/alterar-senha',
    '/escolher-titulo',
    '/extrato',
    '/finalizar-compra',
    '/finalizar-compra/:path*',
    '/meus-titulos', */

export const config = {
  matcher: [
    '/perfil',
    '/perfil/:path*',
    '/alterar-senha',
    '/escolher-titulo',
    '/finalizar-compra',
    '/finalizar-compra/:path*',
    '/adicionar-saldo',
    '/extrato',
  ],
};
