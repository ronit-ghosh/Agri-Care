"use client"

import type React from "react"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

const benefits = ["Exclusive discounts and offers", "Latest farming techniques", "Expert agricultural advice"]

export function Newsletter() {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    })
    setEmail("")
  }

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className=" px-4 md:px-6 sm:mx-0 md:mx-0 lg:mx-24 xl:mx-32 2xl:mx-40">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Stay Updated with AgriCare</h2>
            <p className="text-primary-foreground/80 mb-6">
              Subscribe to our newsletter to receive the latest agricultural insights and exclusive offers.
            </p>
            <ul className="space-y-2">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background text-foreground rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Subscribe Now
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                By subscribing, you agree to receive marketing emails from AgriCare
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

