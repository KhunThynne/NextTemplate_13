

import type { Metadata } from "next";

import "./globals.css";




export const metadata: Metadata = {
  title: "Next",
  description: "Team 13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">

      <link rel="icon" href="/favicon.ico" sizes="any" />
      {children}

      {/* <Footer /> */}

    </html>
  );
}
