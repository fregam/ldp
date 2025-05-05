import React from "react"
import clsx from "clsx"

// Reusable clip-path for both dividers
const SHAPE_CLIP_PATH =
  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  decorate?: boolean
}

function SectionDivider({ position }: { position: "top" | "bottom" }) {
  const isTop = position === "top"
  return (
    <div
      className={clsx(
        "absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl",
        isTop ? "-top-40 sm:-top-80" : "top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)]"
      )}
      aria-hidden="true"
    >
      <div
        className={clsx(
          "relative aspect-1155/678 w-[36.125rem] -translate-x-1/2 opacity-20",
          isTop
            ? "left-[calc(50%-11rem)] rotate-[30deg] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] bg-linear-to-tr from-[var(--color-primary)] to-[var(--color-secondary)]"
            : "left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] bg-linear-to-tr from-[var(--color-secondary)] to-[var(--color-primary)] scale-y-[-1]"
        )}
        style={{ clipPath: SHAPE_CLIP_PATH }}
      />
    </div>
  )
}

export function Section({
  children,
  className = "",
  decorate = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={clsx(
        "relative isolate px-6 lg:px-8",
        "bg-[var(--color-background)]",
        "text-[var(--color-foreground)]",
        className
      )}
      {...props}
    >
      {decorate && (
        <>
          <SectionDivider position="top" />
          <SectionDivider position="bottom" />
        </>
      )}

      {children}
    </section>
  )
}
