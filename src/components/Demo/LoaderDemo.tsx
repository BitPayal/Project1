import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card"
import { Loader } from "../ui/loader"

export default function LoaderDemo() {
  return (
    <div className="p-6">
      <Card className="border shadow-md rounded-xl">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Loader</CardTitle>
          <CardDescription>Different loader sizes</CardDescription>
        </CardHeader>

        <CardContent className="flex gap-4 items-center">
          <Loader size={32} />
          <Loader size={28} />
          <Loader size={24} />
          <Loader size={20} />
          <Loader size={16} />
        </CardContent>
      </Card>
    </div>
  )
}
