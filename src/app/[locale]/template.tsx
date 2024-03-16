"use client"
import DashboardMenu from "@/components/DashboardMenu/DashboardIndex"
import Navigationbar from "@/components/Navigation/Navigationbar"
import { Suspense, useEffect, useRef, useState } from "react"

import { RootApp } from '@/components/MainContext/MainContext'
import Footer from "@/components/Footer"

import { Inter } from "next/font/google";
import { useRouter } from "next/router"




const inter = Inter({ subsets: ["latin"] });


export default function Template({ children }: { children: React.ReactNode }) {

    const [isDashboard, setDashboard] = useState(false);

    const [isTheme, setTheme] = useState<any>('load');
 
    return (


        <RootApp.Provider value={{ isDashboard, setDashboard, isTheme, setTheme }}>

            <body className={`${isTheme} ${inter.className} ${isDashboard && "lg:overflow-auto overflow-hidden "}`}>




                <Navigationbar />
                <main className="relative min-h-screen overflow-hidden">
                    <DashboardMenu />
                    <div className={` contentslide ${isDashboard && "lg:ms-[255px] "} `}>
                        <div className="flex justify-center py-5">


                            {children}
                        </div>
                    </div>
                </main>
                <Footer />


            </body>

        </RootApp.Provider>
    )
}