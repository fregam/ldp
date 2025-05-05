'use client'

import React, { forwardRef } from 'react'
import clsx from 'clsx'

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Optional additional classes to apply
   */
  className?: string
  /**
   * If the label should be visually hidden but still accessible to screen readers
   */
  srOnly?: boolean
}

/**
 * Label component for form elements
 */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, srOnly, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={clsx(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          srOnly && 'sr-only',
          className
        )}
        {...props}
      >
        {children}
      </label>
    )
  }
)

Label.displayName = 'Label'