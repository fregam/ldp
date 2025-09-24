"use client"

import type { JSX } from "react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"

export default function PodcastHero(): JSX.Element {
  return (
    <Section decorate>
      <Container
        className="relative mx-auto"
        motionProps={{
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.6, ease: "easeOut" },
        }}
      >
        {/* Mobile Image */}
        <div className="relative block w-full overflow-hidden pt-sm lg:hidden">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-[var(--color-primary)] aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src="/images/Logotipo_DTYLTTUP-10.png"
              alt="Bienestar personal"
              width={600}
              height={450}
              className="h-full w-full object-cover object-center"
              priority
            />
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="relative grid lg:col-span-full items-center gap-8 lg:grid-cols-5">
          {/* Desktop Image */}
          <div className="relative hidden h-full lg:col-span-3 lg:block">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="bg-[var(--color-primary)] relative aspect-[4/3] overflow-hidden rounded-sm shadow-xl"
            >
              <Image
                src="/images/Logotipo_DTYLTTUP-10.png"
                alt="Bienestar personal"
                width={800}
                height={600}
                className="h-full w-full object-cover object-center"
                priority
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-2 py-8 px-4 sm:px-0 sm:py-16 lg:py-lg">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="relative inline-block">
                  <span className="relative z-10">De Terapeuta</span>
                  <span className="absolute bottom-2 left-0 z-0 h-3 w-full bg-[var(--color-peach-light)]"></span>
                </span>{" "}
                y Loco Todos Tenemos un Poco
              </h1>

              <p className="mt-6 text-lg text-[var(--color-muted-foreground)] sm:text-xl">
                Un podcast que aborda la salud mental con autenticidad, empatía y rigor científico.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button className="w-full sm:w-auto" >
                  <Link href="youtube.com">Escuchar ahora</Link>
                </Button>

                <Link
                  href="/"
                  className="group flex items-center gap-2 text-lg font-semibold text-[var(--color-foreground)]"
                >
                  Conóceme
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>

              {/* Podcast platforms */}
              <div className="mt-10">
                <p className="text-sm text-[var(--color-muted-foreground)]">Disponible en:</p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                  {["Spotify", "Apple Podcasts", "Google Podcasts"].map((platform) => (
                    <motion.a
                      key={platform}
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)]"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-beige-300)]">
                        {platform === "Spotify" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 14.5c2.5-1 5.5-1 8 0" />
                            <path d="M6.5 12c3.5-1 7.5-1 11 0" />
                            <path d="M8 9.5c2.5-1 5.5-1 8 0" />
                          </svg>
                        )}
                        {platform === "Apple Podcasts" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                            <line x1="12" x2="12" y1="19" y2="22" />
                          </svg>
                        )}
                        {platform === "Google Podcasts" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="2" />
                            <path d="M4.93 19.07a10 10 0 0 1 0-14.14" />
                            <path d="M7.76 16.24a6 6 0 0 1 0-8.48" />
                            <path d="M16.24 7.76a6 6 0 0 1 0 8.48" />
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                          </svg>
                        )}
                      </div>
                      {platform}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
