'use client'

import { useState, useEffect, JSX } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu'

interface NavItem {
  label: string
  href: string
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Consulta', href: '/Consulta' },
  { label: 'Talleres', href: '/Talleres' },
  { label: 'Podcast', href: '/Podcast' },
  { label: 'Club de Lectura', href: '/ClubLectura' },
  // { label: 'Contacto', href: '/Contacto' },
]

export default function Header(): JSX.Element {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname() || '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={clsx(
        'sticky top-0 w-full z-50 backdrop-blur-lg bg-[var(--color-background)] bg-opacity-60 transition-shadow',
        scrolled ? 'shadow-md' : 'shadow-sm'
      )}
      initial={false}
      animate={{ backdropFilter: scrolled ? 'blur(16px)' : 'blur(12px)' }}
    >
      <div
        className={clsx(
          'flex items-center justify-between px-6 py-2',
          'md:grid md:grid-cols-[1fr_max-content_1fr] md:items-center md:px-8 md:py-3',
          'relative',
        )}
      >
        {/* 1. Mobile Toggle */}
        <button
          className="md:hidden p-1"
          onClick={() => setOpen(true)}
          aria-label="Toggle menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* 2. Logo */}
        <Link
          href="/"
          className={clsx(
            // center on mobile, reset on md+
            'mx-auto md:mx-0',
            'md:col-start-1 md:justify-self-center',
          )}
        >
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className='transform scale-125 origin-center'
          >
            <Image
              src="/images/lucialogo-17.png"
              alt="PsicoCalma logo"
              width={scrolled ? 88 : 120}
              height={scrolled ? 88 : 120}
            />
          </motion.div>
        </Link>

        {/* 3. Invisible spacer to keep logo centered on mobile */}
        <div className="w-6 md:hidden" />

        {/* 4. Desktop Nav */}
        <ul className="hidden md:flex md:col-start-2 items-center space-x-6">
          {NAV_ITEMS.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="group relative text-[var(--color-foreground)] text-base font-medium hover:text-[var(--color-primary)] transition-colors"
                >
                  {label}
                  <span
                    className={clsx(
                      'absolute left-0 -bottom-1 h-[2px] bg-[var(--color-primary)] transition-all duration-300',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      {/* 5. Mobile side-drawer */}
      {open && <MobileMenu open={open} onClose={() => setOpen(false)} />}
    </motion.header>
  )
}
