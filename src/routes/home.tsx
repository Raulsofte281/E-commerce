import { Header } from "./header";
import { ChevronRight } from "lucide-react";
import { Settings2 } from "lucide-react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { ChevronDown } from "lucide-react";

import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";

/*Imagens */
import grid from '@/assets/grid.svg';
import layout4x4 from '@/assets/layout4x4.svg';
import layout2x2 from '@/assets/layout2x2.svg';
import layout2x2d from '@/assets/layout2x2d.svg';
import sofa from '@/assets/sofa.svg';

import { useState } from "react";
import { Card } from "@/components/card";

export function Home(){
    const [isChecked, setIsChecked] = useState(false);

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
            
            <div className="font-[Inter] mt-10 flex">
                    {/* Div para ajustar a seção de filtros e produtos */}
                <div>

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
                    <div className="text-[#807E7E] font-semibold text-[14px] flex flex-col gap-y-3 w-64">
                            <h1 className="text-[#121212] font-semibold text-base mt-8">PRICE</h1>
                            <label htmlFor="title"><p className="hover:text-black hover:underline cursor-pointer flex justify-between">All Price <Checkbox id="title" className="rounded-[4px] size-6 border-[#6C7275] border-2 text-white"/></p></label>
                            <label htmlFor="0"><p className="hover:text-black hover:underline cursor-pointer flex justify-between">$0.00 - 99.99 <Checkbox id="0" className="rounded-[4px] size-6 border-[#6C7275] border-2 text-white"/></p></label>
                            <label htmlFor="100"><p className="hover:text-black hover:underline cursor-pointer flex justify-between">$100.00 - 199.99 <Checkbox id="100" className="rounded-[4px] size-6 border-[#6C7275] border-2 text-white"/></p></label>
                            <label htmlFor="200"><p className="hover:text-black hover:underline cursor-pointer flex justify-between">$200.00 - 299.99 <Checkbox id="200" className="rounded-[4px] size-6 border-[#6C7275] border-2 text-white"/></p></label>
                            <label htmlFor="300"><p className="hover:text-black hover:underline cursor-pointer flex justify-between">$300.00 - 399.99 <Checkbox id="300" className="rounded-[4px] size-6 border-[#6C7275] border-2 text-white"/></p></label>
                            <label htmlFor="400+"><p className="hover:text-black hover:underline cursor-pointer flex justify-between">$400.00+ <Checkbox id="400+" className="rounded-[4px] size-6 border-[#6C7275] border-2 text-white"/></p></label>
                        </div>
                </div>

                <div className="font-[Inter] w-full">
                    {/* Seção de produtos */}
                    <div className="flex items-center">
                        <div>
                            <h1 className="font-semibold text-xl">Living Room</h1>
                        </div>
                        <div className="flex items-center justify-end ml-auto">
                                <p className="font-semibold text-base flex items-center justify-end gap-x-1 mx-10">Sort by<ChevronDown className="size-5"/></p>
                            <div className="flex gap-x-2 border">
                                <img src={grid} className="border-r p-3"/>
                                <img src={layout4x4} className="border-r p-3"/>
                                <img src={layout2x2} className="border-r p-3"/>
                                <img src={layout2x2d} className="p-3"/>
                            </div> 

                        </div>   
                    </div>
                    <Card image={sofa} novo off/>
                </div>
            </div>

        </div>
        </>
    )
}