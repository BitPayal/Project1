import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon, MinusIcon } from "lucide-react"
import { cn } from "../../lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer size-5 shrink-0 rounded-md border border-blue-500 shadow-sm",
        // ✅ state styles
        "hover:bg-blue-50",                       // Hover effect
        "focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2", // Focus effect
        "data-[state=checked]:bg-blue-500 data-[state=checked]:text-white", // Checked
        "data-[state=indeterminate]:bg-blue-500 data-[state=indeterminate]:text-white", // Indeterminate
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        {props.checked === "indeterminate" ? (
          <MinusIcon className="h-3.5 w-3.5" />
        ) : (
          <CheckIcon className="h-3.5 w-3.5" />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
