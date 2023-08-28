import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/lib/components/mdsvex-layout.svelte'
	},
	rehypePlugins: [
		[
			rehypeExternalLinks,
			{
				rel: ['nofollow'],
				referrerpolicy: 'no-referrer',
				target: '_blank'
			}
		]
	]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: [mdsvex(mdsvexOptions), vitePreprocess()],

	kit: {
		adapter: adapter()
	}
};

export default config;
