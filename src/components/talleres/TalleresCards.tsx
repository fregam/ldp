'use client'

import { Section } from "../ui/Section"
import { Container } from "../ui/Container"
import { WorkshopCarousel } from "../ui/ImageCarousel"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"



export default function TalleresCards() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTaller = () => {
        setCurrentIndex((prevIndex: number) => (prevIndex + 1) % services.length)
    }

    const prevTaller = () => {
        setCurrentIndex((prevIndex: number) => (prevIndex - 1 + services.length) % services.length)
    }

    const services = [
        {
            title: "Emocionalmente Fuerte",
            description: "Programa intensivo de bienestar emocional con contenidos semanales (audios, videos, ejercicios y materiales descargables). Diseñado para quienes desean construir herramientas internas para una vida emocional más equilibrada.",
            features: ['mindfulness', 'autocuidado', 'gestión emocional', 'hábitos', 'autocompasión', 'journaling', 'sueño',
                'pensamientos', 'resiliencia'
            ],
        },
        {
            title: "Explorando la Ansiedad",
            description: "Taller psicoeducativo para comprender la ansiedad desde sus bases psicológicas y fisiológicas, y aprender estrategias para disminuir su impacto cotidiano.",
            features: [
                'síntomas de ansiedad', 'disparadores', 'pensamientos automáticos', 'estrategias de regulación',
                'estilo de vida'
            ],
        },
        {
            title: "Navegando el Estrés",
            description: "Una mirada integral al estrés, sus efectos en el cuerpo y la mente, y formas saludables de afrontarlo.",
            features: [
                'neurobiología del estrés', 'afrontamiento activo', 'manejo del tiempo', 'pausas conscientes',
                'regulación emocional'
            ],
        },
        {
            title: "Calma Interior",
            description: "Taller práctico para reducir el estrés acumulado y reconectar con el presente a través de técnicas guiadas.",
            features: ["respiración consciente", "relajación corporal", "mindfulness", "conexión cuerpo-mente"],
        },
        {
            title: "Bienestar en la Profesión",
            description: "Dirigido a profesionales expuestos a alta carga emocional. Enfocado en prevenir el burnout, fomentar el autocuidado y fortalecer la resiliencia en el entorno laboral.",
            features: ["agotamiento", "límites saludables", "salud emocional", "resiliencia en el trabajo"],
        },
        {
            title: "Desafiando al Crítico Interno",
            description: "Un espacio para identificar y transformar el diálogo interno negativo, promoviendo una voz interior más compasiva y realista.",
            features: ["autocrítica", "autoaceptación", "autocompasión", "voz interior", "crecimiento personal"],
        },
        {
            title: "El Poder de la Mente",
            description: "Taller que aborda el vínculo entre emociones, mente y hábitos. Inicialmente diseñado para personas con sobrepeso, pero aplicable a diversos objetivos de bienestar.",
            features: ["gestión emocional", "motivación", "mentalidad de cambio", "hábitos saludables", "cuerpo y emociones"],
        },

        {
            title: "Abrazando la Autenticidad",
            description: "Un encuentro para mujeres profesionales, emprendedoras o en transición, enfocado en reconocer y superar el síndrome del impostor.",
            features: ["autoconfianza", "autenticidad", "inseguridad", "comparación", "síndrome del impostor"],
        },
        {
            title: "Transforma tu Vida",
            description: "Taller práctico que combina claves para tomar decisiones conscientes y generar cambios sostenibles.",
            features: ["hábitos", "toma de decisiones", "propósito", "autocuidado", "dirección vital"],
        },
        {
            title: "Prevención del Consumo de Alcohol en Menores",
            description: "Taller con dos versiones: una para adolescentes y otra para madres, padres o personas cuidadoras. Brinda herramientas para la toma de decisiones, la prevención y la comunicación efectiva.",
            features: ["prevención", "presión social", "toma de decisiones", "límites saludables", "comunicación familiar"],
        },
        {
            title: "Venciendo la Tristeza",
            description: "Taller psicoeducativo que promueve una mirada compasiva hacia la tristeza profunda y los síntomas depresivos, brindando herramientas prácticas para abordarlos.",
            features: ["tristeza", "depresión", "autocompasión", "activación conductual", "apoyo emocional"],
        },
        {
            title: "Levantarse y Avanzar: Taller de resiliencia",
            description: "Creado para mujeres que han atravesado momentos difíciles y desean reconectar con sus recursos internos. Se exploran tema como la neurobiología de la resiliencia, creencias limitantes y el poder de los vínculos. Incluye ejercicios prácticos y dinámicas grupales.",
            features: ["resiliencia", "mentalidad de crecimiento", "autoconocimiento", "redes de apoyo", "adversidad y transformación"],
        },
    ]
    const workshopImages = [
        '/images/PHOTO-2025-04-05-10-16-13.jpg',
        '/images/PHOTO-2025-04-05-10-16-15.jpg',
        '/images/PHOTO-2025-04-05-10-16-22.jpg',
        '/images/PHOTO-2025-04-05-10-16-35.jpg',
        '/images/PHOTO-2025-04-05-10-16-38.jpg',
        '/images/PHOTO-2025-04-05-10-16-50.jpg',
    ]


    return (
        <Section className='pb-20 sm:pb-24 lg:pb-32'>
            <Container animate
                className="relative mx-auto "
                motionProps={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, amount: 0.2 },
                    transition: { duration: 0.6, ease: 'easeOut' },
                }}
            >
                <div className="col-span-full grid lg:grid-cols-2 items-center">
                    {/* Image Content Desktop */}
                    <div className="lg:col-span-1">
                        <div className="w-full h-full overflow-hidden">
                            <div className="md:col-span-2">
                                <WorkshopCarousel images={workshopImages} />
                            </div>
                        </div>
                    </div>

                    {/* Text Box */}
                    <div className="lg:px-8 lg:col-span-1">
                        <div className='py-12 sm:px-0'>
                            <p className=" text-lg text-[var(--color-foreground)] sm:text-xl">
                                Algunos de estos espacios han sido facilitados tanto en formato presencial como virtual,
                                adaptándose a las necesidades de cada grupo o institución.
                            </p>
                            <br />
                            <p className=" text-lg text-[var(--color-foreground)] sm:text-xl">
                                Los talleres y programas más solicitados son:
                            </p>
                        </div>
                        <div className="bg-[var(--color-background)] rounded-sm p-6 md:p-10 border border-[var(--color-border)]">
                            <div className="min-h-[250px] md:min-h-[200px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="flex items-center">
                                            <div>
                                                <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-4">
                                                    {services[currentIndex].title}
                                                </h3>
                                                <p className="text-[var(--color-foreground)] text-lg">
                                                    {services[currentIndex].description}
                                                </p>
                                                <div className="py-md flex flex-wrap gap-sm">
                                                    {services[currentIndex].features.map((feature) =>
                                                        <span
                                                            key={feature}
                                                            className="whitespace-nowrap rounded-full bg-[var(--color-beige-300)] px-sm"
                                                        >
                                                            {feature}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className=" flex space-x-2">
                                <button
                                    onClick={prevTaller}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-cream)] text-[var(--color-sage-600)] hover:bg-[var(--color-beige-300)] transition-colors"
                                    aria-label="Previous taller"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={nextTaller}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-cream)] text-[var(--color-sage-600)] hover:bg-[var(--color-beige-300)] transition-colors"
                                    aria-label="Next taller"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}