import React, { FC, ReactNode } from 'react'
import clsx from 'clsx'

export interface BadgeProps {
  children: ReactNode
  className?: string
}

export const Badge: FC<BadgeProps> = ({ children, className = '' }) => (
  <span
    className={clsx(
      'bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]',
      'text-xs font-medium py-1 px-3 rounded-full',
      className
    )}
  >
    {children}
  </span>
)
