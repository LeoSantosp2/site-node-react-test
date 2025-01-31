import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  const tokenAuth = req.cookies.get('tokenAuth');

  if (!tokenAuth) {
    return NextResponse.redirect(new URL('/', req.url));
  }
}

export const config = {
  matcher: ['/inicial', '/alugar-livro', '/cadastrar-funcionario'],
};
