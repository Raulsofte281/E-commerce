import { useState } from "react";
import { StarIcon } from "lucide-react";
import { Button } from "./ui/button";


export function Card({image, novo, off, name, price, price2}: {image: string, novo?: boolean, off?: boolean, name?: string, price?: string, price2?: string}) {

    const [onhover, setOnhover] = useState(false);
  
    return(
      <>
    <div>

        <div className="bg-cover w-[262px] h-[349px] transition-all duration-700"
              style={{ 
                backgroundImage: `url(${image})`
              
              }} onMouseEnter={() => setOnhover(true)}
              onMouseLeave={() => setOnhover(false)}

          >  <div className="flex flex-col gap-y-3 w-28 h-24 items-center justify-center">
              {novo &&
              <div className=" bg-white p-[1px] w-20 font-bold text-black text-lg rounded-[4px] flex justify-center items-center">New</div>
              } 
              {off &&
              <div className="font-bold text-white p-[1px] w-20 bg-[#38CB89] text-lg rounded-[4px] flex justify-center items-center">-50%</div>
              }
            </div>
            {onhover &&
          <div className="mt-3 w-full flex justify-center items-center">
            <Button className="w-[200px] overflow-hidden h-10 bg-black text-white rounded-full font-medium hover:bg-white hover:text-black border border-black duration-700">Add to cart</Button>
          </div>
          }
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