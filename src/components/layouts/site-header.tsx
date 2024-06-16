import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

import { Icons } from "../icons"

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
              <Icons.link className="-mt-0.5 ml-1.5 size-4 text-muted-foreground/50" />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
