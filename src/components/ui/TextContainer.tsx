import * as React from "react"
// import clsx from "clsx"

type TextContainerProps = React.HTMLAttributes<HTMLDivElement>;

const TextContainer = React.forwardRef<HTMLDivElement, TextContainerProps>(
  // ({ className, children, ...props }, ref) 
  ()=> {
    return (null
      // <div
      //   ref={ref}
      //   className={clsx(
      //     "w-full h-auto min-h-[40px] sm:min-h-[48px] md:min-h-[56px] lg:min-h-[64px] p-3.5 sm:p-4 rounded-xl border border-[var(--color-foreground)] hover:border-[var(--color-accent)] transition-all duration-700 ease-in-out"
      //   )}
      //   {...props}
      // >
      //   {children}
      // </div>
    )
  }
)
TextContainer.displayName = "TextContainer"

export { TextContainer }