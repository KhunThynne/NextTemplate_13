

import { cookies } from 'next/headers'
import { CiDark, CiLight } from 'react-icons/ci'

const setThemeCookie = async (theme: any) => {
    // Get cookie
    // const value = cookies().get('name')?.value

    // Set cookie


    theme && cookies().set('theme', theme)


    // Delete cookie
    // cookies().delete('name')
}




const SetThemeMenu = async () => {
    // Get cookie
    // const value = cookies().get('name')?.value

    // Set cookie

    // const cookieStore = cookies()
    // const theme = cookieStore.get('theme')
    // Delete cookie
    // cookies().delete('name')

    return <li className='flex items-center gap-1 lg:gap-5'>

        <CiLight size={20} className={`' text-[#eea60b] cursor-pointer`} onClick={() => { }} />

        <CiDark size={20} className={`text-[#802fcc] cursor-pointer`} onClick={() => { }} />
    </li >
        ;
}

export { setThemeCookie, SetThemeMenu }
