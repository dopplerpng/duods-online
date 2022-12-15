import Image from "next/image"
import DUODS from '../assets/DUODS.png'
import Button from "./Button"
export default function Nav(){
    return(
        <div className="flex w-screen h-[6rem] bg-SECONDARY justify-center 	">
            <div className="flex w-2/3 items-center justify-between">

                <div className="">
                    <Image alt="" src={DUODS} className='md:w-[auto] md:h-[auto] '></Image> 
                </div>
                 
    
                <div className="m-10 space-x-4">
                    <Button url='/' title="entrar"></Button>
                    <Button url='/' title="registrar"></Button>
                </div>

            </div>
            
        </div>
    )
}