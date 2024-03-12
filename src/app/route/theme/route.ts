import { cookies } from 'next/headers'

export async function GET(request: Request) {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    console.log(token)
    return Response.json({  })
}