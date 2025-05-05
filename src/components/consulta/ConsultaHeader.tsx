'use client'

import React, { JSX } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ConsultaHeader(): JSX.Element {
  return (
    <div className="flex flex-col items-center">

      <Section decorate className='py-20 sm:py-24 lg:py-32'>
        {/* Header Container */}
        <Container className="relative mx-auto ">
          <div className="col-span-full">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-7xl">
                Consulta
              </h1>
              <p className="mt-8 text-lg text-[var(--color-muted-foreground)] sm:text-xl">
                Brindo atención presencial y virtual a personas dentro y fuera de Costa Rica.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              </div>
            </div>
          </div>
          <div className="block lg:hidden w-full h-[33vh] overflow-hidden">
            <img
              src="/images/_M1A8946.jpg"
              alt="Bienestar personal"
              className="w-full h-full object-cover object-center rounded-sm"
            />
          </div>
        </Container>
      </Section>
      <Section className='pb-20 sm:pb-24 lg:pb-32'>
        {/* Content Container */}
        <Container animate
          className="relative mx-auto"
          motionProps={{
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.2 },
            transition: { duration: 0.6, ease: 'easeOut' },
          }}
        >
          <div className="col-span-full grid lg:grid-cols-2">
            {/* Image Content Desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <div
                className="w-full h-full overflow-hidden"
              >
                <img
                  src="/images/_M1A8946.jpg"
                  alt="Bienestar personal"
                  className="h-full w-full object-cover object-center rounded-sm"

                />
              </div>
            </div>

            {/* Text Box */}
            <div className="lg:px-8 lg:col-span-1">
              <div className='py-12 sm:py-48 lg:py-24 md-24 sm:px-0'>
                <p className=" text-lg text-[var(--color-foreground)] sm:text-xl">
                  Actualmente, mi agenda se encuentra cerrada para casos nuevos. Si te interesa iniciar un proceso
                  terapéutico conmigo, puedes anotarte en la lista de espera escribiéndome por WhatsApp al +506
                  8754-2050
                </p>
                <br />
                <p className=" text-lg text-[var(--color-foreground)] sm:text-xl">
                  ¡Estaré encantada de contactarte cuando haya disponibilidad!
                </p>
              </div>

            
              {/* Large card at the top */}
              <div className="w-full pb-2">
                <Card
                  bgClass="bg-[var(--color-muted)]"
                  textClass="text-[var(--color-black)]"
                  icon={<Phone className="h-6 w-6" />}
                  title="Teléfono"
                  description="Llámame o escríbeme por WhatsApp"
                  button={{
                    label: 'WhatsApp',
                    href: 'https://wa.me/50688730130',

                  }}
                />
              </div>

              <div className='grid lg:grid-cols-2 gap-2'>
                <Card
                  bgClass="bg-[var(--color-secondary)]"
                  textClass="text-[var(--color-black)]"
                  icon={<MapPin className="h-6 w-6" />}
                  title="Centro Ment-E"
                  description="Distrito 4, Guachipelín de Escazú. Tercer piso, consultorio 309"
                  button={{
                    label: 'Ver en el mapa',
                    href: 'https://maps.app.goo.gl/YhEHdpV1RTVuzSGz9',
                  }}
                />

                <Card
                  bgClass="bg-[var(--color-sage-400)]"
                  textClass="text-[var(--color-black)]"
                  icon={<MapPin className="h-6 w-6" />}
                  title="Clínica Prajna"
                  description="Torre Médica de Momentum Pinares. Tercer piso, consultorio C22"
                  button={{
                    label: 'Ver en el mapa',
                    href: 'https://maps.app.goo.gl/NB7h4fsSaMuLJ259A',
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>

  )
}
