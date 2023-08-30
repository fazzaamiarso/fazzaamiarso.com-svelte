<script>
	import { LayoutList, RowsIcon } from 'lucide-svelte';
	import ProjectCard from '../(home)/project-card.svelte';

	export let data;
	$: view = data.view;
</script>

<div class="pt-40 border-b-[1px]">
	<div class="layout flex items-center">
		<h1 class="text-heading-2 ml-auto">Projects.</h1>
	</div>
</div>
<div class="py-4">
	<div class="layout flex items-center gap-4">
		<a href="?view=row"><RowsIcon class="text-gray-500" /> </a>
		<a href="?view=list"><LayoutList class="text-gray-500" /> </a>
	</div>
</div>
<ul class="relative w-full flex flex-col items-start">
	{#each data.projects as content}
		<ProjectCard {content} {view} />
		<ProjectCard {content} {view} />
	{/each}
</ul>
