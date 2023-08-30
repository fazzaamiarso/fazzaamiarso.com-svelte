<script lang="ts">
	import { LayoutList, RowsIcon } from 'lucide-svelte';
	import ProjectCard from '../../lib/components/project-card.svelte';
	import clsx from 'clsx';

	export let data;
	$: view = data.view;
</script>

<div class="pt-40 border-b-[1px]">
	<div class="layout flex items-center">
		<h1 class="text-heading-2 ml-auto text-brand-800">Projects.</h1>
	</div>
</div>
<div class="py-4">
	<div class="layout flex items-center gap-8">
		<p class="text-body-base">View</p>
		<ul class="flex items-center gap-6 text-gray-500">
			<li>
				<a href="?view=row"
					><RowsIcon class={clsx('transition-colors', view === 'row' ? 'text-brand-500' : 'text-gray-500')} />
				</a>
			</li>
			<li>
				<a href="?view=list"
					><LayoutList class={clsx('transition-colors', view === 'list' ? 'text-brand-500' : 'text-gray-500')} />
				</a>
			</li>
		</ul>
	</div>
</div>
<ul class="relative w-full flex flex-col items-start">
	{#each data.projects as content}
		<ProjectCard {content} {view} />
	{/each}
</ul>
