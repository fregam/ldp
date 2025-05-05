'use client'

import React, { FC, ReactNode } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

export interface CardProps {
  /** Background color (Tailwind class or CSS var) */
  bgClass?: string
  /** Text/icon color */
  textClass?: string
  /** Optional side image */
  image?: {
    src: string
    alt: string
    className?: string
  }

  /** Icon component to render */
  icon?: ReactNode
  /** Card title */
  title: string
  /** Card description */
  description: string
  /** Button label and href */
  button?: {
    label: string
    href: string
  }
  /** Span columns on medium screens */
  mdColSpan?: number
}

/**
 * A reusable card with optional icon, side image, title, description, and action button.
 */
export const Card: FC<CardProps> = ({
  bgClass = 'bg-[var(--color-background)]',
  textClass = 'text-[var(--color-foreground)]',
  image,
  icon,
  title,
  description,
  button,
  mdColSpan = 1,
}) => (
  <div
    className={clsx(
      'relative w-full h-full',
      `md:col-span-${mdColSpan}`
    )}
  >
    <div
      className={clsx(
        bgClass,
        'p-5 xl:p-8 h-full flex flex-col md:flex-row rounded-md'
      )}
    >
      {/* Left: Icon & Text Content */}
      <div className="flex-1 flex flex-col">
        {icon && (
          <div className={clsx('mb-4', textClass)}>
            {icon}
          </div>
        )}
        <div className="flex-grow">
          <h3 className={clsx('text-lg font-bold xl:text-xl', textClass)}>
            {title}
          </h3>
          <p className={clsx('mt-2 text-sm', textClass)}>
            {description}
          </p>
        </div>
        {button && (
          <div className="sm:flex">
            <div className={clsx('relative rounded-full mt-3 px-3 py-1 text-sm',
              textClass,
              'ring-1 hover:ring-[var(--color-foreground)]',
              `ring-${textClass.replace('text-', '')}`)}
            >
              <Link
                href={button.href}
                className={clsx('font-semibold', textClass)}
              >
                {button.label} →
              </Link>
            </div>
          </div>

        )}
      </div>

      {/* Right: Image */}
      {image && (
        <div
          className={clsx(
            'hidden md:flex',      // ← hide on mobile, show ≥ md
            'mt-4 md:mt-0 md:ml-6',
            'md:w-1/3',
            'items-center justify-center'
          )}
        >
          <img
            src={image.src}
            alt={image.alt}
            className={clsx('w-full', image.className)}
          />
        </div>
      )}
    </div>
  </div >
)

Card.displayName = 'Card'