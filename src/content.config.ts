import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
	work: defineCollection({
		loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			tags_links: z.array(z.string()).optional(),
			img: z.string(),
			img_alt: z.string().optional(),
			github_repo: z.string().optional(),
		}),
	}),
};