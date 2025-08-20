import * as React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card"
import { UserCircle } from "iconoir-react"

export default function AvatarDemo() {
  return (
    <div className="p-6">
      <Card className="border shadow-md rounded-xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Avatar Showcase</CardTitle>
          <CardDescription>
            Same avatar image shown in different sizes.  
            If the image fails, a default user icon is shown.
          </CardDescription>
        </CardHeader>

        {/* Align content to left */}
        <CardContent className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-6">
            
            {/* Extra Small */}
            <div className="flex flex-col items-center gap-2">
              <Avatar className="size-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>
                  <UserCircle className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">XS</span>
            </div>

            {/* Small */}
            <div className="flex flex-col items-center gap-2">
              <Avatar className="size-10">
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>
                  <UserCircle className="w-5 h-5" />
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">SM</span>
            </div>

            {/* Medium */}
            <div className="flex flex-col items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>
                  <UserCircle className="w-6 h-6" />
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">MD</span>
            </div>

            {/* Large */}
            <div className="flex flex-col items-center gap-2">
              <Avatar className="size-16">
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>
                  <UserCircle className="w-8 h-8" />
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">LG</span>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  )
}
