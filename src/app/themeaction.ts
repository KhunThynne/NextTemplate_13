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
    // Get cookie
    // const value = cookies().get('name')?.value

    // Set cookie
    const theme = cookies().get('theme')?.value

    // Delete cookie
    // cookies().delete('name')
    return theme
}

export { setThemeCookie, getTheme }
