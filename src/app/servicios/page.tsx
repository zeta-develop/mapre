import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"
import Link from "next/link"

const ServiceCard = ({
  title,
  description,
  image,
  href,
}: { title: string; description: string; image: string; href: string }) => (
  <Link href={href}>
    <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} layout="fill" objectFit="cover" className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-foreground">{description}</p>
      </div>
    </div>
  </Link>
)

export default function Servicios() {
  const services = [
    {
      title: "Mantenimiento de Transformadores",
      description:
        "Servicios especializados para garantizar la eficiencia y longevidad de sus transformadores eléctricos.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Al6RPyXpCdrhXLNRUSfPFPzZUFIXiP.png",
      href: "/servicios/transformadores",
    },
    {
      title: "Mantenimiento de Motores",
      description:
        "Servicios integrales de mantenimiento preventivo y correctivo para motores eléctricos industriales.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IRqVvKDLh4apDfZDr353id9QlOJhEs.png",
      href: "/servicios/motores",
    },
    {
      title: "Mantenimiento de Generadores",
      description:
        "Servicios especializados de mantenimiento preventivo y correctivo para generadores eléctricos industriales.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Kvju1dFd6knJapF7cAp6qnawaLpDoj.png",
      href: "/servicios/generadores",
    },
    {
      title: "Sistemas de Generadores Monoblock",
      description: "Instalación profesional y mantenimiento especializado de sistemas de generadores tipo monoblock.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MvC5ec3JnklMkCpp4OiN53ysmPOoYV.png",
      href: "/servicios/monoblock",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Nuestros Servicios</h1>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Soluciones integrales para el mantenimiento y optimización de su industria
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

