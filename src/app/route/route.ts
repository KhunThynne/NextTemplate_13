
'use server'

type Params = {
    theme: string
}

export async function GET(request: Request, context: { params: Params }) {

    console.log(context.params)
    return Response.json(context.params)
}