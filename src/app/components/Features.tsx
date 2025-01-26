"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Battery, AlertTriangle, Gauge, Clock } from "lucide-react"

interface Feature {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
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
      className="bg-card text-card-foreground rounded-lg shadow-lg p-6 transition duration-300 ease-in-out hover:shadow-xl"
    >
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}

const Features = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: <Clock className="w-8 h-8" />,
      title: "Mantenimiento Preventivo",
      description: "Inspecciones programadas y mantenimiento rutinario para prevenir fallos.",
    },
    {
      id: 2,
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Mantenimiento Correctivo",
      description: "Diagnóstico y reparación de averías, resolución rápida de emergencias.",
    },
    {
      id: 3,
      icon: <Gauge className="w-8 h-8" />,
      title: "Pruebas de Rendimiento",
      description: "Evaluación completa del rendimiento y eficiencia de sus equipos.",
    },
    {
      id: 4,
      icon: <Battery className="w-8 h-8" />,
      title: "Sistemas de Respaldo",
      description: "Mantenimiento de sistemas de respaldo y transferencia automática.",
    },
  ]

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-accent" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          ¿Por qué elegir MAPRE?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

