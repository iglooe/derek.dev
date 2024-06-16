import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
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
          <Button
            variant="link"
            size="sm"
            className="text-muted-foreground"
            asChild
          >
            <Link href="/blog">blog</Link>
          </Button>
          <Button
            variant="link"
            size="sm"
            className="text-muted-foreground"
            asChild
          >
            <Link href="/music">music</Link>
          </Button>
          <Button
            size="sm"
            variant="link"
            className="text-muted-foreground"
            asChild
          >
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              github
            </Link>
          </Button>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
