import * as z from "zod"

export const projectSchema = z.object({
  name: z.string().optional().nullable(),
  html_url: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  homepage: z.string().optional().nullable(),
  language: z.string().optional().nullable(),
  topics: z.array(z.string()).optional().nullable(),
})
