import Link from "next/link"
import type { Post } from "contentlayer/generated"

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article>
      <Link href={post.slug} className="group flex flex-col space-y-1.5">
        <h2 className="line-clamp-1 font-semibold text-zinc-950/80 transition-colors group-hover:text-zinc-950 dark:text-zinc-200/80 dark:group-hover:text-zinc-200">
          {post.title}
        </h2>
        <p className="line-clamp-1 text-sm text-muted-foreground">
          {post.description}
        </p>
      </Link>
    </article>
  )
}
