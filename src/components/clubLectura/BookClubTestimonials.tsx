"use client"

import { type JSX, useState } from "react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Cada paquete del Club de Lectura es una sorpresa llena de detalles tan bien pensados que hacen muy atractivo el empezar a leer. Cada libro ha tenido enseñanzas aplicables a mi vida, hábitos y maneras de reaccionar. Y la discusión es algo que espero desde que recibo el libro, me ha permitido conocer personas con historias y experiencias de todo tipo pero con las que termino relacionándome, es un espacio seguro y lleno de respeto que sólo promueve el crecimiento personal. Más allá de retomar la lectura, el Club ha sido sido una oportunidad para como mujer adulta, crear conexión con otros mientras descubrimos maneras de ir mejorando y enriqueciendo nuestras vidas",
    author: "Rebeca Garro",
    role: "fiel asistente a todas las ediciones",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Creciendo Juntos es más que un club de lectura. Es una inversión en mi misma y una actividad hermosa de auto-cuido y conexión con un grupo maravilloso de personas diferentes, que al mismo tiempo coincidimos en nuestro deseo de seguir aprendiendo y mejorando nuestras vidas. Algo muy chiva de la experiencia es que nos acompañamos virtualmente mientras leemos el libro del momento (que además Lú acompaña con algunas sorpresitas!) y luego al final del ciclo vamos a disfrutar una comida para conversar. Súper recomendado!",
    author: "Karol Gutiérrez",
    role: "miembro habitual",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Creciendo juntos se ha vuelto un espacio más allá de crecimiento personal, sino también de sanación. Es un grupo lleno de personas maravillosas con historias increíbles que han hecho de él, un espacio seguro y de confianza",
    author: "Mariel Rojas",
    role: "miembro habitual",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function BookClubTestimonials(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <Section decorate>

      <Container
        className="relative mx-auto py-16 md:py-24"
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
            Lo que dicen nuestros miembros
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
            Experiencias de quienes han participado en Creciendo Juntos
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute -top-10 -left-10 text-[var(--color-sage-400)] opacity-20">
            <Quote className="h-20 w-20" />
          </div>

          <div className="relative bg-[var(--color-background)] rounded-sm p-6 md:p-10 border border-[var(--color-border)]">
            <div className="min-h-[300px] md:min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[var(--color-foreground)] text-lg italic mb-8">
                  &quot;{testimonials[currentIndex].quote}&quot;
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-[var(--color-foreground)]">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-sm text-[var(--color-muted-foreground)]">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-6 right-6 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-cream)] text-[var(--color-sage-600)] hover:bg-[var(--color-beige-300)] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-cream)] text-[var(--color-sage-600)] hover:bg-[var(--color-beige-300)] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-[var(--color-sage-600)] w-8" : "bg-[var(--color-sage-400)]/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-sm shadow-md"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Club+Photo+${i}`}
                  alt={`Club de lectura photo ${i}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
