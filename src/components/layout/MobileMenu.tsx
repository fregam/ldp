'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavItem {
  label: string
  href: string
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre mí', href: '/Sobre-mi' },
  { label: 'Consulta', href: '/Consulta' },
  { label: 'Talleres', href: '/Talleres' },
  { label: 'Podcast', href: '/Podcast' },
  { label: 'Club de Lectura', href: '/ClubLectura' },
]

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname() || '/'

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 h-[100vh] bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Side drawer */}
          <motion.aside
            className="fixed top-0 left-0 h-[100vh] w-64 bg-[var(--color-background)] z-50 shadow-lg p-6"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="mb-8 p-2"
            >
              <X size={24} />
            </button>

            {/* Navigation items */}
            <nav>
              <ul className="space-y-4">
                {NAV_ITEMS.map(({ label, href }) => {
                  const isActive = pathname === href
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={onClose}
                        className={clsx(
                          'block text-lg font-medium transition-colors',
                          isActive
                            ? 'text-[var(--color-primary)]'
                            : 'text-[var(--color-foreground)] hover:text-[var(--color-primary)]'
                        )}
                      >
                        {label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
