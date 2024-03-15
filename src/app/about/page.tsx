// import ImagePaypal from "./ImagePaypal";

'use client'

import dynamic from 'next/dynamic'
import test from 'node:test';
import { useEffect, useState } from 'react';
const Paypal = dynamic(() => import('./ImagePaypal'), {
    loading: () => <>Load...</>,
})
export default function About() {

    const [Load, setLoad] = useState<any>(false)

    return (<div>
        <div>
            Thirtteen

            <div className="flex gap-5 flex-col lg:flex-row">
                {<Paypal />}

            </div>
        </div>
    </div>



    );
}
