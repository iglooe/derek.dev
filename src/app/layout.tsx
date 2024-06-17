import type { Metadata, Viewport } from "next"
import { env } from "@/env.js"

import "@/styles/globals.css"

import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { siteConfig } from "@/config/site"
import { absoluteUrl, cn } from "@/lib/utils"
import { SiteFooter } from "@/components/layouts/footer"
import { SiteHeader } from "@/components/layouts/site-header"
import { MagicCard, MagicContainer } from "@/components/spotlight"
import { TailwindIndicator } from "@/components/tailwind-indicator"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "nextjs",
    "react",
    "react server components",
    "derek.dev",
    "derek.dev website",
  ],
  authors: [
    {
      name: "Derek Day",
      url: "https://github.com/iglooe",
    },
  ],
  creator: "Derek",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@VinceBarter",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: absoluteUrl("/site.webmanifest"),
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "dark min-h-screen bg-background font-sans antialiased selection:bg-primary selection:text-black dark:selection:bg-secondary dark:selection:text-white",
            GeistSans.variable,
            GeistMono.variable
          )}
        >
          <div className="relative flex min-h-screen flex-col">
            <MagicContainer>
              <MagicCard>
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <SiteFooter />
              </MagicCard>
            </MagicContainer>
          </div>
          <TailwindIndicator />
        </body>
      </html>
    </>
  )
}
