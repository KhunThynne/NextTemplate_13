


import './globals.css'



import { ReactNode } from 'react';


type Props = {
    children: ReactNode;
}; import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Next",
    description: "Team 13",
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
    return < html lang="en" >

        <link rel="icon" href="/favicon.ico" sizes="any" />
        {children}
    </html >;
}


