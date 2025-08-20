import * as React from "react"
import { cn } from "@/lib/utils"

interface LoaderProps extends React.SVGProps<SVGSVGElement> {
  size?: number
  className?: string
}

function Loader({ size = 24, className, ...props }: LoaderProps) {
  return (
    <svg
      className={cn("animate-spin text-blue-500", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  )
}

export { Loader }
