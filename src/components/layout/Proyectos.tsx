'use client'
import React from 'react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Podcast, Youtube, BookOpen } from 'lucide-react'
import { Section } from '../ui/Section'

export function Proyectos() {
    return (
        <Section decorate className="py-20 sm:py-24 lg:py-32">
            <Container animate className="relative mx-auto" motionProps={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.2 },
                transition: { duration: 0.6, ease: 'easeOut' },
            }}>
                {/* Left Card Column */}
                <div className="lg:col-span-3">
                    <div className="relative pb-3 py-1 text-md text-[var(--color-primary)]">
                        Proyectos
                    </div>
                    <h2 className="text-4xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-5xl">
                        Proyectos Que Me Definen
                    </h2>
                    <p className="mt-8 text-lg text-[var(--color-foreground)] sm:text-xl">
                        Soy co-creadora y co-host del podcast “De Terapeuta y Loco Todos Tenemos un Poco” junto a la psiquiatra Isabel Arias.
                        Contamos con invitados destacados en el ámbito de la salud mental.
                    </p>
                    <p className="mt-8 text-lg text-[var(--color-foreground)] sm:text-xl">
                        Además, fundé el club de lectura “Creciendo Juntos”, un espacio para explorar libros de crecimiento personal y
                        fomentar la comunidad desde 2023.
                    </p>
                </div>
                {/* Right Text Column */}
                <div className="lg:col-span-2 ">
                    {/* Large card at the top */}
                    <div className="w-full pb-sm">
                        <Card
                            bgClass="bg-[var(--color-muted)]"
                            textClass="text-[var(--color-black)]"
                            icon={<Podcast className="w-6 h-6 text-[var(--color-sage-600)]" />}
                            title="Podcast Semanal"
                            description="Episodios con expertos en salud mental cada semana."
                            button={{ label: 'Escuchar', href: '/podcast' }}
                            image={{
                                src: '/images/Logotipo_DTYLTTUP-11.png',
                                alt: 'Logo del podcast',
                                className: 'object-cover h-full',
                            }}
                            mdColSpan={2}
                        />
                    </div>

                    {/* Two cards at the bottom */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-sm">
                        {/* YouTube Stats Card */}
                        <div >
                            <Card
                                bgClass="bg-[var(--color-sage-400)] "
                                textClass="text-[var(--color-black)]"
                                icon={<Youtube className="w-6 h-6 text-[var(--color-primary)]" />}
                                title="80,000+ Reproducciones"
                                description="Miles de reproducciones en Spotify y YouTube."
                                button={{ label: 'Ver Más', href: '/reproducciones' }}
                            />
                        </div>

                        {/* Book Club Card */}
                        <div>
                            <Card
                                bgClass="bg-[var(--color-secondary)]"
                                textClass="text-[var(--color-black)]"
                                icon={<BookOpen className="w-6 h-6 text-[var(--color-primary)]" />}
                                title="Club de Lectura"
                                description="Creciendo Juntos, reflexiones sobre crecimiento personal."
                                button={{ label: 'Únete', href: '/club-de-lectura' }}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>

    )
}