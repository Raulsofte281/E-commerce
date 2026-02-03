'use client';

import { useState } from "react"
import { cn } from "@/lib/utils"

export function ProductGallery({images}: {images?: string}) {

let image = [
  
            <img
              src={images}
              className="size-32 object-cover"
            />,
            
            <img
              src={images}
              className="size-32 object-cover"
            />
            ,
            <img
              src={images}
              className="size-32 object-cover"
            />,
            <img
              src={images}
              className="size-32 object-cover"
            />
]

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-card">
        <img
          src={images}
          alt="Produto"
          className="h-full w-full object-cover"
        />
      </div>
      {/* small image */}
      <div className="flex gap-3">
       {/*  <img src={images} className="size-32 object-cover"/>
            <img
              src={images}
              className="size-32 object-cover"
            /> */}
            {...image}
      </div>
    </div>
  )
}
