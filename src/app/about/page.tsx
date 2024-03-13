// import ImagePaypal from "./ImagePaypal";
import Loading from '@/components/Loading';
import dynamic from 'next/dynamic'
const Paypal = dynamic(() => import('./ImagePaypal'), {
    loading: () => <Loading />,
})
export default function About() {

    return (<>
        Thirtteen

        <div className="flex gap-5">

            <Paypal />


        </div>
    </>



    );
}
