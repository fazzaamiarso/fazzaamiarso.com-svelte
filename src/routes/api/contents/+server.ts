import type { Content } from '$lib/types';
import { json } from '@sveltejs/kit';

async function getContents() {
	let contents: Content[] = [];

	const paths = import.meta.glob('/src/contents/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Content, 'slug'>;
			const post = { ...metadata, slug } satisfies Content;
			contents.push(post);
		}
	}

	contents = contents.sort(
		(first, second) =>
			new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return contents;
}

export async function GET() {
	const contents = await getContents();
	return json(contents);
}
