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
  DialogSubtitle,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Icons } from "@/components/icons"

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
              <div className="flex items-center">
                <Icons.circle
                  className="mr-1 size-3 fill-current text-[#3178c6]"
                  aria-hidden="true"
                />
                {project.language ?? "Unknown"}
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-1 text-left text-primary">
              {title}
            </DialogTitle>
            <Separator className="my-4" />
            <DialogParagraph className="pb-4 text-left tracking-tight">
              {project.description ?? "No description provided"}
            </DialogParagraph>
            <div className="sr-only">Links</div>
            <DialogDescription>
              <Link
                href={project.homepage ?? siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-white/85"
              >
                <div className="flex flex-row items-center gap-2">
                  <Icons.globe className="mr-2 size-4" />
                  {project.homepage ?? "No deployment URL"}
                  <div className="sr-only">Deployment URL</div>
                </div>
              </Link>
              <Link
                href={project.html_url ?? siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-white/85"
              >
                <div className="flex flex-row items-center gap-2">
                  <Icons.gitHub className="mr-2 size-4" />
                  {project.html_url ?? "Unknown name"}
                  <div className="sr-only">Github Repository</div>
                </div>
              </Link>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <Button size="sm" type="button">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
