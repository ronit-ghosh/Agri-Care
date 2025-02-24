import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Bug, Leaf, ShieldCheck, Sprout } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-background to-muted/50 py-20">
        <div className=" px-4 md:px-6  sm:mx-0 md:mx-0 lg:mx-24 xl:mx-32 2xl:mx-40">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Eco-Friendly Solutions for <span className="text-primary">Agricultural Success</span>
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Discover our premium range of pesticide repellants and agricultural products that protect your crops
                naturally
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">Shop Now</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="bg-primary/5 dark:bg-primary/10">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <Leaf className="h-12 w-12 text-primary" />
                  <h3 className="font-semibold">Organic</h3>
                </CardContent>
              </Card>
              <Card className="bg-blue-500/5 dark:bg-blue-500/10">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <Bug className="h-12 w-12 text-blue-500" />
                  <h3 className="font-semibold">Pest Control</h3>
                </CardContent>
              </Card>
              <Card className="bg-yellow-500/5 dark:bg-yellow-500/10">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <ShieldCheck className="h-12 w-12 text-yellow-500" />
                  <h3 className="font-semibold">Solutions</h3>
                </CardContent>
              </Card>
              <Card className="bg-red-500/5 dark:bg-red-500/10">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <Sprout className="h-12 w-12 text-red-500" />
                  <h3 className="font-semibold">Natural</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
  )
}
