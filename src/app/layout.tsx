import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/components/cart-provider"
import { Header } from "@/components/header"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AgriCare - Eco-Friendly Agricultural Solutions",
  description: "Discover our premium range of agricultural products that protect your crops naturally",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CartProvider>
            <Header />
            {children}
            <Toaster />
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

