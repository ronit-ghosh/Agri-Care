import { Truck, ShieldCheck, RotateCcw, HeadphonesIcon } from "lucide-react"

const features = [
  {
    name: "Free Delivery",
    description: "On orders over $100",
    icon: Truck,
  },
  {
    name: "Secure Payment",
    description: "100% secure checkout",
    icon: ShieldCheck,
  },
  {
    name: "Easy Returns",
    description: "30-day return policy",
    icon: RotateCcw,
  },
  {
    name: "24/7 Support",
    description: "Expert assistance",
    icon: HeadphonesIcon,
  },
]

export function Features() {
  return (
    <section className="py-10 bg-muted/50">
      <div className=" px-4 md:px-6  sm:mx-0 md:mx-0 lg:mx-24 xl:mx-32 2xl:mx-40">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center space-y-2">
              <feature.icon className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">{feature.name}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

