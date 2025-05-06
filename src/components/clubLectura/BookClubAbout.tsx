"use client"

import { JSX } from "react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"
import { BookOpen, Users, Heart } from 'lucide-react'
import { Card } from "../ui/Card"

export default function BookClubAbout(): JSX.Element {
  return (
    <Section className="py-20 sm:py-24 lg:py-32">
      <Container
        motionProps={{
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        animate
      >
        <div className="lg:col-span-5 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)] md:text-4xl">
            Sobre Nuestro Club
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
            Un espacio para leer, reflexionar y compartir en comunidad
          </p>
        </div>

        <div className="lg:col-span-3 lg:col-start-2">
          <div className="bg-[var(--color-cream)] rounded-sm p-6 md:p-8 shadow-md">
            <p className="text-[var(--color-foreground)] mb-4">
              Nació en marzo del 2023 como una iniciativa para leer, reflexionar y compartir en comunidad libros
              de crecimiento personal que transforman la forma en que vivimos, pensamos y sentimos.
            </p>
            <p className="text-[var(--color-foreground)] mb-4">
              Con el paso del tiempo, Creciendo Juntos se ha ido convirtiendo en una comunidad de personas
              deseosas de conectar y aprender, un espacio donde cada encuentro gira alrededor de mucho más
              que un libro, gira en torno a las experiencias, emociones y aprendizajes que cada integrante trae y
              comparte.
            </p>
            <p className="text-[var(--color-foreground)] font-semibold">
              Aquí no importa cuánto hayan leído, sino cuánto están dispuestos a abrirte, a escuchar y a crecer en
              compañía.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 mt-16">
          <div className="grid gap-sm md:grid-cols-3">
            <motion.div 
              className="bg-[var(--color-background)] rounded-sm"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                bgClass="bg-[var(--color-peach-light)]"
                textClass="text-[var(--color-black)]"
                title="Lectura Transformadora"
                description="Seleccionamos libros de crecimiento personal que inspiran cambios positivos en nuestras vidas."
                icon={<BookOpen className="w-6 h-6" />}
              />
            </motion.div>

            <motion.div 
              className="bg-[var(--color-background)] rounded-sm shadow-md "
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                bgClass="bg-[var(--color-beige-300)]"
                textClass="text-[var(--color-black)]"
                title="Comunidad Acogedora"
                description="Creamos un espacio seguro donde compartir experiencias, reflexiones y aprendizajes."
                icon={<Users className="w-6 h-6" />}
              />
            </motion.div>

            <motion.div 
              className="bg-[var(--color-background)] rounded-sm"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                bgClass="bg-[var(--color-sage-400)]"
                textClass="text-[var(--color-black)]"
                title="Crecimiento Personal"
                description="Facilitamos el desarrollo personal a través de la lectura compartida y la reflexión colectiva."
                icon={<Heart className="w-6 h-6" />}
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
