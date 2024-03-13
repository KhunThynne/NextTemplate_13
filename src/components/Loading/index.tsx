import { Suspense } from "react";
import './Loading.css'
export default function Loading(props: any) {

    return <Suspense>
        <div className={`LoadLayout ${props.load ? "load" : "unload"}`} >
            <div className="flex justify-center h-screen items-center">
                Loading...
            </div>

        </div> </Suspense>
}