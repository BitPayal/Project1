import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        placeholder=" " // 👈 needed so `:placeholder-shown` works
        className={cn(
          "w-full rounded-lg border bg-white px-3 py-2 text-sm outline-none transition-all",

          // ✅ Default grey border
          "border-[var(--grey-200)]",

          // ✅ Hover
          error
            ? "hover:border-[var(--red-300)]"
            : "hover:border-[var(--primary-300)]",

          // ✅ Focus
          error
            ? "focus:border-[var(--red-500)] focus:ring-2 focus:ring-[var(--red-200)]"
            : "focus:border-[var(--primary-500)] focus:ring-2 focus:ring-[var(--primary-200)]",

          // ✅ Filled (when input has value)
          error
            ? "[&:not(:placeholder-shown)]:border-[var(--red-400)] [&:not(:placeholder-shown)]:bg-[var(--red-50)]"
            : "[&:not(:placeholder-shown)]:border-[var(--grey-400)] [&:not(:placeholder-shown)]:bg-[var(--primary-50)]",

          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input }
