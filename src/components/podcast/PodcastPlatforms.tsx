"use client"

import type { JSX } from "react"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { Headphones, Play } from "lucide-react"

export default function PodcastPlatforms(): JSX.Element {
    const platforms = [
        {
            name: "Apple Podcasts",
            icon: "/placeholder.svg?height=64&width=64",
            url: "youtube.com",
        },
        {
            name: "Spotify",
            icon: "/placeholder.svg?height=64&width=64",
            url: "#",
        },
        {
            name: "YouTube",
            icon: "/placeholder.svg?height=64&width=64",
            url: "#",
        },
    ]

    return (
        <Section decorate className="py-20 sm:py-24 lg:py-32">
            {/* <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[var(--color-peach-light)]/20 blur-3xl"></div>
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[var(--color-beige-300)]/30 blur-3xl"></div>
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
                            Estamos en las principales plataformas
                        </h2>
                        <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">Escucha nuestro podcast donde prefieras</p>
                    </div>

                    <div className="mt-12 grid gap-sm md:grid-cols-3">
                        {platforms.map((platform, index) => (
                            <motion.a
                                key={platform.name}
                                href={platform.url}
                                className="group flex flex-col items-center rounded-sm bg-[var(--color-cream)] p-6 transition-all hover:shadow-lg"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-cream)] p-4">
                                    <Image
                                        src={platform.icon || "/placeholder.svg"}
                                        alt={platform.name}
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-sage-600)]">
                                    {platform.name}
                                </h3>
                                <p className="mt-1 text-center text-sm text-[var(--color-muted-foreground)]">
                                    De Terapeuta y Loco Todos Tenemos un Poco
                                </p>
                                <div className="mt-4 h-0.5 w-0 bg-[var(--color-sage-600)] transition-all duration-300 group-hover:w-16"></div>
                            </motion.a>
                        ))}
                    </div>

                    <div className="mt-16">
                        <div className="mx-auto max-w-3xl rounded-sm bg-[var(--color-background)] border p-6 ">
                            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                                <div className="text-center md:text-left">
                                    <h3 className="text-xl font-semibold text-[var(--color-foreground)]">Episodio más reciente</h3>
                                    <p className="mt-2 text-[var(--color-muted-foreground)]">
                                        &quot;&quot;
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <Button className="flex items-center gap-2">
                                        <Play className="h-4 w-4" />
                                        <span>Reproducir</span>
                                    </Button>
                                    <Button className="flex items-center gap-2">
                                        <Headphones className="h-4 w-4" />
                                        <span>Ver todos</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
