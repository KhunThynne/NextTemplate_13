import { Card, CardBody, CardFooter, CardHead, Cards } from "@/components/Cards/CardIndex";




export default function ComponentsPage() {


    return (


            <div>
                <div className="font-bold">
                    Grid

                </div>
                <h1> Cards </h1>

                <Cards className={'mx-2 '} >
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
