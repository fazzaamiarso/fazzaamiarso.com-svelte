export type Categories = 'sveltekit' | 'svelte';

export interface Content {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
	cover: string;
	techs: string[];
	website: string;
	github: string;
}
