import { Testimonials } from "@/components/testimonials"
import { EcoPromise } from "@/components/eco-promise"
import { EnvironmentalImpact } from "@/components/environmental-impact"
import { Newsletter } from "@/components/newsletter"
import Hero from "@/components/Hero"
import { Features } from "@/components/features"
import Product from "@/components/Product"

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Product />
      <Testimonials />
      <EcoPromise />
      <EnvironmentalImpact />
      <Newsletter />
    </main>
  )
}

