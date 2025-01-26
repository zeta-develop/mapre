"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, PenToolIcon as Tool, Wrench, Truck, Shield, Settings, Power } from "lucide-react"

export default function MonoblockPage() {
  const servicios = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Instalación Profesional",
      description:
        "Servicio completo de instalación, incluyendo transporte, posicionamiento y conexión de sistemas monoblock.",
    },
    {
      icon: <Tool className="w-6 h-6" />,
      title: "Mantenimiento Preventivo",
      description: "Programas de mantenimiento regular para asegurar el funcionamiento óptimo y prevenir fallos.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Configuración y Calibración",
      description: "Ajuste preciso de parámetros y configuración para máxima eficiencia y rendimiento.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Servicio de Emergencia",
      description: "Atención inmediata para resolver problemas críticos y minimizar tiempos de inactividad.",
    },
  ]

  const proceso = [
    {
      title: "Evaluación del Sitio",
      description: "Análisis detallado del lugar de instalación y requerimientos específicos.",
    },
    {
      title: "Planificación",
      description: "Desarrollo de plan de instalación considerando acceso, seguridad y requisitos técnicos.",
    },
    {
      title: "Instalación",
      description: "Ejecución profesional de la instalación con equipo especializado y personal certificado.",
    },
    {
      title: "Pruebas y Verificación",
      description: "Comprobación exhaustiva del funcionamiento y rendimiento del sistema.",
    },
  ]

  const imagenes = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MQWFzsfvgtdPNIfbV2vNKJKp0gTXzT.png",
      alt: "Equipo técnico realizando instalación",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MvC5ec3JnklMkCpp4OiN53ysmPOoYV.png",
      alt: "Instalación de generador con grúa",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gE3xEj1OqUk3G4l2wSFkVaOazG6Mem.png",
      alt: "Posicionamiento de generador monoblock",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={imagenes[1].src || "/placeholder.svg"}
            alt="Instalación de Generadores Monoblock"
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
            Sistemas de Generadores Monoblock
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-2xl"
          >
            Instalación profesional y mantenimiento especializado para sistemas de generación confiables
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

        {/* Proceso de Instalación */}
        <div className="bg-card text-card-foreground rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary">Proceso de Instalación</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {proceso.map((paso, index) => (
              <div key={index} className="relative">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="h-px bg-primary flex-grow ml-4 hidden lg:block"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{paso.title}</h3>
                <p className="text-muted-foreground">{paso.description}</p>
              </div>
            ))}
          </div>
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

        {/* Características */}
        <div className="bg-card text-card-foreground rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">¿Por qué elegir nuestro servicio?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <Power className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Experiencia Comprobada</h3>
                <p className="text-muted-foreground">
                  Años de experiencia en instalación y mantenimiento de sistemas monoblock.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Tool className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Personal Certificado</h3>
                <p className="text-muted-foreground">
                  Técnicos altamente capacitados y certificados para garantizar un servicio de calidad.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Wrench className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Equipamiento Especializado</h3>
                <p className="text-muted-foreground">
                  Utilizamos herramientas y equipos de última generación para una instalación precisa.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Garantía de Servicio</h3>
                <p className="text-muted-foreground">
                  Respaldamos nuestro trabajo con garantías y soporte técnico continuo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            ¿Necesita instalar o mantener un generador monoblock?
          </h2>
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

