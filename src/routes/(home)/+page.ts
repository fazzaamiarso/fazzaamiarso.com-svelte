import type { Content } from '$lib/types';
import * as config from '$lib/site/config';

export async function load({ fetch }) {
	const response = await fetch('api/contents');
	const contents: Content[] = await response.json();
	return {
		contents,
		seo: {
			title: config.siteTitle,
			description: config.siteDescription
		}
	};
}
