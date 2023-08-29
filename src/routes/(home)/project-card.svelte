<script lang="ts">
	import type { Content } from '$lib/types';
	import gsap from '$lib/gsap';
	import { ArrowRight } from 'lucide-svelte';
	import { onMount } from 'svelte';

	export let content: Content;

	let projectLink: HTMLElement;

	const href = `/project/${content.slug}`;

	onMount(() => {
		const mm = gsap.matchMedia();
		mm.add('(min-width:1024px)', (ctx) => {
			const scopedQuery = gsap.utils.selector(projectLink);

			const tl = gsap
				.timeline({ paused: true, defaults: { ease: 'quintic.Out' } })
				.to(scopedQuery('.arrow-right'), { x: 100 })
				.to(scopedQuery('.arrow-left'), { x: 15 }, '<+=.1')
				.to(scopedQuery('.text'), { x: 30 }, '<');

			ctx.add('onMouseenter', onMouseenter);
			ctx.add('onMouseout', onMouseout);

			projectLink.addEventListener('mouseenter', ctx.onMouseenter);
			projectLink.addEventListener('mouseout', ctx.onMouseout);

			function onMouseenter() {
				tl.play();
			}
			function onMouseout() {
				tl.reverse();
			}

			return () => {
				projectLink.removeEventListener('mouseenter', ctx.onMouseenter);
				projectLink.removeEventListener('mouseout', ctx.onMouseout);
			};
		});

		return () => mm.kill();
	});
</script>

<li class="relative py-16 w-full border-b-[1px] first:border-t-[1px]">
	<div class="layout flex flex-col gap-6 md:flex-row md:gap-24 xl:gap-40">
		<div class="flex flex-col items-start">
			<h3 class="font-bold text-brand-700 mb-4">
				{content.title}
			</h3>
			<p class="text-body-base md:text-body-lg max-w-prose mb-4">{content.description}</p>
			<a
				{href}
				class="overflow-hidden p-2 sm:p-3 text-white mt-auto text-body-sm sm:text-body-base inline-flex items-center gap-2 rounded-sm relative bg-brand-700"
				bind:this={projectLink}>
				<ArrowRight
					aria-hidden="true"
					class="arrow-left absolute left-0 -translate-x-full pointer-events-none"
					size={20} />
				<span class="text pointer-events-none">See project</span>
				<ArrowRight aria-hidden="true" class="arrow-right pointer-events-none" size={20} />
			</a>
		</div>
		<div class="w-full overflow-hidden relative">
			<div class="card-img-reveal bg-white inset-0 absolute"></div>
			<img src={content.cover} alt="" class="rounded-md aspect-video md:max-w-2xl w-full block origin-bottom" />
		</div>
	</div>
</li>

<style>
	h3 {
		font-size: clamp(2rem, 1.689rem + 1.326vw, 2.75rem);
	}
</style>
