'use client";'
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header
      className={`fixed top-0 z-50 w-full border-b bg-white transition-all duration-300`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="text-2xl font-bold text-[#ff5e00]">
          <span className="sr-only">Artvidros</span>
          <Image
            src="/artvidros_logo.png"
            alt="Artvidros Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#servicos" className="text-sm font-medium hover:text-[#ff5e00] transition-colors">
            Serviços
          </a>
          <a href="#galeria" className="text-sm font-medium hover:text-[#ff5e00] transition-colors">
            Galeria
          </a>
          <a href="#contato" className="text-sm font-medium hover:text-[#ff5e00] transition-colors">
            Contato
          </a>
        </nav>
        <Button className="hidden md:flex bg-[#ff5e00] hover:bg-[#e05400]">
          <Phone className="mr-2 h-4 w-4" /> Contato
        </Button>
        <Button variant="outline" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  )
}
