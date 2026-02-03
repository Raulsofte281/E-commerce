"use client"

import { useState } from "react"
import { Star, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { QuantitySelector } from "@/components/quantity-selector"
import { cn } from "@/lib/utils"

interface ProductDetailsProps {
  onQuantityChange: (quantity: number) => void
}

const colors = [
  { name: "Preto", value: "#1a1a1a" },
  { name: "Branco", value: "#f5f5f5" },
  { name: "Azul Marinho", value: "#1e3a5f" },
]

export function ProductDetails({ onQuantityChange }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const handleIncrease = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    onQuantityChange(newQuantity)
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      onQuantityChange(newQuantity)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">Novo</Badge>
          <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/20">
            -15% OFF
          </Badge>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-balance">
          Headphones Premium Wireless
        </h1>
        <p className="mt-2 text-muted-foreground">
          Fones de ouvido sem fio com cancelamento de ruído ativo
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < 4 ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
              )}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">4.8 (128 avaliações)</span>
      </div>

      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold">R$ 849,90</span>
        <span className="text-lg text-muted-foreground line-through">R$ 999,90</span>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-medium">Cor</label>
        <div className="flex gap-3">
          {colors.map((color, index) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(index)}
              className={cn(
                "h-10 w-10 rounded-full border-2 transition-all",
                selectedColor === index
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border hover:border-muted-foreground/50"
              )}
              style={{ backgroundColor: color.value }}
              title={color.name}
            >
              <span className="sr-only">{color.name}</span>
            </button>
          ))}
        </div>
        <span className="text-sm text-muted-foreground">{colors[selectedColor].name}</span>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-medium">Quantidade</label>
        <QuantitySelector
          quantity={quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      </div>

      <div className="flex gap-3">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsFavorite(!isFavorite)}
          className="h-12 w-12"
        >
          <Heart
            className={cn(
              "h-5 w-5 transition-colors",
              isFavorite && "fill-red-500 text-red-500"
            )}
          />
          <span className="sr-only">Adicionar aos favoritos</span>
        </Button>
        <Button variant="outline" size="icon" className="h-12 w-12 bg-transparent">
          <Share2 className="h-5 w-5" />
          <span className="sr-only">Compartilhar</span>
        </Button>
      </div>

      <div className="rounded-lg bg-muted/50 p-4">
        <h4 className="font-medium">Características</h4>
        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
          <li>• Cancelamento de ruído ativo (ANC)</li>
          <li>• Bateria de 30 horas</li>
          <li>• Bluetooth 5.3</li>
          <li>• Drivers de 40mm</li>
          <li>• Conforto para uso prolongado</li>
        </ul>
      </div>
    </div>
  )
}
