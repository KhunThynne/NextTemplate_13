
"use client"
import { Card, CardBody, CardFooter, CardHead, Cards } from "@/components/Cards/CardIndex";
import { useSearchParams } from "next/navigation";




export default function ComponentsPage({ params: { locale } }: { params?: any }) {


    return (


        <div className="w-[100%] md:w-[25vw]">
            <div className="font-bold ">
                Grid

            </div>
            <h1> Cards </h1>

            <Cards className={'px-5'} >
                <CardHead   >
                    <div className="py-5">Title</div>
                </CardHead>
                <CardBody>
                    Content
                </CardBody>

            </Cards>
            <h1 className="mt-5"> Card </h1>
            <Card >
                TEst
            </Card>
        </div>


    );
}
