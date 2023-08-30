import * as config from '$lib/site/config';
import type { Content } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/contents');
	const projects: Content[] = await response.json();

	return {
		seo: {
			title: `Projects - ${config.siteTitleBase}`,
			description: config.siteDescription
		},
		projects
	};
}
