import { useState } from "react";



export function Card({image, novo, off}: {image: string, novo?: boolean, off?: boolean}) {
    return(
      <>
        <div className="bg-cover w-[262px] h-[349px]" // aplicar tamanho
              style={{ 
                backgroundImage: `url(${image})`
              
              }}
/* absolute m-3  */
          >  <div className="flex flex-col gap-y-3 w-28 h-24 items-center justify-center">
              {novo &&
              <div className=" bg-white p-[1px] w-20 font-bold text-black text-lg rounded-[4px] flex justify-center items-center">New</div>
              } 
              {off &&
              <div className="font-bold text-white p-[1px] w-20 bg-[#38CB89] text-lg rounded-[4px] flex justify-center items-center">-50%</div>
              }
            </div>
          </div>
      </>  
    );
}