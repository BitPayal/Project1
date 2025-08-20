import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card"
import { Checkbox } from "../ui/checkbox"

export default function CheckboxDemo() {
  return (
    <div className="p-6">
      <Card className="border shadow-md rounded-xl">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Checkbox Showcase</CardTitle>
          <CardDescription>Default, hover, focus, selected & intermediate states</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <label className="flex items-center gap-2">
            <Checkbox id="default" />
            <span>Default</span>
          </label>

          <label className="flex items-center gap-2">
            <Checkbox id="hover" className="hover:bg-blue-100" />
            <span>Hover</span>
          </label>

          <label className="flex items-center gap-2">
            <Checkbox id="focus" className="focus-visible:ring-2 focus-visible:ring-blue-400" />
            <span>Focus</span>
          </label>

          <label className="flex items-center gap-2">
            <Checkbox id="selected" defaultChecked />
            <span>Selected</span>
          </label>

          <label className="flex items-center gap-2">
            <Checkbox id="intermediate" checked={"indeterminate" as any} />
            <span>Intermediate</span>
          </label>
        </CardContent>
      </Card>
    </div>
  )
}
