import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Icons } from "../icons"
import { Shell } from "../shell"

export function SiteFooter() {
  return (
    <Shell variant="markdown">
      <div className="prose">
        <hr className="h-px border-0 bg-neutral-700"></hr>
        <footer className="flex justify-between">
          <span className="text-primary">Derek Day</span>
          <div className="flex gap-4">
            <Link
              href={`mailto:${siteConfig.email}`}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.mail className="text-neutral-300" />
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.gitHub className="text-neutral-300" />
            </Link>
            <Link
              href={siteConfig.links.discord}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.discord className="text-neutral-300" />
            </Link>
            <Link href={siteConfig.links.x} target="_blank" rel="noreferrer">
              <Icons.x className="text-neutral-300" />
            </Link>
          </div>
        </footer>
      </div>
    </Shell>
  )
}
