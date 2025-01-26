"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    // Resetear el formulario después de enviar
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-primary">Contáctanos</h1>
          <div className="bg-card shadow-lg rounded-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-foreground text-sm font-bold mb-2">
                  Nombre
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-foreground text-sm font-bold mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-foreground text-sm font-bold mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-32"
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <Button type="submit">Enviar Mensaje</Button>
              </div>
            </form>
          </div>
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Información de Contacto</h2>
            <p className="mb-2 text-foreground">
              <strong>Dirección:</strong> Calle Industrial 123, Ciudad Industrial
            </p>
            <p className="mb-2 text-foreground">
              <strong>Teléfono:</strong> (123) 456-7890
            </p>
            <p className="mb-2 text-foreground">
              <strong>Email:</strong> info@mapre.com
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

