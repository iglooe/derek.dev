"server-only"

import React from "react"

import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

type LanguageColors = {
  [key: string]: string
}

const languageColors: LanguageColors = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  Ruby: "#701516",
  PHP: "#4F5D95",
  CSS: "#563d7c",
  HTML: "#e34c26",
  "C++": "#f34b7d",
  C: "#555555",
  "C#": "#178600",
  Go: "#00ADD8",
  Rust: "#dea584",
  Swift: "#ffac45",
  Kotlin: "#F18E33",
  Dart: "#00B4AB",
  Shell: "#89e051",
  Vue: "#41b883",
}

const useLanguageColor = (language: string | null | undefined) => {
  const getLanguageColor = (): string => {
    if (!language) return "#ededed"
    return languageColors[language] || "#ededed"
  }

  return { getLanguageColor }
}

interface LanguageDisplayProps {
  language: string | null | undefined
}

const LanguageCircle: React.FC<LanguageDisplayProps> = ({ language }) => {
  const { getLanguageColor } = useLanguageColor(language)

  return (
    <div className="flex items-center">
      <Icons.circle
        className="mr-1 size-3 fill-current"
        style={{ color: getLanguageColor() }}
        aria-hidden="true"
      />
      {language ?? "Unknown"}
    </div>
  )
}

const LanguageBadge: React.FC<LanguageDisplayProps> = ({ language }) => {
  const { getLanguageColor } = useLanguageColor(language)

  return (
    <Badge
      className="text-current"
      style={{
        color: getLanguageColor(),
        borderColor: getLanguageColor(),
      }}
      variant="outline"
    >
      {language ?? "Unknown language"}
    </Badge>
  )
}

export { LanguageCircle, LanguageBadge }
