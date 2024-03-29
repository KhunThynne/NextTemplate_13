import Link from "next/link";
import './dashboard.css'
import { useContext, useEffect, useState } from "react";
import { RootApp } from "../MainContext/MainContext";

import Image from 'next/image'
import { BiSolidComponent } from "react-icons/bi";
import { RiCloseCircleFill } from "react-icons/ri";
import { redirect, usePathname, useRouter, useSearchParams } from "next/navigation";
import { BsTable } from "react-icons/bs";

export default function DashboardMenu() {
    const { isDashboard, setDashboard, isTheme } = useContext(RootApp)
    const pathname = usePathname();
    const rounter = useRouter();

    const pathA = pathname.split('/');

    const Active = (path: string) => {

        return ` link ${pathname === `/${pathA[1]}${path}` ? 'active' : ''} `
    }

    function switchLocale(locale: string) {
        // e.g. '/en/about' or '/fr/contact'
        pathA[1] = locale;
        const newPath = pathA.join('/');
        
        window.history.pushState(null, '', newPath)
        location.reload()
    }


    return (
        <>
            <div className="shadow ">

                <div style={{ zIndex: '8' }} className={`${isDashboard && 'bg-[#141414]  w-screen h-screen  fixed top-0 opacity-50 lg:hidden'}`} onClick={() => { setDashboard(false) }} />

                <ul className={`flex flex-col justify-between SideMenu   ${isTheme === 'light' ? 'bg-MenuDashboard-light' : 'bg-MenuDashboard-dark'}  w-[80%] md:w-[50%] lg:w-[255px] ${isDashboard ? 'open ' : 'close'}`}>
                    <div >
                        <li className="text-end px-10">
                            <button className="close" onClick={() => { setDashboard(false) }}><RiCloseCircleFill size={22} /></button>

                        </li>
                        <div className="pt-16 flex flex-col gap-5">
                            <li className={Active('')}>
                                <Link href="/">Home </Link>
                            </li>
                            <li className={Active('/about')}>
                                <Link href="/about">About Us</Link>
                            </li>



                            <li className={Active('/example/gridtable')}>

                                <Link className="cursor-pointer flex gap-3 items-center" href="/example/gridtable"  >


                                    <BsTable size={20} /> Grid table
                                </Link>

                            </li>

                            <li className={Active('/example/components')}>
                                <Link className="cursor-pointer flex gap-3 items-center" href="/example/components"  >
                                    <BiSolidComponent size={25} />
                                    Components</Link>
                            </li >


                        </div>
                    </div>

                    <li className="" >

                        <div className="flex gap-6 justify-center my-5 items-center">

                            <div className={`cursor-pointer p-1 ${pathA[1] === "th" ? "border" : null}`} onClick={() => { switchLocale('th') }}> TH </div> <div> || </div>


                            <div className={` cursor-pointer p-1 ${pathA[1] === "en" ? "border" : null}`} onClick={() => { switchLocale('en') }}> EN </div>
                        </div>
                        <div className="flex  justify-center">
                            {(isTheme && isTheme !== 'load') && <Image


                                src={`/thirteen${isTheme}.svg`}
                                width={150}
                                height={150}
                                alt="Logo "
                            />}
                        </div>
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