import Arm from '@/assets/Arm.jpg'
import Poomz from '@/assets/Poomz.jpg'
import Thynne from '@/assets/Thynne.jpg'
import Image from 'next/image'

export default function Paypal() {

    return <>

        <Image src={Arm} className="md:w-[250px] w-[50vw]" alt='Arm' />
        <Image src={Poomz} className="md:w-[250px] w-[50vw]" alt='Poomz' />
        <Image src={Thynne} className="md:w-[250px] w-[50vw]" alt='Thynne' /></>
}