"use client"

import type { JSX } from "react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"
import { Package, Calendar, Coffee, UtensilsCrossed, MessageCircle, Heart } from "lucide-react"
import Image from "next/image"

export default function BookClubHow(): JSX.Element {
  return (
    <Section decorate id="como-funciona" className="py-20 sm:py-24 lg:py-32">
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
            ¿Cómo Funciona?
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
            Todo lo que necesitas saber para participar en nuestro club de lectura
          </p>
        </div>

        <div className="lg:col-span-2 lg:col-start-1">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square overflow-hidden rounded-sm shadow-lg"
          >
            <Image
              src="/images/9A1A3316.jpg"
              alt="Kit del Club de Lectura"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>

        <div className="lg:col-span-3 lg:col-start-3">
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-[var(--color-foreground)] mb-6">
              Cada ciclo incluye un kit que contiene:
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-peach-light)]">
                  <Package className="h-5 w-5 text-[var(--color-sage-600)]" />
                </div>
                <div>
                  <p className="font-medium text-[var(--color-foreground)]">
                    El libro del trimestre, que es sorpresa ✨
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-peach-light)]">
                  <Heart className="h-5 w-5 text-[var(--color-sage-600)]" />
                </div>
                <div>
                  <p className="font-medium text-[var(--color-foreground)]">
                    Detallitos especiales pensados con cariño para acompañarte en la lectura.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
              <h3 className="text-2xl font-semibold text-[var(--color-foreground)] mb-6">Detalles importantes:</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-beige-300)]">
                    <Calendar className="h-5 w-5 text-[var(--color-sage-600)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--color-foreground)]">
                      Las reuniones se realizan cada tres meses
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-beige-300)]">
                    <UtensilsCrossed className="h-5 w-5 text-[var(--color-sage-600)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--color-foreground)]">
                      Cena un viernes por la noche en Limoncello, Barrio Escalante
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-beige-300)]">
                    <Coffee className="h-5 w-5 text-[var(--color-sage-600)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--color-foreground)]">
                      Desayuno un sábado por la mañana en Cafeoteca, Barrio Escalante
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-beige-300)]">
                    <MessageCircle className="h-5 w-5 text-[var(--color-sage-600)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--color-foreground)]">
                      El encuentro es un conversatorio abierto y cercano, pensado para que todos participen aunque no
                      hayan terminado el libro.
                    </p>
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
