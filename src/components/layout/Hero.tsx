'use client'

import { JSX } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '../ui/Section'

export default function Hero(): JSX.Element {
  // const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle')
  return (
    <Section decorate>
      <Container
        className="relative mx-auto"
        motionProps={{
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.6, ease: 'easeOut' },
        }}
      >
        {/* Mobile Image */}
        <div className="block lg:hidden w-full h-[33vh] overflow-hidden pt-sm">
          <img
            src="/images/9A1A3071.jpg"
            alt="Bienestar personal"
            className="w-full h-full object-cover object-center rounded-sm"
          />
        </div>

        {/* Text Content */}
        <div className="lg:col-span-3 py-6 sm:py-48 lg:py-56 px-4 sm:px-0">
          {/* Announcement Banner */}
          <div className="hidden sm:mb-8 sm:flex">
            <div className="relative rounded-full px-3 py-1 text-sm text-[var(--color-foreground)] ring-1 ring-[var(--color-border)] hover:ring-[var(--color-foreground)]">
              Anunciando nuevas sesiones de grupo.{' '}
              <Link href="/Talleres" className="font-semibold text-[var(--color-primary)]">
                Más información <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-7xl">
              Cultiva tu {" "}
              <span className="relative inline-block">

                <span className="relative z-10"> Bienestar</span>
                <span className="absolute bottom-2 left-0 z-0 h-3 w-full bg-[var(--color-peach-light)]"></span>
              </span>{" "}
              Personal
            </h1>
            <p className="mt-8 text-lg text-[var(--color-muted-foreground)] sm:text-xl">
              Sesiones de terapia individual, talleres y recursos diseñados para fortalecer tu mente, cultivar resiliencia y mejorar tu calidad de vida.
            </p>
            <form className="mt-6 flex flex-col sm:flex-row items-stretch gap-3">
              {/* Honeypot anti-spam */}
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <label htmlFor="email" className="sr-only">Correo electrónico</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="tu@email.com"
                className="flex-grow sm:max-w-md rounded-md border border-[var(--color-border)] bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 font-semibold border border-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition"
              >
                Unirme
              </button>
            </form>

            {/* {status === 'ok' && (
              <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
                ¡Gracias! Revisa tu correo para confirmar la suscripción.
              </p>
            )} */}
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden lg:block lg:col-span-2 h-full">
          <div
            className="absolute top-0 right-0 h-full overflow-hidden p-lg"
            style={{ width: 'calc(40% - 1rem)' }}
          >
            <img
              src="/images/9A1A3071.jpg"
              alt="Bienestar personal"
              className="h-full w-full object-cover object-center rounded-sm"
            />
          </div>
        </div>

      </Container>
    </Section>
  )
}
