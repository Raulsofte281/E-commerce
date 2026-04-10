import React from 'react'
import { Search } from 'lucide-react'
import { UserCircle } from 'lucide-react'
import { ShoppingBag } from 'lucide-react'

export function Header(){
    return (
        <>
        <div className='w-full flex justify-between'>
            <div>
                <h1 className='font-[Poppins] font-medium text-2xl'>3Legant. </h1>
            </div>
            <div className='flex gap-[60px] text-[#707577] cursor-pointer font-medium font-[Space Grotesk] text-base'>
                <p className='hover:text-black'>Home</p>
                <p className='hover:text-black'>Shop</p>
                <p className='hover:text-black'>Product</p>
                <p className='hover:text-black'>Contact us</p>
            </div>
            <div className='flex gap-5'>
                <Search className='size-7'/>
                <UserCircle className='size-7'/>
                <ShoppingBag className='size-7'/>
            </div>

        </div>
        </>
    )
}