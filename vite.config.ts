import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
            // alias: { '#lib': 'src/lib' },

			// adapter-static génère un site 100% statique (HTML/CSS/JS) dans le dossier build/
			// voir https://svelte.dev/docs/kit/adapter-static
			adapter: adapter({ fallback: '404.html' }),

			// sur GitHub Pages, le site est servi sous /<nom-du-repo>/
			// BASE_PATH est défini par le workflow GitHub Actions, vide en local
			paths: {
				base: (process.env.BASE_PATH ?? '') as '' | `/${string}`
			}
		})
	]
});
