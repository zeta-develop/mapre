"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Settings, PenToolIcon as Tool, Activity, Shield, Wrench } from "lucide-react"

export default function MotoresPage() {
  const servicios = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Mantenimiento Preventivo",
      description:
        "Inspecciones programadas, lubricación, limpieza y ajustes para prevenir fallos y extender la vida útil del motor.",
    },
    {
      icon: <Tool className="w-6 h-6" />,
      title: "Mantenimiento Correctivo",
      description: "Reparación especializada de averías, rebobinado de motores y sustitución de componentes dañados.",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Diagnóstico Avanzado",
      description: "Análisis de vibraciones, termografía y pruebas eléctricas para detectar problemas potenciales.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Optimización de Rendimiento",
      description: "Ajustes y modificaciones para mejorar la eficiencia y reducir el consumo energético.",
    },
  ]

  const imagenes = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IRqVvKDLh4apDfZDr353id9QlOJhEs.png",
      alt: "Mantenimiento de bobinados del motor",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P1NogVk05oevo91GXhRoekQgrBbnAf.png",
      alt: "Detalle de bobinados y aislamiento",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2W3PdHfwtPE3O8MvvmiLPrFGTLb4uH.png",
      alt: "Reparación de componentes del motor",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3Gmu7QPufE0sLidGV9pBtC4mUvsawV.png",
      alt: "Componentes internos del motor",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={imagenes[0].src || "/placeholder.svg"}
            alt="Mantenimiento de Motores"
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
            Mantenimiento de Motores Eléctricos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-2xl"
          >
            Servicios especializados de mantenimiento preventivo y correctivo para todo tipo de motores industriales
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <h2 className="text-3xl font-bold mb-6 text-primary">Características de Nuestro Servicio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <Wrench className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Mantenimiento Integral</h3>
                <p className="text-muted-foreground">
                  Servicio completo que incluye diagnóstico, reparación y pruebas de funcionamiento.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Tool className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Equipamiento Especializado</h3>
                <p className="text-muted-foreground">
                  Utilizamos herramientas y equipos de última generación para garantizar la calidad del servicio.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Garantía de Servicio</h3>
                <p className="text-muted-foreground">
                  Todos nuestros trabajos cuentan con garantía y seguimiento post-servicio.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Activity className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Monitoreo Continuo</h3>
                <p className="text-muted-foreground">
                  Seguimiento del rendimiento y estado de los motores para prevenir fallos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">¿Necesita mantenimiento para sus motores?</h2>
          <p className="text-muted-foreground mb-6">
            Contáctenos para una evaluación detallada y presupuesto sin compromiso
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

