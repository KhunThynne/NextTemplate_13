import Arm from '@/assets/Arm.jpg'
import Poomz from '@/assets/Poomz.jpg'
import Thynne from '@/assets/Thynne.jpg'
import Image from 'next/image'

export default function Paypal() {

    return <>
        <div className='flex gap-4'>
            <Image src={Arm} className="lg:w-[250px] w-[20vw]" alt='Arm' />
            <Image src={Poomz} className="lg:w-[250px] w-[20vw]" alt='Poomz' />
            <Image src={Thynne} className="lg:w-[250px] w-[20vw]" alt='Thynne' /></div>
    </>
}