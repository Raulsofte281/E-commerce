"use client"

import { Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuantitySelectorProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        size="icon"
        onClick={onDecrease}
        disabled={quantity <= 1}
        className="h-10 w-10 bg-transparent"
      >
        <Minus className="h-4 w-4" />
        <span className="sr-only">Diminuir quantidade</span>
      </Button>
      <span className="w-12 text-center text-lg font-medium">{quantity}</span>
      <Button
        variant="outline"
        size="icon"
        onClick={onIncrease}
        className="h-10 w-10 bg-transparent"
      >
        <Plus className="h-4 w-4" />
        <span className="sr-only">Aumentar quantidade</span>
      </Button>
    </div>
  )
}
