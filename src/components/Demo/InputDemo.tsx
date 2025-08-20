import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export default function InputDemo() {
  return (
    <div className="p-6">
      <Card className="border shadow-md rounded-xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Sign Up</CardTitle>
          <CardDescription>Enter your details to create an account</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input id="name" type="text" placeholder="John Doe" />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input id="password" type="password" placeholder="********" />
          </div>

         {/* Error (always red styled) */}
<div className="flex flex-col gap-1">
  <label htmlFor="error" className="text-sm font-medium text-red-600">
    Error
  </label>
  <Input id="error" type="text" placeholder="Invalid input" error />
</div>

        </CardContent>

        <CardFooter>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
