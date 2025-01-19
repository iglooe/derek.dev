import Link from "next/link"
import type { Project } from "@/types"

import { siteConfig } from "@/config/site"
import { toTitleCase } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogParagraph,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Icons } from "@/components/icons"

import { LanguageBadge, LanguageCircle } from "../language"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const title = toTitleCase(project.name ?? "")

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Card className="rounded-none">
            <CardHeader className="flex-1 text-left">
              <CardTitle className="line-clamp-1 text-zinc-900/80 dark:text-white/80">
                {title}
              </CardTitle>
              <CardDescription className="line-clamp-2 pt-2">
                {project.description ?? "No description provided"}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex space-x-4 text-sm text-muted-foreground">
              <LanguageCircle language={project.language} />
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-1 text-left">
              {title}
              <span className="ml-2">
                <LanguageBadge language={project.language} />
              </span>
            </DialogTitle>
            <Separator className="my-4" />
            <DialogParagraph className="pb-4 pt-2 text-left tracking-tight text-foreground">
              {project.description ?? "No description provided"}
            </DialogParagraph>
            <DialogDescription>
              <Link
                href={project.homepage ?? siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-zinc-900 dark:hover:text-white/85"
              >
                <div className="flex flex-row items-center gap-2">
                  <Icons.globe className="mr-2 size-5" />
                  {project.homepage ?? "No deployment URL"}
                </div>
              </Link>
              <Link
                href={project.html_url ?? siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-zinc-900 dark:hover:text-white/85"
              >
                <div className="flex flex-row items-center gap-2">
                  <Icons.repo className="mr-2 size-5" />
                  {project.html_url ?? "Unknown name"}
                </div>
              </Link>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
