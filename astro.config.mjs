import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// var token = loadEnv(process.env.SENTRY_AUTH_TOKEN, process.cwd(), ''),
// pnpm does not allow you to import modules that are not directly installed in your project. If you are using pnpm, you will need to install vite to use the loadEnv helper.

// // https://astro.build/config
export default defineConfig({
	// your configuration options here...
	// https://docs.astro.build/en/reference/configuration-reference/
	output: 'static',
	site: 'http://localhost:4321',
	image: {
		domains: ['astro.build', 'picsum.photos'],
	},
	markdown: {
		drafts: true,
	},
	integrations: [
		mdx({
			drafts: true,
		}),
	],
	vite: {
		ssr: {
			noExternal: ['date-fns', 'open-props'],
		},
	},
	cacheDir: './my-custom-cache-directory',
});
