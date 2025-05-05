'use client'

import React, { JSX } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Phone, Mail, MapPin } from 'lucide-react'
import EmblaCarousel from '../ui/EmblaCarousel/EmblaCarouselHorizontal'
import { EmblaOptionsType } from 'embla-carousel'

export default function TalleresHeader(): JSX.Element {

    const workshopImages = [
        '/images/PHOTO-2025-04-05-10-16-13.jpg ',
        '/images/PHOTO-2025-04-05-10-16-15.jpg ',
        '/images/PHOTO-2025-04-05-10-16-22.jpg ',
        '/images/PHOTO-2025-04-05-10-16-35.jpg ',
        '/images/PHOTO-2025-04-05-10-16-38.jpg ',
        '/images/PHOTO-2025-04-05-10-16-50.jpg',
    ]
    const OPTIONSHORIZONTAL: EmblaOptionsType = { loop: true }
    
    return (
        <Section decorate className='py-20 sm:py-24 lg:py-32'>
            <Container className="relative mx-auto border-b ">
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
                <div className="block lg:hidden w-full overflow-hidden">
                    <div className="md:col-span-2">
                        <EmblaCarousel slides={workshopImages.map((url, index) => (
                            <img
                                className="embla__slide__img"
                                src={`${url}`}
                                alt="Your alt text"
                            />
                        ))} options={OPTIONSHORIZONTAL} />
                    </div>
                </div>
            </Container>
        </Section>
    )
}
