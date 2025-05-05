'use client'

import React, { FC, ReactNode } from 'react'
import clsx from 'clsx'
import { motion, MotionProps } from 'framer-motion'

export interface ContainerProps {
  /** Content to render inside the container */
  children: ReactNode
  /** Optional additional classes */
  className?: string
  /** Enable fade-in animation */
  animate?: boolean
  /** Props to pass to motion.div when animate is true */
  motionProps?: MotionProps
}

/**
 * A responsive container with horizontal and vertical padding.
 * Optionally wraps its content in a Framer Motion container for animations.
 */
export const Container: FC<ContainerProps> = ({
  children,
  className = '',
  animate = false,
  motionProps = {},
}) => {
  const content = (
    <div
      className={clsx(
        'grid lg:grid-cols-5 items-center gap-6',
        className
      )}
    >
      {children}
    </div>
  )

  return animate ? <motion.div {...motionProps}>{content}</motion.div> : content
}

Container.displayName = 'Container'
