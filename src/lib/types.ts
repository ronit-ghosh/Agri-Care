export type ProductSize = {
  size: "500ml" | "1L"
  price: number
}

export type Product = {
  id: string
  name: string
  description: string
  category: "boosting-agent" | "pest-repellant" | "combo"
  image: string
  rating: number
  sizes: ProductSize[]
}

export type CartItem = {
  productId: string
  name: string
  size: string
  price: number
  quantity: number
  image: string
}

