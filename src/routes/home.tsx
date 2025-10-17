import { Link } from "react-router-dom";
import { Header } from "./header";
import { ChevronRight } from "lucide-react";
import { Settings2 } from "lucide-react";

/*Imagens */
import banner from '../assets/banner.svg'
import { Progress } from "@/components/ui/progress";

export function Home(){
    return (
        <>
        <div className="w-full bg-[#FFFFFF]">
            <Header/>  
            {/* Banner */}
            <div className="my-3 flex flex-col justify-center items-center w-full h-[392px] bg-cover bg-[url(@/assets/banner.svg)] font-[Poppins]">
                <ul className="flex justify-center gap-3 text-[#707577] font-medium font-[Inter] cursor-pointer text-xs">
                    <li className="hover:text-black flex items-center gap-1">Home<ChevronRight className="text-[#605F5F] size-3"/> </li>
                    <li className="hover:text-black">Shop</li>
                </ul>
             <h1 className="font-medium text-[54px]">Shop Page</h1>
             <p className="font-normal text-[18px] leading-[30px] font-[Inter]">Let's design the place you always imagined.</p>
            </div>
            
            <div className="font-[Inter] mt-10">
                <div className="flex gap-2 items-center">
                    <Settings2 className="w-5"/>
                    <h1 className="font-semibold text-xl">Filter</h1>
                </div>
                <div className="flex items-center">
                    <div className="text-[#807E7E] font-semibold text-[14px] flex flex-col gap-y-3 ">
                        <h1 className="text-[#121212] font-semibold text-base mt-8">CATEGORIES</h1>
                        <p className="hover:text-black hover:underline cursor-pointer">All Rooms</p>
                        <p className="hover:text-black hover:underline cursor-pointer">Living Room</p>
                        <p className="hover:text-black hover:underline cursor-pointer">Bedroom</p>
                        <p className="hover:text-black hover:underline cursor-pointer">Kitchen</p>
                        <p className="hover:text-black hover:underline cursor-pointer">Bathroom</p>
                        <p className="hover:text-black hover:underline cursor-pointer">Dinning</p>
                        <p className="hover:text-black hover:underline cursor-pointer">Outdoor</p>
                    </div>
                    <div className="w-[270px]">
                        <Progress className="bg-[#EAEAEA] rotate-90" indicatorClassName="bg-[#6C7275] rounded-full" value={75}/>
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}