"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, PenToolIcon as Tool, Zap, Shield, LineChart } from "lucide-react"

export default function TransformadoresPage() {
  const servicios = [
    {
      icon: <Tool className="w-6 h-6" />,
      title: "Mantenimiento Preventivo",
      description:
        "Inspecciones regulares y mantenimiento programado para garantizar el funcionamiento óptimo de sus transformadores.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Pruebas Eléctricas",
      description: "Análisis completo de parámetros eléctricos para asegurar el rendimiento y la seguridad.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Diagnóstico y Reparación",
      description:
        "Identificación y solución de problemas, reparaciones especializadas y rehabilitación de transformadores.",
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Monitoreo de Condiciones",
      description: "Seguimiento continuo del estado del transformador para prevenir fallos y optimizar su vida útil.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Al6RPyXpCdrhXLNRUSfPFPzZUFIXiP.png"
            alt="Mantenimiento de Transformadores"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
        </div>
        <div className="relative z-10 text-white container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Mantenimiento de Transformadores
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-2xl"
          >
            Servicios especializados para garantizar la eficiencia y longevidad de sus transformadores eléctricos
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

        {/* Beneficios */}
        <div className="bg-card text-card-foreground rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">¿Por qué elegir nuestro servicio?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Personal altamente capacitado y certificado",
              "Equipos de diagnóstico de última generación",
              "Servicio disponible 24/7 para emergencias",
              "Informes detallados de cada servicio",
              "Garantía en todos nuestros trabajos",
              "Cumplimiento de normas y estándares internacionales",
            ].map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">{beneficio}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">¿Necesita servicio de mantenimiento?</h2>
          <p className="text-muted-foreground mb-6">
            Contáctenos para una evaluación gratuita de sus necesidades de mantenimiento
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

