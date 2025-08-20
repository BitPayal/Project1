import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      color: {
        primary:
          "bg-[var(--primary-600)] text-white shadow-xs " +
          "hover:bg-[var(--primary-700)] active:bg-[var(--primary-800)] " +
          "focus:ring-2 focus:ring-[var(--primary-500)] focus-visible:ring-[var(--primary-500)]",
        red:
          "bg-[var(--red-600)] text-white shadow-xs " +
          "hover:bg-[var(--red-700)] active:bg-[var(--red-800)] " +
          "focus:ring-2 focus:ring-[var(--red-500)] focus-visible:ring-[var(--red-500)]",
        green:
          "bg-[var(--green-600)] text-white shadow-xs " +
          "hover:bg-[var(--green-700)] active:bg-[var(--green-800)] " +
          "focus:ring-2 focus:ring-[var(--green-500)] focus-visible:ring-[var(--green-500)]",
        blue:
          "bg-[var(--blue-600)] text-white shadow-xs " +
          "hover:bg-[var(--blue-700)] active:bg-[var(--blue-800)] " +
          "focus:ring-2 focus:ring-[var(--blue-500)] focus-visible:ring-[var(--blue-500)]",
        yellow:
          "bg-[var(--yellow-600)] text-white shadow-xs " +
          "hover:bg-[var(--yellow-700)] active:bg-[var(--yellow-800)] " +
          "focus:ring-2 focus:ring-[var(--yellow-500)] focus-visible:ring-[var(--yellow-500)]",
        grey:
          "bg-[var(--grey-600)] text-white shadow-xs " +
          "hover:bg-[var(--grey-700)] active:bg-[var(--grey-800)] " +
          "focus:ring-2 focus:ring-[var(--grey-500)] focus-visible:ring-[var(--grey-500)]",
      },
      size: {
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  color,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ color, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
