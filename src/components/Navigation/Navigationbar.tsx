





import { useTranslations } from 'next-intl';


import Link from "next/link";
import { useContext, useEffect } from "react";
import { usePathname } from 'next/navigation'

import { RootApp } from "../MainContext/MainContext";
import './Navigationbar.css'
import { TiThMenu } from "react-icons/ti";
import { CiDark, CiLight } from "react-icons/ci";
import { getTheme, setThemeCookie } from "./themeaction";



export default function Navigationbar() {

    const t = useTranslations('Navigation');
  

    const { isDashboard, setDashboard, isTheme, setTheme } = useContext(RootApp);
    const pathname = usePathname();


    const Active = (path: string) => {
        return ` link ${pathname === path ? 'active' : ''} `
    }

    useEffect(() => {
        try {
            getTheme().then(val => {
                val && setTheme && setTheme(val)

            })
        } catch (error) {

        }



    }, [setTheme])

    const ThemeSelet = (theme: string) => {
        setTheme(theme)
        setThemeCookie(theme)
    }


    return (
        <>
            <div className={`Navigation ${isTheme} shadow`}>
                <nav className={`px-10   items-center   px-2 xl:px-40 py-5 NavigationRootMenu ${isDashboard && "lg:ms-[255px]"} `}>

                    <ul className="flex justify-between items-center ">
                        <div>
                            <li className={`unset xs:text-[6vw] text-[20px]   ${isDashboard ? 'hidden' : null}`}>
                                <TiThMenu className="cursor-pointer" onClick={() => {
                                    setDashboard(!isDashboard)
                                }} />
                            </li>
                        </div>
                        <div>

                            <li className='flex items-center gap-1 sm
                            :gap-5 xs:text-[6vw] text-[20px]'>

                                <CiLight className={`${isTheme === 'light' ? 'text-[#eea60b]' : null} cursor-pointer`} onClick={() => { ThemeSelet('light') }} />

                                <CiDark className={`${isTheme === 'dark' ? 'text-[#802fcc]' : null} cursor-pointer`} onClick={() => { ThemeSelet('dark') }} />
                            </li >

                        </div>
                        <div className="flex justify-center sm:gap-40 gap-5 xs:text-[6vw]" style={{ whiteSpace: "nowrap" }}>
                            <li className={Active('/')}>
                                <Link href="/"  > {t('Home')} </Link >
                            </li >

                            <li className={Active('/about')}>
                                <Link href="/about"  > {t('About')} 
                            
                                 </Link >

                            </li >

                        </div>


                    </ul >

                </nav > </div>
        </>
    );
}
