import { useState } from "react";
import { StarIcon } from "lucide-react";


export function Card({image, novo, off, name, price, price2}: {image: string, novo?: boolean, off?: boolean, name?: string, price?: string, price2?: string}) {
    return(
      <>
    <div>

        <div className="bg-cover w-[262px] h-[349px]"
              style={{ 
                backgroundImage: `url(${image})`
              
              }}

          >  <div className="flex flex-col gap-y-3 w-28 h-24 items-center justify-center">
              {novo &&
              <div className=" bg-white p-[1px] w-20 font-bold text-black text-lg rounded-[4px] flex justify-center items-center">New</div>
              } 
              {off &&
              <div className="font-bold text-white p-[1px] w-20 bg-[#38CB89] text-lg rounded-[4px] flex justify-center items-center">-50%</div>
              }
            </div>
          </div>
        <div className="flex mt-2 gap-1">
          <StarIcon className="fill-[#343839] text-[#343839] rounded size-4"/>
          <StarIcon className="fill-[#343839] text-[#343839] rounded size-4"/>
          <StarIcon className="fill-[#343839] text-[#343839] rounded size-4"/>
          <StarIcon className="fill-[#343839] text-[#343839] rounded size-4"/>
          <StarIcon className="fill-[#343839] text-[#343839] rounded size-4"/>
        </div>
        
          <h1 className="text-[#141718] font-semibold text-[Inter] text-base my-2">{name}</h1>
          <div className="flex gap-2 font-[Inter]">
            <p className="font-semibold text-sm">{price}</p>
            <p className="text-sm line-through text-[#6C7275] font-normal">{price2}</p>
          </div>
    </div>    
      </>  
    );
}