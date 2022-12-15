import Button from "./Button";
import Image from "next/image";
import Imagem from '../assets/imagem.png'

export default function Main(){
    return(
        <div className="w-full  flex justify-center items-center	" >
            
            <div className="w-4/6 flex md:grid md:grid-cols-2 ">

                <div className="">

                    <h1 className=" mt-[2rem] mb-[2rem] text-textResumeSecondary text-3xl text-black">Plataforma de <span>players</span> para <span>players.</span></h1>
                    <p className="transition-all text-SECONDARY font-black hover:bg-SECONDARY hover:text-WHITE	hover:shadow-none hover:transition-all shadow-xl rounded border-WHITE py-1 px-5 text-justify">Facilitamos o encontro de novos duos, para uma melhor experiência nas partidas ranqueadas!</p>

                    <div>
                        <h2>Suba de elo e conheça novos players:</h2>
                        <p>Pedimos apenas o Username e Tagline!</p>
                        <Button url='/' title="encontra duos"></Button>
                    </div>
                    
                </div>

                <div className="">
                    <Image alt='' className="w-3/4 h-3/4" src={Imagem}></Image>
                </div>

                
            </div>
        </div>
    )
}