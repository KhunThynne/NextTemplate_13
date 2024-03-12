
"use client"
import Link from "next/link";
import { useContext } from "react";
import { usePathname, useRouter } from 'next/navigation'
import { RootApp } from "../MainContext/MainContext";
import './Navigationbar.css'
import { TiThMenu } from "react-icons/ti";
import { CiDark, CiLight } from "react-icons/ci";
export default function Navigationbar({ setTheme }: { setTheme?: any }) {
    const router = useRouter();
    const { isDashboard, setDashboard, isTheme } = useContext(RootApp);
    const pathname = usePathname();

    const Active = (path: string) => {
        return ` link ${pathname === path ? 'active' : ''} `
    }
    return (
        <>
            <div className={`Navigation ${isTheme}`}>
                <nav className={`px-10 shadow  items-center   px-2 xl:px-40 py-5 NavigationRootMenu ${isDashboard && "lg:ms-[255px]"} `}>

                    <ul className="flex justify-between items-center ">
                        <div>
                            <li className={`unset   ${isDashboard ? 'hidden' : null}`}>
                                <TiThMenu className="cursor-pointer" onClick={() => {
                                    setDashboard(!isDashboard)
                                }} size={20} />
                            </li>
                        </div>
                        <div>
                            <li className='flex items-center gap-1 lg:gap-5'>
                                <CiLight size={20} className={`${isTheme === 'light' ? 'text-[#eea60b]' : null} cursor-pointer`} onClick={() => { setTheme('light') }} />

                                <CiDark size={20} className={`${isTheme === 'dark' ? 'text-[#802fcc]' : null} cursor-pointer`} onClick={() => { setTheme('dark') }} />
                            </li > </div>
                        <div className="flex justify-center lg:gap-40 gap-10" >
                            <li className={Active('/')}>
                                <Link href="/"  > Home </Link >
                            </li >

                            <li className={Active('/about')}>
                                <div className="cursor-pointer" onClick={() => router.push('/about', { scroll: false })}>About Us</div>
                            </li >

                        </div>


                    </ul >

                </nav > </div>
        </>
    );
}
