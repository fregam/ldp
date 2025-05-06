"use client"

import type React from "react"

import { type JSX, useState } from "react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { cn } from "@/lib/utils"
import { Clock, Zap, Heart, Frown, Leaf, Users, Smile, Sparkles, Brain, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { motion, AnimatePresence } from "framer-motion"

type Topic = {
    id: number
    name: string
    icon: React.ReactNode
    description: string
    color: string
    bgColor: string
    borderColor: string
}

const topics: Topic[] = [
    {
        id: 1,
        name: "Manejo del estrés",
        icon: <Clock className="h-5 w-5" />,
        description: "Estrategias prácticas para gestionar el estrés cotidiano y prevenir sus efectos negativos.",
        color: "text-[var(--color-primary-foreground)]",
        bgColor: "bg-[var(--color-cream)]",
        borderColor: "border-[var(--color-sage-600)]",
    },
    {
        id: 2,
        name: "Ansiedad",
        icon: <Zap className="h-5 w-5" />,
        description: "Comprensión de los diferentes tipos de ansiedad y herramientas para reducir su impacto.",
        color: "text-[var(--color-sage-600)]",
        bgColor: "bg-[var(--color-cream)]",
        borderColor: "border-[var(--color-sage-600)]",
    },
    {
        id: 3,
        name: "Estilos de apego",
        icon: <Heart className="h-5 w-5" />,
        description: "Cómo nuestros patrones de vinculación afectan nuestras relaciones actuales.",
        color: "text-[var(--color-sage-600)]",
        bgColor: "bg-[var(--color-cream)]",
        borderColor: "border-[var(--color-sage-600)]",
    },
    {
        id: 4,
        name: "Depresión",
        icon: <Frown className="h-5 w-5" />,
        description: "Señales, causas y abordajes terapéuticos para los estados depresivos.",
        color: "text-[var(--color-sage-600)]",
        bgColor: "bg-[var(--color-cream)]",
        borderColor: "border-[var(--color-sage-600)]",
    },
    {
        id: 5,
        name: "Duelo",
        icon: <Leaf className="h-5 w-5" />,
        description: "El proceso de pérdida y las etapas para transitar el dolor hacia la aceptación.",
        color: "text-[var(--color-sage-600)]",
        bgColor: "bg-[var(--color-cream)]",
        borderColor: "border-[var(--color-sage-600)]",
    },
    {
        id: 6,
        name: "Trastornos de personalidad",
        icon: <Users className="h-5 w-5" />,
        description: "Características, diagnóstico y tratamiento de los diferentes trastornos de personalidad.",
        color: "text-[var(--color-sage-600)]",
        bgColor: "bg-[var(--color-cream)]",
        borderColor: "border-[var(--color-sage-600)]",
    },
    {
        id: 7,
        name: "Autoestima",
        icon: <Smile className="h-5 w-5" />,
        description: "Construir una relación saludable con uno mismo y fortalecer la valoración personal.",
        color: "text-[var(--color-sage-600)]",
        bgColor: "bg-[var(--color-cream)]",
        borderColor: "border-[var(--color-sage-600)]",
    },
    {
        id: 8,
        name: "Mindfulness",
        icon: <Sparkles className="h-5 w-5" />,
        description: "Prácticas de atención plena para reducir el estrés y mejorar la calidad de vida.",
        color: "text-[var(--color-sage-600)]",
        bgColor: "bg-[var(--color-cream)]",
        borderColor: "border-[var(--color-sage-600)]",
    },
    {
        id: 9,
        name: "Neurociencia",
        icon: <Brain className="h-5 w-5" />,
        description: "Cómo funciona nuestro cerebro y su relación con nuestras emociones y comportamientos.",
        color: "text-[var(--color-sage-600)]",
        bgColor: "bg-[var(--color-cream)]",
        borderColor: "border-[var(--color-sage-600)]",
    },
    {
        id: 10,
        name: "Desarrollo personal",
        icon: <Lightbulb className="h-5 w-5" />,
        description: "Herramientas para el crecimiento personal y la realización de nuestro potencial.",
        color: "text-[var(--color-sage-600)]",
        bgColor: "bg-[var(--color-cream)]",
        borderColor: "border-[var(--color-sage-600)]",
    },
]

export default function PodcastTopics(): JSX.Element {
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)

    return (
        <Section decorate className="py-20 sm:py-24 lg:py-32">
            {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-[var(--color-beige-300)]/20 blur-3xl"></div>
        <div className="absolute -right-40 bottom-1/3 h-80 w-80 rounded-full bg-[var(--color-sage-400)]/10 blur-3xl"></div>
      </div> */}

            <Container
                className="relative mx-auto"
                motionProps={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, amount: 0.2 },
                    transition: { duration: 0.6, ease: "easeOut" },
                }}
            >
                <div className="lg:col-span-full">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)] md:text-4xl">
                            ¿Qué podés encontrar en el podcast?
                        </h2>
                        <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
                            En cada episodio abordamos temas relevantes para la vida cotidiana
                        </p>
                    </div>
                    <div className="mt-12">
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                            {topics.map((topic) => (
                                <motion.div key={topic.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        className={cn(
                                            "border transition-all",
                                            selectedTopic?.id === topic.id
                                                ? `${topic.color} ${topic.bgColor} ${topic.borderColor}`
                                                : `text-[var(--color-primary-foreground)] hover:border-[var(--color-sage-400)] hover:bg-[var(--color-cream)]/50`,
                                        )}
                                        onClick={() => setSelectedTopic(topic.id === selectedTopic?.id ? null : topic)}
                                    >
                                        <span className={selectedTopic?.id === topic.id ? topic.color : "text-[var(--color-sage-600)]"}>
                                            {topic.icon}
                                        </span>
                                        <span className="ml-2">{topic.name}</span>
                                    </Button>
                                </motion.div>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            {selectedTopic && (
                                <motion.div
                                    key={selectedTopic.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-sm bg-[var(--color-background)] p-6 shadow-md"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={cn("flex h-10 w-10 items-center justify-center rounded-full", selectedTopic.bgColor)}>
                                            <span className={selectedTopic.color}>{selectedTopic.icon}</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-[var(--color-foreground)]">{selectedTopic.name}</h3>
                                    </div>
                                    <p className="mt-4 text-[var(--color-muted-foreground)]">{selectedTopic.description}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="mt-12 text-center">
                            <p className="mx-auto max-w-2xl text-lg text-[var(--color-muted-foreground)]">
                                Las conversaciones, profundas pero accesibles, combinan experiencia clínica, teoría basada en evidencia y
                                herramientas prácticas para transitar los desafíos emocionales con mayor claridad y resiliencia.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
