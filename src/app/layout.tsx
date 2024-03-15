

import type { Metadata } from "next";

import "./globals.css";

import {unstable_setRequestLocale} from 'next-intl/server';

export const metadata: Metadata = {
  title: "Next",
  description: "Team 13",
};
import { NextIntlClientProvider, useMessages } from 'next-intl';
export default function RootLayout({
  children, params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  unstable_setRequestLocale(locale);
 
  const messages = useMessages()
  console.log(messages)
  return (
    <html lang={locale}>

      <link rel="icon" href="/favicon.ico" sizes="any" />
      <NextIntlClientProvider messages={messages} locale={locale}>

        {children}
      </NextIntlClientProvider>
      {/* <Footer /> */}

    </html>
  );
}
