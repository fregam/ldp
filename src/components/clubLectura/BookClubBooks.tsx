"use client"

import type { JSX } from "react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"
// import Image from "next/image"

const books = [
  "En Auschwitz no había Prozac (The Gift) – Edith Eger",
  "Piensa como un monje – Jay Shetty",
  "Los dones de la imperfección – Brené Brown",
  "Cómo hacer que te pasen cosas buenas – Marian Rojas-Estapé",
  "Hábitos atómicos – James Clear",
  "El sutil arte de que (casi todo) te importe una mierda – Mark Manson",
  "Inteligencia intuitiva – Malcolm Gladwell",
  "Lo bueno de tener un mal día – Anabel González",
  "Cuando el cuerpo dice NO – Gabor Maté",
  "¿Por qué nadie me lo dijo antes? – Julie Smith",
]

export default function BookClubBooks(): JSX.Element {
  return (
    <Section id="libros">
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
            Libros Leídos
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
            Exploramos títulos que inspiran crecimiento personal y transformación
          </p>
        </div>

        <div className="lg:col-span-5">
          {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-sm">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="aspect-[2/3] relative overflow-hidden rounded-sm shadow-md"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=200&text=Book+${i + 1}`}
                  alt={`Book cover ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div> */}

          <div className="mt-12 bg-[var(--color-cream)] rounded-sm p-6 md:p-8 shadow-md">
            <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-4">
              Los libros leídos hasta ahora son:
            </h3>
            <ul className="space-y-2">
              {books.map((book, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start"
                >
                  <span className="inline-block h-1.5 w-1.5 mt-2 mr-2 rounded-full bg-[var(--color-sage-600)]"></span>
                  <span className="text-[var(--color-foreground)]">{book}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
