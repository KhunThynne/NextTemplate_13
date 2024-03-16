

"use client"
export const dynamic = 'force-dynamic'
import Link from 'next/link'
import Logo from '@/assets/Logo.svg'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { getTheme } from '@/components/Navigation/themeaction'
import { useEffect, useState } from 'react'
export default function NotFound() {
    const url = usePathname();

    const [Theme, setTheme] = useState('');
    useEffect(() => {

        getTheme().then((val: any) => {
            setTheme(val)
        })

    }, [])
    return (
        <div className={`ErrorNotFount min-h-screen flex flex-col justify-center items-center text-white font-bold ${Theme}`} >
            <h2>Not Found  : <span className='font-normal'>{url}</span> </h2>
            <Image src={Logo} className='w-100 h-100 ' alt='logo' />

           
            <div>
                <Link href="/">Return Home</Link>


            </div>
        </div>
    )
}