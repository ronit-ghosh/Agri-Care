import { Leaf, Package, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const promises = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "All our products are made with natural ingredients that are safe for your crops and the environment",
  },
  {
    icon: Package,
    title: "Sustainable Packaging",
    description: "We use recyclable and biodegradable packaging materials to minimize environmental impact",
  },
  {
    icon: Award,
    title: "Certified Organic",
    description: "Our products meet strict organic certification standards for quality and sustainability",
  },
]

export function EcoPromise() {
  return (
    <section className="py-16 bg-primary/5">
      <div className=" px-4 md:px-6 sm:mx-0 md:mx-0 lg:mx-24 xl:mx-32 2xl:mx-40">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-3xl font-bold tracking-tighter">Our Eco-Friendly Promise</h2>
          <p className="text-muted-foreground">Committed to sustainable agriculture and environmental protection</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {promises.map((promise, i) => (
            <Card key={i} className="bg-background">
              <CardContent className="p-6 text-center space-y-4">
                <promise.icon className="w-12 h-12 mx-auto text-primary" />
                <h3 className="font-semibold text-lg">{promise.title}</h3>
                <p className="text-muted-foreground">{promise.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

