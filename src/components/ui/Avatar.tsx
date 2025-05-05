import React, { FC, ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx'

export interface AvatarProps {
  src: string | StaticImageData
  alt: string
  className?: string
}

export const Avatar: FC<AvatarProps> = ({ src, alt, className = '' }) => (
  <div
    className={clsx(
      'w-10 h-10 sm:w-12 sm:h-12 rounded-full',
      'border-2 border-white overflow-hidden bg-white',
      className
    )}
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 2.5rem, 3rem"
      className="object-cover"
    />
  </div>
)

export interface AvatarGroupProps {
  children: ReactNode
  className?: string
}

export const AvatarGroup: FC<AvatarGroupProps> = ({ children, className = '' }) => (
  <div className={clsx('flex -space-x-3', className)}>
    {children}
  </div>
)
