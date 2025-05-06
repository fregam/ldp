'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpotify } from "@fortawesome/free-brands-svg-icons"
import { usePathname } from 'next/navigation'
import clsx from 'clsx'


interface NavItem {
  label: string
  href: string
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Consulta', href: '/consulta' },
  { label: 'Talleres', href: '/talleres' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'Club de Lectura', href: '/ClubLectura' },
]



export default function Footer() {
  const pathname = usePathname() || '/'
  return (
    <footer className="bg-[var(--color-footer-background)] text-[var(--color-footer-foreground)] border-t border-[var(--color-footer-foreground)]">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div>
            <Link href="/" className="inline-block mb-6 s">
              <Image
                src="/images/lucialogo-17.png?height=240&width=240"
                alt="Logo"
                width={240}
                height={240}
              />
            </Link>
            <p className="mb-6">
              Psicóloga especializada en terapia individual, talleres y recursos para tu bienestar mental.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://spotify.com"
                target="_blank"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                <FontAwesomeIcon icon={faSpotify} className="h-5 w-5" />
                <span className="sr-only">Spotify</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--color-footer-foreground)] mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              {NAV_ITEMS.map(({ label, href }) => {
                const isActive = pathname === href
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group relative text-[var(--color-foreground)] text-base font-medium hover:text-[var(--color-primary)] transition-colors"
                    >
                      {label}
                      <span
                        className={clsx(
                          'absolute left-0 -bottom-1 h-[2px] bg-[var(--color-primary)] transition-all duration-300',
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        )}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--color-footer-foreground)] mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[var(--color-footer-foreground)] mr-2 shrink-0" />
                <span className="text-[var(--color-footer-foreground)]">+506 8873-0130</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[var(--color-footer-foreground)] mr-2 shrink-0" />
                <span className="text-[var(--color-footer-foreground)]">info@luciadiazpsicologa.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[var(--color-footer-foreground)] mr-2 shrink-0" />
                <span className="text-[var(--color-footer-foreground)]">Distrito 4, Guachipelín de Escazú. Tercer piso, consultorio 309</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[var(--color-footer-foreground)] mr-2 shrink-0" />
                <span className="text-[var(--color-footer-foreground)]">Torre Médica de Momentum Pinares. Tercer piso, consultorio C22</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Lucía Díaz Psicóloga. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacidad" className="hover:text-[var(--color-primary)] text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-[var(--color-primary)] text-sm transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}