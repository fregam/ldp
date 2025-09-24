'use client'
import { Container } from '@/components/ui/Container'
import { Section } from '../ui/Section'

export function SobreMi() {
  return (
    <Section decorate className="scroll-mt-24 lg:scroll-mt-32 py-20 sm:py-24 lg:py-32" id="sobre-mi">
      <Container animate className="relative mx-auto" motionProps={{
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: 'easeOut' },
      }}>
        {/* Left Images Column */}
        <div className="lg:col-span-2 lg:col-start-1">
          <div className="grid grid-cols-2 gap-4 lg:px-24 px-4">
            <div className="col-span-1 space-y-4">
              <img
                src="/images/PHOTO-2025-04-05-10-16-15.jpg"
                alt="Lucía Díaz"
                className="rounded-md w-full"
              />
              <img
                src="/images/_M1A8921.jpg"
                alt="Sesión terapéutica"
                className="rounded-md w-full"
              />
            </div>
            <div className="col-span-1 items-center">
              <div className="relative z-10 my-4">
                <img
                  src="/images/7B0A3253.jpg"
                  alt="Consultorio"
                  className="rounded-md w-full"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right Text Content */}
        <div className=" lg:col-span-3 lg:col-start-3">
          <div className="relative pb-3 py-1 text-md text-[var(--color-primary)]">
            Sobre mí
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-5xl">
            Mi Historia Personal
          </h2>
          <p className="mt-8 text-lg text-[var(--color-foreground)] sm:text-xl">
            Soy Lucía Díaz, psicóloga clínica con más de 10 años de experiencia ayudando a personas a
            encontrar su bienestar emocional y mental. Mi pasión por la psicología comenzó cuando
            descubrí el impacto profundo que tiene nuestra salud mental en todas las áreas de nuestra vida.
          </p>
          <p className="mt-8 text-lg text-[var(--color-foreground)] sm:text-xl">
            Nacida y criada en Costa Rica, entiendo las particularidades culturales que influyen en nuestra
            forma de ver y manejar la salud mental. Mi enfoque terapéutico combina técnicas basadas en
            evidencia con un profundo respeto por la individualidad de cada persona.
          </p>
          <p className="mt-8 text-lg text-[var(--color-foreground)] sm:text-xl">
            Además de mi práctica clínica, me apasiona divulgar conocimientos a través de mi podcast,
            YouTube y blog.
          </p>
        </div>
      </Container>
    </Section>
  )
}
