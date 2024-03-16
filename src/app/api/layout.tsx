

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "API",
    description: "API Team 13",
};



export default function layOutApi({ children }: { children: React.ReactNode }) {



    return (<html>

        <body>
            <div className="text-white flex justify-center my-20">
                {children}
            </div>
        </body>

    </html>)
}