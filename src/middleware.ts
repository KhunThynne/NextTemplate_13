import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'th'],

  // Used when no locale matches
  defaultLocale: 'en'
});
export const config = {
  matcher: [
    '/',
    '/about:path*',
    '/example/:path*',
    '/(th|en)/:path*',
    
  ]
};


