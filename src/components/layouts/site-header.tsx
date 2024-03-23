import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/layouts/mode-toggle"

export function SiteHeader() {
  return (
    <header className="w-full bg-transparent pt-4">
      <div className="container flex h-16 max-w-3xl items-center justify-between text-card-foreground dark:text-primary">
        <Link href="/" className="font-bold">
          {siteConfig.name}
          <span className="sr-only">Home</span>
        </Link>
        <nav className="flex items-center text-muted-foreground">
          <Button variant="ghost" size="icon" className="size-9" asChild>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.gitHub className="size-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="size-9">
            <Link
              href={siteConfig.links.discord}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.discord className="size-4 fill-current" />
              <span className="sr-only">Discord</span>
            </Link>
          </Button>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
