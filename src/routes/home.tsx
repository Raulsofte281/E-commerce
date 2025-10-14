import { Link } from "react-router-dom";
import { Header } from "./header";
import banner from '../assets/banner.svg'

export function Home(){
    return (
        <>
        <div className="w-full bg-[#FFFFFF]">
            <Header/>
            <div className="my-6 w-full">
                <img src={banner} className="w-full"/>
            </div>
        </div>
        </>
    )
}