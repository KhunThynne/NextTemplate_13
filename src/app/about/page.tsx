import Image from "next/image";
import Arm from '../../../public/Arm.jpg'
import Poomz from '../../../public/Poomz.jpg'
import Thynne from '../../../public/Thynne.jpg'
export default function About() {
    return (<>
        Thirtteen

        <div className="flex gap-5">
            <Image className="w-[200px]" src={Arm}
                // Make the image display full width
                alt="arm" />

            <Image className="w-[200px]" src={Poomz} alt="poom" />
            <Image className="w-[200px]" src={Thynne} alt="thynne" /></div>
    </>



    );
}
