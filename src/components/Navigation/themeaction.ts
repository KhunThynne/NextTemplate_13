'use server'

import { cookies } from 'next/headers'

const setThemeCookie = async (theme: any) => {
    // Get cookie
    // const value = cookies().get('name')?.value

    // Set cookie


    theme && cookies().set('theme', theme)


    // Delete cookie
    // cookies().delete('name')
}




const getTheme = async () => {
    try {


        const setdefault = 'light';


        const cookieStore = cookies()
        const theme = cookieStore.get('theme')

        if (!theme) {

            setThemeCookie(setdefault)
            return 'light';
        }
        return theme?.value;
    } catch (err) {
        return err
    }


}

export { setThemeCookie, getTheme }
