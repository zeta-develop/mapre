"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Battery, AlertTriangle, Gauge, Clock, Shield, Power, Zap } from "lucide-react"

export default function GeneradoresPage() {
  const servicios = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Mantenimiento Preventivo",
      description:
        "Inspecciones programadas, pruebas de funcionamiento y mantenimiento rutinario para prevenir fallos.",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Mantenimiento Correctivo",
      description: "Diagnóstico y reparación de averías, sustitución de componentes y resolución de emergencias.",
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Pruebas de Rendimiento",
      description: "Evaluación completa del rendimiento, eficiencia y capacidad del generador.",
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Sistemas de Respaldo",
      description: "Mantenimiento de sistemas de respaldo y transferencia automática.",
    },
  ]

  const imagenes = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Kvju1dFd6knJapF7cAp6qnawaLpDoj.png",
      alt: "Técnico realizando mantenimiento",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3shynhvrCcXSqW4SHLPqJ4WaeqycMN.png",
      alt: "Sistema de generador industrial",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZzmNmLsDyRbRzHBzZZUSpAFxKwDWph.png",
      alt: "Panel de control del generador",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={imagenes[0].src || "/placeholder.svg"}
            alt="Mantenimiento de Generadores"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
        </div>
        <div className="relative z-10 text-white container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Mantenimiento de Generadores Eléctricos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-2xl"
          >
            Servicios especializados para garantizar la confiabilidad de sus sistemas de generación eléctrica
          </motion.p>
        </div>
      </section>

      {/* Contenido Principal */}
      <div className="container mx-auto px-4 py-16">
        <Link href="/servicios" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a Servicios
        </Link>

        {/* Servicios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card text-card-foreground rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-primary mb-4">{servicio.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{servicio.title}</h3>
              <p className="text-muted-foreground">{servicio.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Galería de Imágenes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary">Nuestro Trabajo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {imagenes.map((imagen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={imagen.src || "/placeholder.svg"}
                  alt={imagen.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Características del Servicio */}
        <div className="bg-card text-card-foreground rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">Nuestros Servicios Incluyen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <Power className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Inspección Completa</h3>
                <p className="text-muted-foreground">
                  Revisión detallada de todos los componentes del generador y sistemas auxiliares.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Mantenimiento Preventivo</h3>
                <p className="text-muted-foreground">
                  Programas personalizados de mantenimiento para prevenir fallos y optimizar el rendimiento.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Servicio de Emergencia</h3>
                <p className="text-muted-foreground">
                  Atención inmediata para resolver problemas críticos y minimizar tiempos de inactividad.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Gauge className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Pruebas de Funcionamiento</h3>
                <p className="text-muted-foreground">
                  Verificación periódica del rendimiento y capacidad del generador.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">¿Necesita servicio para su generador?</h2>
          <p className="text-muted-foreground mb-6">
            Contáctenos para una evaluación profesional y presupuesto personalizado
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Solicitar Servicio
          </Link>
        </div>
      </div>
    </div>
  )
}

