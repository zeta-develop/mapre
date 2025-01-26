"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"

interface Service {
  id: number
  title: string
  description: string
  imageSrc: string
}

const ServiceCard = ({ title, description, imageSrc }: { title: string; description: string; imageSrc: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transform transition duration-300 ease-in-out hover:shadow-xl"
    >
      <div className="relative h-48">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <a href="#" className="inline-flex items-center text-primary hover:text-primary/80">
          Más detalles
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  )
}

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Mantenimiento de Generadores",
      description:
        "Servicios especializados de mantenimiento preventivo y correctivo para generadores eléctricos industriales.",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Kvju1dFd6knJapF7cAp6qnawaLpDoj.png",
    },
    {
      id: 2,
      title: "Sistemas de Generadores Monoblock",
      description: "Instalación profesional y mantenimiento especializado de sistemas de generadores tipo monoblock.",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MvC5ec3JnklMkCpp4OiN53ysmPOoYV.png",
    },
  ]

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Nuestros Servicios
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

