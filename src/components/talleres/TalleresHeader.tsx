'use client'

import { JSX } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '../ui/Section'
export default function TalleresHeader(): JSX.Element {
    
    return (
        <Section decorate className='py-20 sm:py-24 lg:py-32'>
            <Container className="relative mx-auto">
                <div className="col-span-full">
                    <div className="text-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-7xl">
                            Talleres y Capacitaciones
                        </h1>
                        <p className="mt-8 text-lg text-[var(--color-muted-foreground)] sm:text-xl">
                            Diseño e imparto talleres y programas psicoeducativos para empresas, organizaciones y grupos,
                            combinando teoría psicológica, herramientas prácticas y un acompañamiento cercano y humano.
                        </p>
                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
