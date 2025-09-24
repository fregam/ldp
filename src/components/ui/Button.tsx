'use client'

import { FC, ReactNode, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  asChild?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  className = '',
  // asChild = false,
  ...props
}) => {
  const baseClasses = clsx(
    'bg-[var(--color-primary)]',
    'text-[var(--color-primary-foreground)]',
    'font-semibold',
    'py-sm px-md',
    'rounded-full',
    'shadow-lg',
    'hover:bg-[var(--color-secondary)]',
    'hover:text-[var(--color-secondary-foreground)]',
    'transition-all',
    className
  )

  // If using asChild, children must be a valid React element
  // if (asChild && React.isValidElement(children)) {
  //   const childElement = children as ReactElement<any, any>
  //   return React.cloneElement(childElement, {
  //     className: clsx(baseClasses, childElement.props.className),
  //     ...props,
  //   })
  // }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  )
}
