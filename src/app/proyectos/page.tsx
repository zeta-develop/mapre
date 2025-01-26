import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"

const ProjectCard = ({
  title,
  description,
  image,
  client,
}: { title: string; description: string; image: string; client: string }) => (
  <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
    <Image
      src={image || "/placeholder.svg"}
      alt={title}
      width={400}
      height={300}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-foreground mb-4">{description}</p>
      <p className="text-sm text-muted-foreground">Cliente: {client}</p>
    </div>
  </div>
)

export default function Proyectos() {
  const projects = [
    {
      title: "Modernización de Planta Industrial",
      description:
        "Actualización completa del sistema eléctrico y de control para una planta de producción de automóviles.",
      image: "/images/proyecto-modernizacion.jpg",
      client: "AutoTech Industries",
    },
    {
      title: "Implementación de Sistema de Monitoreo Energético",
      description:
        "Diseño e instalación de un sistema de monitoreo energético en tiempo real para optimizar el consumo de energía.",
      image: "/images/proyecto-monitoreo.jpg",
      client: "EcoEnergy Solutions",
    },
    {
      title: "Automatización de Línea de Producción",
      description:
        "Automatización completa de una línea de producción de alimentos, incluyendo control de calidad y empaquetado.",
      image: "/images/proyecto-automatizacion.jpg",
      client: "FoodTech Processors",
    },
    {
      title: "Mantenimiento Preventivo de Turbinas",
      description: "Programa de mantenimiento preventivo para turbinas de gas en una planta de generación eléctrica.",
      image: "/images/proyecto-turbinas.jpg",
      client: "PowerGen Corporation",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-primary">Nuestros Proyectos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

