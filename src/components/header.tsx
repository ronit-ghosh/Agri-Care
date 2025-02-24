"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, ShoppingCart, User } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { useCart } from "./cart-provider"

export const navItems = [
  { name: "Pesticides", href: "#" },
  { name: "Fertilizers", href: "#" },
  { name: "Seeds", href: "#" },
  { name: "Tools", href: "#" },
  { name: "Equipment", href: "#" },
  { name: "Organic", href: "#" },
]

export function Header() {
  const { items } = useCart()
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-10 flex h-16 items-center gap-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
          <span className="text-primary">Agri</span>Care
        </Link>

        <div className="flex-1 md:flex md:items-center md:gap-4">
          <div className="relative max-w-md">
            <Input type="search" placeholder="Search products..." className="w-full md:w-[300px] pl-3 pr-8" />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Wishlist</span>
          </Button>
          <Link href='/cart'>
            <Button size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                {items.length}
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}