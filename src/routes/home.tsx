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
import Poltrona from '@/assets/Poltrona.svg';
import abajur from '@/assets/abajur.svg';
// não usadas ainda
import cadeira from '@/assets/cadeira.svg';
import balcao from '@/assets/balcao.svg';
import lamp from '@/assets/lamp.svg';
import travesseiro from '@/assets/travesseiro.svg';
import cesta from '@/assets/cesta.svg';
import luminaria from '@/assets/luminaria.svg';

import { useState } from "react";
import { Card } from "@/components/card";
import { Button } from "@/components/ui/button";

export function Home(){
    const [Theme, setTheme] = useState(false);

    const handleClick = () => {
        setTheme(!Theme);
    }


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

                <div className="font-[Inter] w-full flex flex-col justify-center ">
                    {/* Seção de produtos */}
                    <div className="flex items-center">
                        <div>
                            <h1 className="font-semibold text-xl">Living Room</h1>
                        </div>
                        <div className="flex items-center justify-end ml-auto flex-wrap">
                                <p className="font-semibold text-base flex items-center justify-end gap-x-1 mx-10">Sort by<ChevronDown className="size-5"/></p>
                            <div className="flex gap-x-2 border">
                                <img src={grid} className="border-r p-3"/>
                                <img src={layout4x4} className="border-r p-3"/>
                                <img src={layout2x2} className="border-r p-3"/>
                                <img src={layout2x2d} className="p-3"/>
                            </div> 

                        </div>   
                    </div>
                    <div className="flex flex-wrap gap-[30.5px] mt-3">
                        <Card image={sofa} novo off name="Loveseat Sofa" price="$199.00" price2="$400.00"/>
                        <Card image={Poltrona} novo off name="Luxury Sofa" price="$299.00" price2="$500.00"/>
                        <Card image={abajur} novo off name="Table Lamp" price="$19.00"/>
                        <Card image={balcao} novo off name="White Drawer unit" price="$89.99"/>
                        <Card image={cadeira} novo off name="Black Tray table" price="$19.99"/>
                        <Card image={lamp} novo off name="Lamp" price="$39.00"/>
                        <Card image={travesseiro} novo off name="Light Beige Pillow" price="$3.99"/>
                        <Card image={luminaria} novo off name="Table Lamp" price="$39.99"/>
                        <Card image={cesta} novo off name="Bamboo Basket" price="$9.99"/>
                    </div>
                    <div className="flex flex-col justify-center items-center my-4 w-full">
                        <Button variant="default" size="default" className="w-[163px] hover:bg-black border border-black hover:text-white duration-700 rounded-full font-medium">Show more</Button>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}