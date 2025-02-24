import { Card, CardContent } from "@/components/ui/card"
import { Bug, Leaf, Sprout, PenToolIcon as Tool } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "Pesticides",
    description: "Natural pest control solutions for your crops",
    icon: Bug,
    color: "bg-green-500/5 dark:bg-green-500/10 hover:bg-green-500/10 dark:hover:bg-green-500/20",
    iconColor: "text-green-500",
  },
  {
    name: "Fertilizers",
    description: "Organic nutrients for healthy soil",
    icon: Leaf,
    color: "bg-blue-500/5 dark:bg-blue-500/10 hover:bg-blue-500/10 dark:hover:bg-blue-500/20",
    iconColor: "text-blue-500",
  },
  {
    name: "Seeds",
    description: "Premium quality seeds for better yield",
    icon: Sprout,
    color: "bg-yellow-500/5 dark:bg-yellow-500/10 hover:bg-yellow-500/10 dark:hover:bg-yellow-500/20",
    iconColor: "text-yellow-500",
  },
  {
    name: "Equipment",
    description: "Professional farming tools & equipment",
    icon: Tool,
    color: "bg-red-500/5 dark:bg-red-500/10 hover:bg-red-500/10 dark:hover:bg-red-500/20",
    iconColor: "text-red-500",
  },
]

export function FeaturedCategories() {
  return (
    <section className="py-16">
      <div className=" px-4 md:px-6">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">Featured Categories</h2>
          <p className="text-muted-foreground">Explore our wide range of agricultural solutions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href="#">
              <Card className={`${category.color} transition-colors duration-200`}>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <category.icon className={`h-12 w-12 ${category.iconColor}`} />
                  <h3 className="font-semibold">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

