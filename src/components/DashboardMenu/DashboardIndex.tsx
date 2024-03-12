import Link from "next/link";
import './dashboard.css'
import { useContext, useState } from "react";
import { RootApp } from "../MainContext/MainContext";

import Image from 'next/image'
import { AiOutlineClose } from "react-icons/ai";
import { SlClose } from "react-icons/sl";
import { RiCloseCircleFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
export default function DashboardMenu() {
    const { isDashboard, setDashboard, isTheme } = useContext(RootApp)
    const pathname = usePathname();
    const Active = (path: string) => {
        return ` link ${pathname === path ? 'active' : ''} `
    }
    return (
        <>
            <div className="shadow">
                <div className={`${isDashboard && 'bg-[#141414] w-screen h-screen  fixed top-0 opacity-50 lg:hidden'}`} onClick={() => { setDashboard(false) }} />
           
                <ul className={`flex flex-col justify-between SideMenu   ${isTheme === 'light' ? 'bg-MenuDashboard-light' : 'bg-MenuDashboard-dark'}  w-[80%] md:w-[50%] lg:w-[255px] ${isDashboard ? 'open ' : 'close'}`}>
                    <div >
                        <li className="text-end px-10">
                            <button className="close" onClick={() => { setDashboard(false) }}><RiCloseCircleFill size={22} /></button>
                        </li>
                        <div className="pt-16 flex flex-col gap-5">
                            <li className={Active('/')}>
                                <Link href="/">Home</Link>
                            </li>
                            <li className={Active('/about')}>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li className={Active('/test')}>
                                <Link href="/blog/hello-world">Test System</Link>
                            </li>
                        </div>
                    </div>
             
                    <li className="flex justify-center">
                        
                        <Image

                            className=""
                            src={`/thirteen${isTheme}.svg`}
                            width={150}
                            height={150}
                            alt="Logo "
                        />
                    </li>
                </ul>

            </div>
        </>
    );
}
