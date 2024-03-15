import createMiddleware from 'next-intl/middleware';
import { cookies } from 'next/headers'
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'th'],

  // Used when no locale matches
  defaultLocale: 'en'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/about:path*', '/example/:path*', '/(th|en)/:path*']
};