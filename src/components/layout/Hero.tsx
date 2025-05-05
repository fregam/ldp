'use client'

import React, { JSX } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Section } from '../ui/Section'

export default function Hero(): JSX.Element {
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
        <div className="lg:col-span-3 py-12 sm:py-48 lg:py-56 px-4 sm:px-0">
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
              Cultiva tu Bienestar Personal
            </h1>
            <p className="mt-8 text-lg text-[var(--color-muted-foreground)] sm:text-xl">
              Sesiones de terapia individual, talleres y recursos diseñados para fortalecer tu mente, cultivar resiliencia y mejorar tu calidad de vida.
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <Link href="#sobre-mi" className="text-lg font-semibold text-[var(--color-foreground)]">
                Conóceme <span aria-hidden="true">→</span>
              </Link>
            </div>
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
