'use client'

import React, { JSX } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function TalleresHeader(): JSX.Element {
    return (
        <Section decorate className='py-20 sm:py-24 lg:py-32 w-full'>
            <Container className="relative mx-auto border-b ">
                <div className="col-span-full">
                    <div className="text-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-7xl">
                            Talleres y Capacitaciones
                        </h1>
                        <p className="mt-8 text-lg text-[var(--color-muted-foreground)] sm:text-xl">
                            Diseño e imparto talleres y programas psicoeducativos para empresas, organizaciones y grupos,
                            combinando teoría psicológica, herramientas prácticas y un acompañamiento cercano y humano.
                            Algunos de estos espacios han sido facilitados tanto en formato presencial como virtual.
                        </p>
                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                        </div>
                    </div>
                </div>
                <div className="block lg:hidden w-full h-[33vh] overflow-hidden">
                    <img
                        src="/images/_M1A8946.jpg"
                        alt="Bienestar personal"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </Container>
        </Section>
    )
}
