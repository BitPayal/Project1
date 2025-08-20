import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card"
import { Progress } from "../ui/progress"

export default function ProgressDemo() {
  return (
    <div className="p-6 ">
      {/* Left card */}
      <Card className="border shadow-md rounded-xl ">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Progress Bar</CardTitle>
          <CardDescription>Different progress levels</CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          <Progress value={10} color="blue" />
          <Progress value={30} color="blue" />
          <Progress value={50} color="blue" />
          <Progress value={70} color="blue" />
          <Progress value={90} color="blue" />
        </CardContent>
      </Card>

      {/* Right card */}
      
    </div>
  )
}
