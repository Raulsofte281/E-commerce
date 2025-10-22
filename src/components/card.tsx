import { useState } from "react";



export function Card({image, novo, off}: {image: string, novo?: boolean, off?: number}) {
    return(
      <>
      <div>
        <img src={image} className=""/>      
        {novo &&
         <div className=" bg-black p-2 rounded-md text-white ont-semibold">New</div>
         }  
      </div>
      </>  
    );
}