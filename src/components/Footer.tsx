"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react"
import { navItems } from "./header"

const quickLinks = navItems

const services = [
    "Terms & Conditions",
    "Privacy",
    "Return Policy",
]

export default function Footer() {

    return (
        <footer className="bg-muted/50 pt-16 pb-2 bg-gradient-to-b dark:from-[#0a0a0a] from-[#fff]">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Agri Care</h3>
                        <p className="text-muted-foreground mb-6">
                            Agricare offers eco-friendly pesticide repellents to protect crops and promote sustainable farming.
                        </p>
                        <div className="flex gap-4 items-center">
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            {/* <Link href="/login" className="text-muted-foreground hover:text-foreground transition-colors">
                                <ShieldHalf className="w-5 h-5" />
                            </Link> */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h3 className="font-bold mb-4">Legal Terms</h3>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service}>
                                    <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold mb-4">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <MapPin className="w-5 h-5 shrink-0 mt-1" />
                                <a href=""><p> 40 SN Sarani </p></a>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Phone className="w-5 h-5 shrink-0" />
                                <a href="tel:+918777840003"> <p>+91 87778 40003</p></a>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Mail className="w-5 h-5 shrink-0" />
                                <a href="mailto:services@agricare.com"><p>services@agricare.com</p></a>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <p>&copy; {new Date().getFullYear()} Agri Care. All rights reserved.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-2 text-center text-sm text-muted-foreground">
                    <p>Made with ❤️ by <a href="https://ignite-studios.vercel.app/" target="_blank" className="hover:underline">Ignite Studios</a></p>
                </div>
            </div>
        </footer>
    )
}