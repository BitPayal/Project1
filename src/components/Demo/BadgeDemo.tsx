import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card"

// Simple Badge component that uses your design tokens
function Badge({ variant = "default", children }) {
  const variants = {
    default: "bg-[var(--primary-500)] text-white",
    secondary: "bg-[var(--blue-500)] text-white",
    destructive: "bg-[var(--red-500)] text-white",
    outline: "border border-[var(--grey-300)] text-[var(--foreground)] bg-transparent",
    success: "bg-[var(--green-500)] text-white",
    warning: "bg-[var(--yellow-500)] text-black",
  }

  return (
    <span
      className={`px-3 py-1 text-sm rounded-full font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  )
}

export default function BadgeDemo() {
  return (
    <div className="p-6">
      <Card className="border shadow-md rounded-xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Badge Showcase</CardTitle>
          <CardDescription>
            Examples of different badge variants (using your design tokens)
          </CardDescription>
        </CardHeader>

        <CardContent className="flex gap-3 flex-wrap">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
        </CardContent>
      </Card>
    </div>
  )
}
