"use client"

import { ShoppingCart, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface OrderSummaryProps {
  subtotal: number
  shipping: number
  quantity: number
}

export function OrderSummary({ subtotal, shipping, quantity }: OrderSummaryProps) {
  const total = subtotal + shipping

  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="text-lg font-semibold">Resumo do Pedido</h3>
      
      <div className="mt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal ({quantity} {quantity === 1 ? 'item' : 'itens'})</span>
          <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Frete</span>
          <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
            {shipping === 0 ? "Grátis" : `R$ ${shipping.toFixed(2).replace('.', ',')}`}
          </span>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>R$ {total.toFixed(2).replace('.', ',')}</span>
      </div>

      <Button className="mt-6 w-full gap-2 hover:bg-green-400 border" size="lg">
        <ShoppingCart className="h-5 w-5" />
        Finalizar Compra
      </Button>

      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Shield className="h-4 w-4 flex-shrink-0" />
          <span>Compra 100% segura</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Truck className="h-4 w-4 flex-shrink-0" />
          <span>Entrega em até 7 dias úteis</span>
        </div>
      </div>
    </div>
  )
}
