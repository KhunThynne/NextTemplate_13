import Link from "next/link";
import './dashboard.css'
import { useContext, useEffect, useState } from "react";
import { RootApp } from "../MainContext/MainContext";

import Image from 'next/image'

import { RiCloseCircleFill } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";

export default function DashboardMenu() {
    const { isDashboard, setDashboard, isTheme } = useContext(RootApp)
    const pathname = usePathname();
    const router = useRouter();
    const Active = (path: string) => {
        return ` link ${pathname === path ? 'active' : ''} `
    }

    return (
        <>
            <div className="shadow ">
                <div className={`${isDashboard && 'bg-[#141414]  w-screen h-screen  fixed top-0 opacity-50 lg:hidden'}`} onClick={() => { setDashboard(false) }} />

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
                            <li className={Active('/dashboard')}>
                                <div className="cursor-pointer" onClick={() => router.push('/dashboard', { scroll: false })}>Dashboard</div>
                            </li >
                        </div>
                    </div>

                    <li className="flex justify-center">

                        {(isTheme && isTheme !== 'load') && <Image


                            src={`/thirteen${isTheme}.svg`}
                            width={150}
                            height={150}
                            alt="Logo "
                        />}
                    </li>
                </ul>

            </div>
        </>
    );
}
/* 
 <div className="pt-16 flex flex-col gap-5">
                            <li className={Active(`${isTheme}/`)}>
                                <Link href={`${isTheme}/`}>Home</Link>
                            </li>
                            <li className={Active(`${isTheme}/about`)}>
                                <Link href={`${isTheme}/about`}>About Us</Link>
                            </li>
                            <li className={Active(`${isTheme}/test`)}>
                                <Link href={`${isTheme}/test`}>Test System</Link>
                            </li>
                        </div>*/