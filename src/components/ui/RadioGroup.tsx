'use client'

import * as React from "react"
import { Circle } from "lucide-react"
import clsx from "clsx"

interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  name: string
}

const RadioGroupContext = React.createContext<{
  name: string
  value?: string
  onChange?: (value: string) => void
}>({
  name: ''
})

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, value, defaultValue, onChange, name, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue)
    
    const contextValue = React.useMemo(() => ({
      name,
      value: value !== undefined ? value : internalValue,
      onChange: (newValue: string) => {
        if (value === undefined) {
          setInternalValue(newValue)
        }
        onChange?.(newValue)
      }
    }), [name, value, internalValue, onChange])
    
    return (
      <RadioGroupContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={clsx("grid gap-2", className)}
          role="radiogroup"
          {...props}
        />
      </RadioGroupContext.Provider>
    )
  }
)
RadioGroup.displayName = "RadioGroup"

interface RadioGroupItemProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string
}

const RadioGroupItem = React.forwardRef<HTMLLabelElement, RadioGroupItemProps>(
  ({ className, value, id, disabled, ...props }, ref) => {
    const { name, value: groupValue, onChange } = React.useContext(RadioGroupContext)
    const uniqueId = React.useId()
    const inputId = id || `radio-${uniqueId}`
    const checked = groupValue === value
    
    return (
      <label
        ref={ref}
        htmlFor={inputId}
        className={clsx(
          "inline-flex items-center",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
      >
        <span className="relative flex items-center justify-center">
          <input
            type="radio"
            id={inputId}
            className="sr-only"
            name={name}
            value={value}
            checked={checked}
            disabled={disabled}
            onChange={() => onChange?.(value)}
            {...props}
          />
          <span
            className={clsx(
              "aspect-square h-4 w-4 rounded-full border border-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              checked ? "border-primary" : "border-input"
            )}
          >
            {checked && (
              <span className="flex items-center justify-center">
                <Circle className="h-2.5 w-2.5 fill-current text-primary" />
              </span>
            )}
          </span>
        </span>
      </label>
    )
  }
)
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }