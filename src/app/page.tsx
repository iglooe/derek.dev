import * as React from "react"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"
import { getProjects } from "@/lib/actions/github"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/cards/project-card"
import { Posts } from "@/components/posts"
import { Shell } from "@/components/shell"
import { PostCardSkeleton } from "@/components/skeletons/post-card-skeleton"
import { ProjectCardSkeleton } from "@/components/skeletons/project-card-skeleton"

export default function IndexPage() {
  return (
    <Shell variant="markdown" className="gap-12 pb-10 md:pb-12">
      <section className="prose prose-zinc dark:prose-invert">
        <p className="leading-loose">
          {`I'm`} <span className="font-bold">Derek</span>, and I enjoy building
          things for the web, watching movies, and skateboarding. Currently,{" "}
          {`I'm`} building with Next.js 14 along with the latest features,
          TailwindCSS for styling, and Typescript for consistency.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="prose prose-zinc text-xl font-semibold dark:prose-invert">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-colors hover:text-foreground"
          >
            Projects
            <span className="sr-only">Projects</span>
          </Link>
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <React.Suspense
            fallback={Array.from({ length: 6 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          >
            <Projects />
          </React.Suspense>
        </div>
        <div className="flex flex-row-reverse">
          <ViewAllRepos />
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="prose prose-zinc text-xl font-semibold dark:prose-invert">
          <Link
            href="/blog"
            className="no-underline transition-colors hover:text-foreground"
          >
            Blog
            <span className="sr-only">Blog</span>
          </Link>
        </h2>
        <div className="flex flex-col space-y-6">
          <React.Suspense
            fallback={Array.from({ length: 4 }).map((_, i) => (
              <PostCardSkeleton key={i} />
            ))}
          >
            <Posts />
          </React.Suspense>
        </div>
      </section>
    </Shell>
  )
}

async function Projects() {
  const projects = await getProjects({ count: 6 })

  return (
    <>
      {projects?.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </>
  )
}

function ViewAllRepos() {
  return (
    <Button asChild variant="ghost">
      <Link
        href={siteConfig.links.githubRepos}
        target="_blank"
        rel="noopener noreferrer"
        className="p-10 text-sm leading-loose text-zinc-900/80 no-underline transition-colors hover:text-foreground/80 dark:text-zinc-100/80 dark:hover:text-foreground/80"
      >
        View All Repositories
        <ArrowRightIcon className="ml-2 mt-1 size-5" />
        <span className="sr-only">Github Repositories</span>
      </Link>
    </Button>
  )
}
