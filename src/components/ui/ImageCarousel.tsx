"use client"

import type React from "react"

import { useState, useEffect, useRef, type TouchEvent } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface WorkshopCarouselProps {
  images: string[]
  autoplaySpeed?: number
  parallaxIntensity?: number
}

export function WorkshopCarousel({ images, autoplaySpeed = 5000, parallaxIntensity = 20 }: WorkshopCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isTouching, setIsTouching] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState<boolean[]>([])

  // Initialize isLoaded array
  useEffect(() => {
    setIsLoaded(new Array(images.length).fill(false))
  }, [images.length])

  // Handle image load
  const handleImageLoad = (index: number) => {
    setIsLoaded((prev) => {
      const newLoaded = [...prev]
      newLoaded[index] = true
      return newLoaded
    })
  }

  // Handle autoplay
  useEffect(() => {
    if (isHovering || isTouching) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, autoplaySpeed)

    return () => clearInterval(interval)
  }, [images.length, autoplaySpeed, isHovering, isTouching])

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return

    const { left, top, width, height } = carouselRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5

    setMousePosition({ x, y })
  }

  // Handle touch events for swiping
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setIsTouching(true)
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    setIsTouching(false)

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50

    if (touchStart - touchEnd > minSwipeDistance) {
      // Swiped left, go to next slide
      goToNextSlide()
    } else if (touchEnd - touchStart > minSwipeDistance) {
      // Swiped right, go to previous slide
      goToPrevSlide()
    }
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  // Determine if we're on a mobile device
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  return (
    <div
      ref={carouselRef}
      className="relative mx-auto h-[300px] w-full max-w-4xl overflow-hidden rounded-sm shadow-xl sm:h-[400px] md:h-[500px] lg:h-[600px]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Images */}
      {images.map((image, index) => {
        const isActive = index === currentIndex
        const isPrev = index === (currentIndex - 1 + images.length) % images.length
        const isNext = index === (currentIndex + 1) % images.length

        // Calculate parallax transform - disable on mobile
        const translateX = isActive && !isMobile ? mousePosition.x * parallaxIntensity : 0
        const translateY = isActive && !isMobile ? mousePosition.y * parallaxIntensity : 0

        return (
          <div
            key={index}
            className={cn(
              "absolute inset-0 h-full w-full transition-all duration-1000 ease-in-out",
              isActive ? "z-20 opacity-100" : "z-10 opacity-0",
            )}
            style={{
              transform: isActive ? `scale(1.1) translate(${translateX}px, ${translateY}px)` : "scale(1)",
            }}
          >
            {/* Placeholder while image loads */}
            {!isLoaded[index] && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-slate-600"></div>
              </div>
            )}

            <Image
              src={image || "/placeholder.svg?height=600&width=800"}
              alt={`Workshop image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority={isActive || isPrev || isNext}
              onLoad={() => handleImageLoad(index)}
              onError={() => handleImageLoad(index)} // Mark as loaded even on error to remove spinner
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        )
      })}

      {/* Navigation arrows */}
      <button
        className="absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-slate-800 shadow-md transition-all hover:bg-white hover:text-slate-900 sm:left-4 sm:p-2"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
      <button
        className="absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-slate-800 shadow-md transition-all hover:bg-white hover:text-slate-900 sm:right-4 sm:p-2"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-1.5 sm:gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all sm:h-2.5 sm:w-2.5",
              index === currentIndex ? "bg-white w-6 sm:w-8" : "bg-white/60 hover:bg-white/80",
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Caption overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/70 to-transparent p-4 text-white sm:p-6">
        <p className="text-xs text-white/90 sm:text-sm md:text-base">
          Espacios de reflexión, aprendizaje y transformación para el bienestar integral
        </p>
      </div>
    </div>
  )
}
