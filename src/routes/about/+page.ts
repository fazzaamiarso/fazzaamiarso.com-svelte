import * as config from '$lib/site/config';

export async function load() {
	return {
		seo: {
			title: `About - ${config.siteTitleBase}`,
			description: config.siteDescription
		}
	};
}
