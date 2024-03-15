

import type { Metadata } from "next";

import "./globals.css";



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

  const messages = useMessages()
  return (
    <html lang="en">

      <link rel="icon" href="/favicon.ico" sizes="any" />
      <NextIntlClientProvider messages={messages} locale={locale}>

        {children}
      </NextIntlClientProvider>
      {/* <Footer /> */}

    </html>
  );
}
