"use client"

import type { JSX } from "react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import Image from "next/image"
import { motion } from "framer-motion"
import { Headphones, Mic, Users } from "lucide-react"

export default function PodcastAbout(): JSX.Element {
  return (
    <Section decorate className="py-20 sm:py-24 lg:py-32">
      <Container
        className="relative mx-auto"
        motionProps={{
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.6, ease: "easeOut" },
        }}
      >
        <div className="lg:col-span-full">
           <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)] md:text-4xl">
            Sobre el Podcast
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-muted-foreground)]">
            Un espacio para conversar sobre salud mental con autenticidad, empatía y rigor científico
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-sm">
          {/* Main Card */}
          <div className="md:col-span-3">
            <Card
              title="De Terapeuta y Loco Todos Tenemos un Poco"
              description={`
                De Terapeuta y Loco Todos Tenemos un Poco es un podcast creado por la Dra. Isabel Arias Martínez, médica psiquiatra, y la Máster en Psicología Clínica Lucía Díaz Galeano. 
                
                Nace del deseo de dos profesionales —y al mismo tiempo personas reales que también han estado del otro lado del sillón— de conversar sobre salud mental con autenticidad, empatía y rigor.
                
                Este espacio tiene como propósito acompañar, educar y derribar mitos en torno al bienestar emocional, acercando temas de psicología y psiquiatría a quienes desean comprenderse mejor y vivir con mayor conciencia.
                
                El podcast está disponible de forma gratuita en múltiples plataformas digitales, incluyendo Apple Podcasts, Google Podcasts, Spotify y en versión de video en YouTube.
              `}
              bgClass="bg-[var(--color-cream)]"
              textClass="text-[var(--color-foreground)]"
              icon={<Headphones className="h-6 w-6 text-[var(--color-sage-600)]" />}
              button={{
                label: "Escuchar episodios",
                href: "#episodios",
              }}
            />
          </div>

          {/* Stats Cards */}
          <div className="grid gap-sm md:col-span-3 md:grid-cols-3">
            <Card
              title="60+"
              description="Episodios publicados explorando diversos temas de salud mental y bienestar emocional."
              bgClass="bg-[var(--color-beige-300)]"
              textClass="text-[var(--color-charcoal)]"
              icon={<Mic className="h-6 w-6 text-[var(--color-sage-600)]" />}
            />
            <Card
              title="80,000+"
              description="Reproducciones en audio a través de diversas plataformas de podcast."
              bgClass="bg-[var(--color-beige-300)]"
              textClass="text-[var(--color-charcoal)]"
              icon={<Headphones className="h-6 w-6 text-[var(--color-sage-600)]" />}
            />
            <Card
              title="60,000+"
              description="Visualizaciones en video, creando una comunidad comprometida con la salud mental."
              bgClass="bg-[var(--color-beige-300)]"
              textClass="text-[var(--color-charcoal)]"
              icon={<Users className="h-6 w-6 text-[var(--color-sage-600)]" />}
            />
          </div>

          {/* Host Profiles */}
          <div className="md:col-span-3">
            <h3 className="mb-8 text-center text-2xl font-semibold text-[var(--color-foreground)]">
              Nuestras Anfitrionas
            </h3>
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full border-4 border-[var(--color-peach-light)] shadow-md">
                  <Image
                    src="/images/draIsabel.jpg"
                    alt="Dra. Isabel Arias Martínez"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-[var(--color-foreground)]">Dra. Isabel Arias Martínez</h3>
                  <p className="mt-1 text-[var(--color-muted-foreground)]">Médica Psiquiatra</p>
                  <p className="mx-auto mt-3  text-sm text-[var(--color-muted-foreground)]">
                    Especialista en salud mental con amplia experiencia clínica, apasionada por derribar mitos sobre la
                    psiquiatría y hacer el conocimiento accesible a todos.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col items-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full border-4 border-[var(--color-sage-400)] shadow-md">
                  <Image
                    src="/images/7B0A3794.jpg"
                    alt="Lucía Díaz Galeano"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-[var(--color-foreground)]">Lucía Díaz Galeano</h3>
                  <p className="mt-1 text-[var(--color-muted-foreground)]">Máster en Psicología Clínica</p>
                  <p className="mx-auto mt-3  text-sm text-[var(--color-muted-foreground)]">
                    Psicóloga clínica con enfoque en bienestar emocional y desarrollo personal, combina rigor científico
                    con un acercamiento cálido y humano a la psicología.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Quote */}
          <div className="md:col-span-3">
            <div className="relative mt-8 rounded-sm bg-[var(--color-sage-400)]/10 p-6 text-center">
              <svg
                className="absolute left-4 top-4 h-10 w-10 text-[var(--color-sage-600)]/20"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative mx-auto mt-4 max-w-3xl text-lg italic text-[var(--color-foreground)]">
              &quot;Nuestro podcast nace del deseo de normalizar las conversaciones sobre salud mental, combinando nuestra
                experiencia profesional con nuestra propia humanidad.&quot;
              </p>
              <div className="mt-4">
                <div className="flex items-center justify-center">
                  <div className="h-0.5 w-12 bg-[var(--color-sage-600)]/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        </div>
        
      </Container>
    </Section>
  )
}
