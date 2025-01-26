"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/425594522_829552129184274_3958584495874020811_n.jpg?stp=c198.0.1204.1204a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=714c7a&_nc_ohc=Ooc8eGCemuIQ7kNvgFzcEfS&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AYIhDACS3jfizDuIwkpB4yf&oh=00_AYDzR4v8bHqzXHBON2ihTLV75LqW_q-SZGh96RTPqRgasg&oe=679B679D"
              alt="MAPRE Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-primary">MAPRE</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {["Inicio", "Servicios", "Nosotros", "Proyectos", "Contacto"].map((item) => (
              <Link key={item} href={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}>
                <span className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">{item}</span>
              </Link>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        {isMobileMenuOpen && (
          <nav className="mt-4 md:hidden">
            {["Inicio", "Servicios", "Nosotros", "Proyectos", "Contacto"].map((item) => (
              <Link key={item} href={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}>
                <span
                  className="block py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

