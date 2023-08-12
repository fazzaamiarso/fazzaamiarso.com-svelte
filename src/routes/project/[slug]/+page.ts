import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const content = await import(`../../../contents/${params.slug}.md`);
		return {
			content: content.default,
			meta: content.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
