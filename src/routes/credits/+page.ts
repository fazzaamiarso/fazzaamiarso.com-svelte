import * as config from '$lib/site/config';

export async function load() {
	return {
		seo: {
			title: `Site Credits - ${config.siteTitleBase}`,
			description: config.siteDescription
		}
	};
}
