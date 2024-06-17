import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"

import { getTopArtists, getTopTracks } from "@/lib/actions/spotify"
import { Shell } from "@/components/shell"
import { SongSkeleton } from "@/components/skeletons/song-skeleton"

export default function Music() {
  return (
    <Shell variant="markdown">
      <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Top Tracks
      </h1>
      <div className="flex flex-col gap-y-4">
        <Suspense
          fallback={Array.from({ length: 10 }).map((_, i) => (
            <SongSkeleton key={i} />
          ))}
        >
          <Songs />
        </Suspense>
      </div>
      <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Top Artists
      </h1>
      <div className="flex flex-col gap-y-4">
        <Suspense
          fallback={Array.from({ length: 10 }).map((_, i) => (
            <SongSkeleton key={i} />
          ))}
        >
          <Artists />
        </Suspense>
      </div>
    </Shell>
  )
}

async function Songs() {
  const tracks = await getTopTracks()
  return (
    <>
      {tracks.map(({ artists, album, songUrl, title, image }) => (
        <div key={songUrl} className="flex flex-row items-center space-x-4">
          <Image
            src={image ?? ""}
            width={64}
            height={64}
            alt={title}
            className="size-16"
          />
          <div className="flex flex-col">
            <Link href={songUrl}>
              <h3 className="line-clamp-1 font-semibold text-zinc-100">
                {title}
              </h3>
            </Link>
            <p className="line-clamp-1 text-zinc-400">
              {artists.map(({ name }) => name).join(", ")}
            </p>
            <p className="line-clamp-1 text-zinc-400">{album}</p>
          </div>
        </div>
      ))}
    </>
  )
}

async function Artists() {
  const artists = await getTopArtists()

  return (
    <>
      {artists.map(({ name, url, image, followers }) => (
        <div key={name} className="flex flex-row items-center space-x-4">
          <Image
            src={image ?? ""}
            alt={name}
            width={64}
            height={64}
            className="size-16"
          />
          <div className="flex flex-col">
            <Link href={url}>
              <h3 className="font-semibold text-neutral-100">{name}</h3>
            </Link>
            <p className="text-zinc-400">{followers} followers</p>
          </div>
        </div>
      ))}
    </>
  )
}
