// Modified from: https://github.com/shadcn-ui/ui/blob/main/apps/www/app/examples/cards/components/github-card.tsx

import Link from "next/link"
import type { Project } from "@/types"

import { siteConfig } from "@/config/site"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="rounded-none">
      <Link
        href={project.html_url ?? siteConfig.links.githubProfile}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col bg-background transition-colors hover:bg-background/25"
      >
        <CardHeader className="flex-1">
          <CardTitle className="line-clamp-1">{project.name}</CardTitle>
          <CardDescription className="line-clamp-2">
            {project.description ?? "No description provided"}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Icons.circle
              className="mr-1 size-3 fill-current text-[#3178c6]"
              aria-hidden="true"
            />
            {project.language ?? "Unknown"}
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
