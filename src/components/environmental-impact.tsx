import { LeafyGreen, Droplets, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

const impacts = [
  {
    icon: LeafyGreen,
    label: "1,000+ Trees Planted",
    description: "Contributing to reforestation efforts",
  },
  {
    icon: Droplets,
    label: "Water conservation",
    description: "90% reduced water usage",
  },
  {
    icon: Sun,
    label: "100% renewable energy facilities",
    description: "Solar powered operations",
  },
]

export function EnvironmentalImpact() {
  return (
    <section className="py-16">
      <div className=" px-4 md:px-6 sm:mx-0 md:mx-0 lg:mx-24 xl:mx-32 2xl:mx-40">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Environmental Impact</h2>
            <div className="space-y-4">
              {impacts.map((impact, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <impact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{impact.label}</div>
                    <div className="text-sm text-muted-foreground">{impact.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-6">
              Learn More About Our Impact
            </Button>
          </div>
          <div className="relative aspect-square lg:aspect-auto lg:h-[400px] bg-muted rounded-lg overflow-hidden">
            {/* Add environmental impact image here */}
          </div>
        </div>
      </div>
    </section>
  )
}

