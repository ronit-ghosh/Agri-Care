import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "John Peterson",
    role: "Organic Farmer",
    content:
      "The all-natural pest control solution has been a game-changer for my crops. I've noticed healthier plants without harming beneficial insects.",
    avatar: "https://res.cloudinary.com/drynqkitl/image/upload/v1740401356/gray_rpdoj8.png",
  },
  {
    name: "Michael Chen",
    role: "Agricultural Consultant",
    content:
      "This is an excellent product to use when you want to boost crop yields. I've consistently observed my plants productivity.",
    avatar: "https://res.cloudinary.com/drynqkitl/image/upload/v1740401356/gray_rpdoj8.png",
  },
  {
    name: "Sarah Wilson",
    role: "Farm Owner",
    content:
      "I'm truly impressed with the service and product quality. The organic fertilizers have made a significant difference in our grain quality.",
    avatar: "https://res.cloudinary.com/drynqkitl/image/upload/v1740401356/gray_rpdoj8.png",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-muted/50">
      <div className=" px-4 md:px-6  sm:mx-0 md:mx-0 lg:mx-24 xl:mx-32 2xl:mx-40">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-3xl font-bold tracking-tighter">What Our Customers Say</h2>
          <p className="text-muted-foreground">Trusted by farmers and agricultural professionals worldwide</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="bg-background">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline">Read More Reviews</Button>
        </div>
      </div>
    </section>
  )
}

