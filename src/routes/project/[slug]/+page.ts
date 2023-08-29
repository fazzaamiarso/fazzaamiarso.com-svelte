import { siteTitleBase } from '$lib/site/config';
import type { Content } from '$lib/types';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const content = await import(`../../../contents/${params.slug}.md`);
		const meta = content.metadata as Content;
		return {
			content: content.default,
			meta,
			seo: {
				title: `${meta.title} - ${siteTitleBase}`,
				description: meta.description
			}
		};
	} catch (e) {
		console.log('Error');
		throw error(404, `Could not find ${params.slug}`);
	}
}
