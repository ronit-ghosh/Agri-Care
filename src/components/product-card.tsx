"use client"

import Image from "next/image"
import { useState } from "react"
import { Heart, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/components/cart-provider"
import type { Product } from "@/lib/types"
import { useToast } from "@/hooks/use-toast"

export function ProductCard({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      size: selectedSize.size,
      price: selectedSize.price,
      quantity: 1,
      image: product.image,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedSize.size}) has been added to your cart.`,
    })
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square">
        <div className="absolute top-2 right-2 z-10 flex gap-2">
          <Button variant="secondary" size="icon" className="h-8 w-8">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="h-8 w-8">
            <Eye className="h-4 w-4" />
          </Button>
        </div>
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.description}</p>
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold">${selectedSize.price}</div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Select
              defaultValue={selectedSize.size}
              onValueChange={(value) => setSelectedSize(product.sizes.find((s) => s.size === value)!)}
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Size" />
              </SelectTrigger>
              <SelectContent>
                {product.sizes.map((size) => (
                  <SelectItem key={size.size} value={size.size}>
                    {size.size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="flex-1" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

