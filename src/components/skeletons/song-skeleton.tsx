import { Skeleton } from "@/components/ui/skeleton"

export function SongSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="size-16 rounded-none" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
