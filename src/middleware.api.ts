import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('multcap-web: jwt');

  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
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
  matcher: ['/perfil', '/alterar-senha'],
};
