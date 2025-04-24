'use client'
import { Header } from "@/components/header"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Instagram, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen flex-col">
      {/* Sticky Header - Appears on scroll */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="relative h-[500px] md:h-[600px]">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Fachada da Artvidros"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <BlurFade delay={0.25} inView>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Sua Casa Merece o Melhor 👋
              </h2>
            </BlurFade>
            <div
              className="text-lg md:text-xl max-w-2xl mb-8 transition-all duration-1000 delay-1000"
              style={{
                opacity: 1,
                transform: "translateY(0)",
                animation: "fadeIn 1s ease-in-out 1s forwards",
              }}
            >
              Vidros, espelhos, fechamentos, box, esquadrias e muito mais.
            </div>
            <Button
              size="lg"
              className="bg-[#ff5e00] hover:bg-[#e05400] transition-all duration-500 delay-1500"
              style={{
                opacity: 1,
                transform: "translateY(0)",
                animation: "scaleIn 0.5s ease-in-out 1.5s forwards",
              }}
            >
              <Phone className="mr-2 h-5 w-5" /> Fale conosco pelo WhatsApp
            </Button>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Espelhos", icon: "square" },
                { name: "Molduras", icon: "frame" },
                { name: "Vidros comuns", icon: "square" },
                { name: "Vidros temperados", icon: "layers" },
                { name: "Box para banheiro", icon: "layout" },
                { name: "Fechamento de pia e balcão", icon: "table" },
                { name: "Fechamento de cortinas", icon: "layout-dashboard" },
                { name: "Portas e janelas de vidro temperado", icon: "door" },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#ff5e00]/10 text-[#ff5e00] mb-4">
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
                      className="h-8 w-8"
                    >
                      {service.icon === "square" && <rect width="18" height="18" x="3" y="3" rx="2" />}
                      {service.icon === "frame" && (
                        <>
                          <line x1="22" x2="2" y1="6" y2="6" />
                          <line x1="22" x2="2" y1="18" y2="18" />
                          <line x1="6" x2="6" y1="2" y2="22" />
                          <line x1="18" x2="18" y1="2" y2="22" />
                        </>
                      )}
                      {service.icon === "layers" && (
                        <>
                          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                          <path d="m22 12.18-8.58-3.91a2 2 0 0 0-1.66 0L2.6 12.18a1 1 0 0 0 0 1.82l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                          <path d="m22 18.18-8.58-3.91a2 2 0 0 0-1.66 0L2.6 18.18a1 1 0 0 0 0 1.82l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                        </>
                      )}
                      {service.icon === "layout" && (
                        <>
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                          <line x1="3" x2="21" y1="9" y2="9" />
                          <line x1="9" x2="9" y1="21" y2="9" />
                        </>
                      )}
                      {service.icon === "table" && (
                        <>
                          <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
                        </>
                      )}
                      {service.icon === "layout-dashboard" && (
                        <>
                          <rect width="7" height="9" x="3" y="3" rx="1" />
                          <rect width="7" height="5" x="14" y="3" rx="1" />
                          <rect width="7" height="9" x="14" y="12" rx="1" />
                          <rect width="7" height="5" x="3" y="16" rx="1" />
                        </>
                      )}
                      {service.icon === "door" && (
                        <>
                          <path d="M13 4h3a2 2 0 0 1 2 2v14" />
                          <path d="M2 20h3" />
                          <path d="M13 20h9" />
                          <path d="M10 12v.01" />
                          <path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z" />
                        </>
                      )}
                    </svg>
                  </div>
                  <h3 className="font-medium">{service.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section id="galeria" className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Galeria de Projetos</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg group">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Projeto ${index + 1}`}
                    alt={`Projeto ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium">Ver detalhes</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nome
                    </label>
                    <Input id="name" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Telefone
                    </label>
                    <Input id="phone" placeholder="(77) 98844-5010" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Mensagem
                    </label>
                    <Textarea id="message" placeholder="Como podemos ajudar?" rows={4} />
                  </div>
                  <Button className="w-full bg-[#ff5e00] hover:bg-[#e05400]">Enviar mensagem</Button>
                </form>
              </div>
              <div className="space-y-6">
                <div className="h-64 bg-gray-200 rounded-lg">
                  {/* Aqui seria incorporado o mapa do Google */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <MapPin className="mr-2" /> Mapa de localização
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[#ff5e00] mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium">Horário de Atendimento</h3>
                      <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-gray-600">Sábado: 8h às 12h</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-[#ff5e00] mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium">Telefone</h3>
                      <a href="tel:+5577988445010" className="text-gray-600 hover:text-[#ff5e00]">
                        (77) 98844-5010
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Instagram className="h-5 w-5 text-[#ff5e00] mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium">Instagram</h3>
                      <a
                        href="https://instagram.com/artvidros_cez"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#ff5e00]"
                      >
                        @artvidros_cez
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">Artvidros</div>
              <p className="text-gray-400 max-w-xs">
                Especialistas em vidros, espelhos e esquadrias, oferecendo soluções personalizadas para sua casa ou
                empresa.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#ff5e00] mr-3" />
                  <a href="tel:+5577988445010" className="text-gray-400 hover:text-white">
                    (77) 98844-5010
                  </a>
                </div>
                <div className="flex items-center">
                  <Instagram className="h-5 w-5 text-[#ff5e00] mr-3" />
                  <a
                    href="https://instagram.com/artvidros_cez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    @artvidros_cez
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Horário de Funcionamento</h3>
              <div className="space-y-2 text-gray-400">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Artvidros. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Botão de WhatsApp fixo */}
      <a
        href="https://wa.me/5577988445010"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
      >
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
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </div>
  )
}
