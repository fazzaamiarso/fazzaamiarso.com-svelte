<script lang="ts">
	import type { Content } from '$lib/types';
	import { ArrowRight } from 'lucide-svelte';
	import clsx from 'clsx';
	import viewProject from '$lib/actions/viewProject';
	import { slide } from 'svelte/transition';

	export let content: Content;
	export let view: string | undefined = 'row';

	const href = `/project/${content.slug}`;
	const slideDuration = 500;
</script>

<li class="relative w-full border-b-[1px] first:border-t-[1px]">
	{#if view === 'row'}
		<div
			in:slide={{ delay: 300, duration: slideDuration }}
			out:slide={{ duration: slideDuration }}
			class="layout flex flex-col gap-6 md:flex-row md:gap-24 xl:gap-40 py-16">
			<div class="flex flex-col items-start">
				<h3 class="row font-bold text-brand-700 mb-4">
					{content.title}
				</h3>
				<p class={clsx('text-body-base md:text-body-lg max-w-prose mb-4 line-clamp-3')}>{content.description}</p>
				<a
					{href}
					class="overflow-hidden p-2 sm:p-3 text-white mt-auto text-body-sm sm:text-body-base inline-flex items-center gap-2 rounded-sm relative bg-brand-700"
					use:viewProject>
					<ArrowRight
						aria-hidden="true"
						class="arrow-left absolute left-0 -translate-x-full pointer-events-none"
						size={20} />
					<span class="text pointer-events-none">See project</span>
					<ArrowRight aria-hidden="true" class="arrow-right pointer-events-none" size={20} />
				</a>
			</div>
			<div class="project-container w-full relative overflow-hidden">
				<div class="card-img-reveal bg-white w-full h-full absolute top-0 left-0 translate-y-full"></div>
				<img src={content.cover} alt="" class="rounded-md aspect-video md:max-w-2xl w-full block origin-bottom" />
			</div>
		</div>
	{/if}
	{#if view === 'list'}
		<div
			in:slide={{ delay: 300, duration: slideDuration }}
			out:slide={{ duration: slideDuration }}
			class="layout grid grid-cols-3 gap-6 py-8">
			<h3 class="text-body-base font-dm-sans text-brand-700">
				{content.title}
			</h3>
			<div>{content.date}</div>
			<div>{content.categories}</div>
		</div>
	{/if}
</li>

<style>
	h3.row {
		font-size: clamp(2rem, 1.689rem + 1.326vw, 2.75rem);
	}
</style>
