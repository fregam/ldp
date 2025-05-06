"use client"

import type { JSX } from "react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function BookClubHero(): JSX.Element {
  return (
    <Section decorate >
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[var(--color-peach-light)]/30 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-[var(--color-beige-300)]/20 blur-3xl"></div>
      </div> */}

      <Container
        motionProps={{
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        animate
      >
        {/* Mobile Image */}
        <div className="block w-full overflow-hidden lg:hidden">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-full border-4 border-[var(--color-cream)] shadow-lg"
          >
            <Image
              src="/images/9A1A3286.jpg"
              alt="Club de Lectura Creciendo Juntos"
              width={400}
              height={400}
              className="h-full w-full object-cover object-center"
              priority
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="lg:col-span-3 py-8 px-4 sm:px-0 sm:py-16 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-5xl md:text-6xl">
              <span className="relative inline-block">
                <span className="relative z-10">Creciendo</span>
                <span className="absolute bottom-2 left-0 z-0 h-3 w-full bg-[var(--color-peach-light)]"></span>
              </span>{" "}
              Juntos
            </h1>

            <p className="mt-6 text-lg text-[var(--color-muted-foreground)] sm:text-xl max-w-2xl mx-auto lg:mx-0">
              Mucho más que un club de lectura, es un espacio para conectar con uno mismo, con otros y con libros que
              nos invitan a crecer.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button className="w-full sm:w-auto">
                <Link href="#como-funciona">Cómo participar</Link>
              </Button>
              <Button className="w-full sm:w-auto">
                <Link href="#libros">Ver libros</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Desktop Image */}
        <div className="hidden lg:block lg:col-span-2">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative overflow-hidden p-lg"
          >
            <Image
              src="/images/9A1A3286.jpg"
              alt="Club de Lectura Creciendo Juntos"
              width={400}
              height={400}
              className="h-full w-full object-cover object-center rounded-sm"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-background)]/10 to-transparent"></div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
