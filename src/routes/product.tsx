'use client';

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductGallery } from "@/components/product-gallery"
import { ProductDetails } from "@/components/product-details"
import { OrderSummary } from "@/components/order-summary"
import poltron from '@/assets/Poltrona.svg'

const PRODUCT_PRICE = 849.9
const FREE_SHIPPING_THRESHOLD = 500

function Product() {
  const [quantity, setQuantity] = useState(1)

  const subtotal = PRODUCT_PRICE * quantity
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 29.9

  return (
    <div className="min-h-screen bg-background font-[Poppins]">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
          <span className="text-lg font-semibold">Loja Premium</span>
          <div className="w-20" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ProductGallery images={poltron} />
          </div>

          <div className="lg:col-span-4">
            <ProductDetails onQuantityChange={setQuantity} />
          </div>

          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <OrderSummary
                subtotal={subtotal}
                shipping={shipping}
                quantity={quantity}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Product
