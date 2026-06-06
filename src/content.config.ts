import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    featured: z.boolean().optional().default(false),
    status: z.enum(["active", "archived", "wip"]).optional().default("active"),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
  }),
});

const library = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/library" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    type: z.enum(["book", "paper", "article"]),
    link: z.string().url().optional(),
    notes: z.string().optional(),
  }),
});

export const collections = { projects, blog, library };
