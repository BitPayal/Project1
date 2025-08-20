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
            Buttons arranged by size (rows) and color (columns).
          </CardDescription>
        </CardHeader>

        <CardContent className="overflow-x-auto">
          {/* Table-like layout without borders */}
          <div className="inline-block min-w-full">
            {/* Header Row */}
            <div className="grid grid-cols-7 gap-4 mb-4">
              <div className="font-semibold">Size</div>
              {colors.map((color) => (
                <div key={color} className="font-semibold capitalize">
                  {color}
                </div>
              ))}
            </div>

            {/* Rows for sizes */}
            {sizes.map((size) => (
              <div
                key={size.key}
                className="grid grid-cols-7 gap-4 items-center mb-4"
              >
                {/* Row label */}
                <div className="font-medium">{size.label}</div>

                {/* Buttons for each color */}
                {colors.map((color) => (
                  <Button
                    key={color}
                    color={color}
                    size={size.key}
                    className={`
                      w-full
                      ${
                        size.key === "sm"
                          ? "rounded-full" // most rounded
                          : size.key === "default"
                          ? "rounded-lg" // medium rounded
                          : "rounded-md" // less rounded
                      }
                    `}
                  >
                    {size.label}
                  </Button>
                ))}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
