import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">MAPRE</h3>
            <p className="mb-4 text-muted-foreground">
              Soluciones expertas en mantenimiento industrial y proyectos eléctricos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-muted-foreground hover:text-primary transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicios/generadores"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Mantenimiento de Generadores
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/monoblock"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sistemas de Generadores Monoblock
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contáctanos</h4>
            <p className="flex items-center mb-2 text-muted-foreground">
              <Mail className="mr-2 h-4 w-4" /> info@mapre.com
            </p>
            <p className="mb-2 text-muted-foreground">Calle Industrial 123, Ciudad Industrial</p>
            <p className="mb-2 text-muted-foreground">Teléfono: (123) 456-7890</p>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} MAPRE. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

