<script lang="ts">
	import { SlidersHorizontal } from 'lucide-svelte';
	import ProjectCard from '../../lib/components/project-card.svelte';

	export let data;
</script>

<div class="pt-40 border-b-[1px]">
	<div class="layout flex items-center">
		<h1 class="text-heading-2 ml-auto text-brand-800">Projects.</h1>
	</div>
</div>
<div class="py-4">
	<div class="layout flex items-center gap-8">
		<button class="flex items-center gap-2">
			<SlidersHorizontal />
			<span>Filters</span>
		</button>
	</div>
</div>
<ul class="w-full flex flex-col items-start">
	{#each data.projects as content}
		<ProjectCard {content} />
	{/each}
</ul>
