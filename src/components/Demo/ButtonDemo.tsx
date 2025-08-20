import * as React from "react"
import { Button, buttonVariants } from "../ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card"
import type { VariantProps } from "class-variance-authority"

type ButtonVariants = VariantProps<typeof buttonVariants>
type ButtonColor = NonNullable<ButtonVariants["color"]>
type ButtonSize = NonNullable<ButtonVariants["size"]>

const colors: ButtonColor[] = ["primary", "red", "green", "blue", "yellow", "grey"]

const sizes: { key: ButtonSize; label: string }[] = [
  { key: "sm", label: "Small" },
  { key: "default", label: "Default" },
  { key: "lg", label: "Large" },
]

export default function ButtonDemo() {
  return (
    <div className="p-6">
      <Card className="border shadow-md rounded-xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Button Showcase</CardTitle>
          <CardDescription>
            Buttons of different colors and sizes with hover, active, and focus styles
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {colors.map((color) => (
            <div key={color}>
              <h3
                className="font-semibold mb-3 capitalize"
                style={{ color: `var(--${color}-600)` }}
              >
                {color} Buttons
              </h3>
              <div className="flex gap-4 flex-wrap">
                {sizes.map((size) => (
                  <Button key={size.key} color={color} size={size.key}>
                    {size.label} {color.charAt(0).toUpperCase() + color.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
