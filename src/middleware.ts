import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'th'],

  // Used when no locale matches
  defaultLocale: 'en'
});

export const config = {

  matcher: ['/', '/about:path*', '/example/:path*', '/(th|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};