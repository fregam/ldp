'use client'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Section } from '../ui/Section'

export function Experiencia() {
    return (
        <Section decorate className="py-20 sm:py-24 lg:py-32">
            <Container className="relative mx-auto" animate
                motionProps={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, amount: 0.2 },
                    transition: { duration: 0.6, ease: 'easeOut' },
                }}>

                {/* Title and Description */}
                <div className="lg:col-span-3 lg:col-start-1">
                    <div className="relative pb-3 py-1 text-md text-[var(--color-primary)]">
                        Experiencia
                    </div>
                    <h2 className="text-4xl font-semibold text-[var(--color-foreground)] sm:text-5xl">
                        Mi Formación y Experiencia
                    </h2>
                    <p className="mt-8 text-lg text-[var(--color-foreground)] sm:text-xl">
                        Soy Máster en Psicología Clínica por la Universidad de Iberoamérica (UNIBE) y he dedicado los
                        últimos 15 años a acompañar a adolescentes y adultos en sus procesos de sanación,
                        autoconocimiento y crecimiento personal.
                    </p>
                    <blockquote className="w-full my-16 p-4 border-l-4 … max-w-3xl">
                    &quot; Cada experiencia clínica y formativa ha reforzado mi vocación por el bienestar emocional.&quot;
                    </blockquote>
                </div>

                {/* Centered Timeline */}
                <div className="lg:col-span-2">
                    <div className="max-w-2xl w-full">
                        <ol className="relative border-s border-[var(--color-foreground)] ml-4">
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-[var(--color-foreground)] rounded-full mt-1.5 -start-1.5 border border-[var(--color-foreground)]"></div>
                                <strong>Hospital Calderón Guardia</strong>
                                <p className="mb-4 text-[var(--color-primary)]">Durante 6 años trabajé en el diagnóstico y tratamiento de trauma, abuso sexual, depresión, ansiedad, fobias,
                                    trastornos del sueño y de personalidad. Facilitación de grupos terapéuticos.</p>
                            </li>
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-[var(--color-foreground)] rounded-full mt-1.5 -start-1.5 border border-[var(--color-foreground)]"></div>
                                <strong>Docencia Universitaria</strong>
                                <p className="mb-4 text-[var(--color-primary)]">
                                    Profesora en Maestría en Psicología Clínica (UNIBE), Nutrición Clínica (UCR) y
                                    Bachillerato en Psicología (La Salle).
                                </p>
                            </li>
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-[var(--color-foreground)] rounded-full mt-1.5 -start-1.5 border border-[var(--color-foreground)]"></div>
                                <strong>Charlas y Talleres</strong> Terapia Focalizada en Emociones para pareja.
                                <p className="mb-4 text-[var(--color-primary)]">
                                    He dictado talleres para Procter & Gamble, IBM, FIFCO y Weight to Go.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
                {/* Certification Cards */}
                <div className="lg:col-span-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                        <Card
                            bgClass="bg-[var(--color-sage-600)] h-full"
                            textClass="text-[var(--color-black)]"
                            title="Terapia Racional Emotiva Conductual (TREC) y Terapia Cognitivo Conductual (TCC)"
                            description="Entrenamiento avanzado en el Instituto Albert Ellis de Nueva York y el Centro Costarricense de Terapia Racional Emotiva Conductual (CETREC)."
                        />
                        <Card
                            bgClass="bg-[var(--color-peach-dark)] h-full"
                            textClass="text-[var(--color-black)]"
                            title="Hipnosis Clínica"
                            description="Entrenamiento avanzado y miembro de la Asociación Costarricense de Hipnosis Clínica (ACOHIC)."
                        />
                        <Card
                            bgClass="bg-[var(--color-sage-400)] h-full"
                            textClass="text-[var(--color-black)]"
                            title="EMDR (Desensibilización y Reprocesamiento por Movimiento Ocular)"
                            description="Formación avalada por la Asociación EMDR Iberoamérica, orientada especialmente al abordaje de traumas."
                        />
                        <Card
                            bgClass="bg-[var(--color-beige-500)] "
                            textClass="text-[var(--color-black)]"
                            title="Terapia Focalizada en Emociones (EFT)"
                            description="Formación en el enfoque con mayor evidencia científica en terapia de pareja."
                        />
                    </div>
                </div>

            </Container>
        </Section>
    )
}