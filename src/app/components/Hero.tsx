"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/425594522_829552129184274_3958584495874020811_n.jpg?stp=c198.0.1204.1204a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=714c7a&_nc_ohc=Ooc8eGCemuIQ7kNvgFzcEfS&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AYIhDACS3jfizDuIwkpB4yf&oh=00_AYDzR4v8bHqzXHBON2ihTLV75LqW_q-SZGh96RTPqRgasg&oe=679B679D"
          alt="MAPRE Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-background/70"></div>
      </div>
      <div className="relative z-10 text-foreground max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Soluciones Expertas en
          <span className="text-primary"> Mantenimiento Industrial</span> y
          <span className="text-primary"> Proyectos Eléctricos</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Optimizamos el rendimiento de su industria con nuestros servicios especializados
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" className="w-full sm:w-auto">
            Contáctanos
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Nuestros Servicios
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

