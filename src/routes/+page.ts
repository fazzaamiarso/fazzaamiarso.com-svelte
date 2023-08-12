import type { Content } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/contents');
	const contents: Content[] = await response.json();
	return { contents };
}
