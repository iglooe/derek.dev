import * as React from "react"

import { Icons } from "../icons"

type BGGridProps = {
  children: React.ReactNode
}

export function BGGrid({ children }: BGGridProps) {
  return (
    <div className="relative min-h-screen w-full">
      {children}
      <div className="fixed inset-0 z-[-1] bg-transparent">
        <Icons.grid />
      </div>
    </div>
  )
}
