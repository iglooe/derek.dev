import "server-only"

import { unstable_cache as cache } from "next/cache"

import { projectSchema } from "@/lib/validations/project"

export async function getProjects({ count }: { count: 1 | 2 | 3 | 4 | 5 | 6 }) {
  return await cache(
    async () => {
      const res = await fetch(
        `https://api.github.com/users/iglooe/repos?type=owner&sort=updated&per_page=7`
      )

      if (!res.ok) {
        return []
      }

      const parsedRes = projectSchema.array().safeParse(await res.json())

      if (!parsedRes.success) {
        return []
      }

      const sortedProjects = parsedRes.data.slice(0, count)
      return sortedProjects
    },
    [`projects-${count}`],
    {
      revalidate: 3600,
    }
  )()
}
