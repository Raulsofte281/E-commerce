import React from 'react'
import { Search } from 'lucide-react'
import { UserCircle } from 'lucide-react'
import { ShoppingBag } from 'lucide-react'

export function Header(){
    return (
        <>
        <div className='w-full flex justify-between'>
            <div>
                <h1 className='font-[Poppins] font-medium'>3Legant. </h1>
            </div>
            <div className='flex gap-[60px]'>
                <p>Home</p>
                <p>Shop</p>
                <p>Product</p>
                <p>Contact us</p>
            </div>
            <div className='flex gap-4'>
                <Search className='size-6'/>
                <UserCircle className='size-6'/>
                <ShoppingBag className='size-6'/>
            </div>

        </div>
        </>
    )
}