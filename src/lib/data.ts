import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "1",
    name: "Organic Pest Control",
    description: "Natural solution for pest management",
    category: "pest-repellant",
    image: "https://res.cloudinary.com/drynqkitl/image/upload/v1740401356/gray_rpdoj8.png",
    rating: 4.8,
    sizes: [
      { size: "500ml", price: 29.99 },
      { size: "1L", price: 54.99 },
    ],
  },
  {
    id: "2",
    name: "Bio Fertilizer",
    description: "Enriched soil nutrients",
    category: "boosting-agent",
    image: "https://res.cloudinary.com/drynqkitl/image/upload/v1740401356/gray_rpdoj8.png",
    rating: 4.9,
    sizes: [
      { size: "500ml", price: 39.99 },
      { size: "1L", price: 69.99 },
    ],
  },
  {
    id: "3",
    name: "Growth Booster",
    description: "Enhanced plant growth formula",
    category: "boosting-agent",
    image: "https://res.cloudinary.com/drynqkitl/image/upload/v1740401356/gray_rpdoj8.png",
    rating: 4.7,
    sizes: [
      { size: "500ml", price: 24.99 },
      { size: "1L", price: 44.99 },
    ],
  },
  {
    id: "4",
    name: "Soil Treatment",
    description: "Complete soil care solution",
    category: "boosting-agent",
    image: "https://res.cloudinary.com/drynqkitl/image/upload/v1740401356/gray_rpdoj8.png",
    rating: 4.6,
    sizes: [
      { size: "500ml", price: 34.99 },
      { size: "1L", price: 59.99 },
    ],
  },
]

