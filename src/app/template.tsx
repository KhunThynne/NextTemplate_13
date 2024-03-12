"use client"
import DashboardMenu from "@/components/DashboardMenu/DashboardIndex"
import Navigationbar from "@/components/Navigation/Navigationbar"
import { useEffect, useRef, useState } from "react"

import { RootApp } from '@/components/MainContext/MainContext'
import Footer from "@/components/Footer"

import { Inter } from "next/font/google";
import { cookies } from "next/headers"
import { setThemeCookie, getTheme } from "./themeaction"

const inter = Inter({ subsets: ["latin"] });


export default function Template({ children }: { children: React.ReactNode }) {
    const [isDashboard, setDashboard] = useState(false);
    const defaultTheme = useRef('light')
    const [isTheme, setTheme] = useState<any>('');
    useEffect(() => {
        getTheme().then(val => {

            setTheme(val ? val : defaultTheme.current);


        })
        // setThemeCookie(isTheme);
    }, [])
    useEffect(() => {

        setThemeCookie(isTheme);
        // setThemeCookie(isTheme);
    }, [isTheme])

    return <>
        <RootApp.Provider value={{ isDashboard, setDashboard, isTheme }}>
            <body className={`${inter.className} ${isDashboard && "lg:overflow-auto overflow-hidden"}`}>
                <Navigationbar setTheme={setTheme} />
                <main className="relative h-screen overflow-hidden bg-gray-300 ">
                    <DashboardMenu />
                    <div className={` contentslide ${isDashboard && "lg:ms-[255px] "} `}>
                        <div className="m-5 mt-16 h-screen  flex justify-center  ">
                            <div >
                                {/* <DashboardMenu />  */}
                                {children}
                            </div></div>
                    </div>
                </main>
                <Footer />
            </body>
        </RootApp.Provider>
    </>
}