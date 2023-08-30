<script>
	import ProjectCard from '../(home)/project-card.svelte';

	export let data;
</script>

<div class="pt-40 border-b-[1px]">
	<div class="layout flex items-center">
		<h1 class="text-heading-2 ml-auto">Projects.</h1>
	</div>
</div>
<div class="py-4">
	<div class="layout flex items-center">
		<button type="button">Grid</button>
		<button type="button">List</button>
	</div>
</div>
<ul class="w-full flex flex-col items-start">
	{#each data.projects as content}
		<ProjectCard {content} />
	{/each}
</ul>
