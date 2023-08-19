<script lang="ts">
	import type { Content } from '$lib/types';
	import gsap from '$lib/gsap';
	import { ArrowRight } from 'lucide-svelte';
	import { onMount } from 'svelte';

	export let content: Content;

	let projectLink: HTMLElement;

	let tl: gsap.core.Timeline;

	const href = `/project/${content.slug}`;

	onMount(() => {
		const scopedQuery = gsap.utils.selector(projectLink);

		tl = gsap
			.timeline({ paused: true, defaults: { duration: 0.5, ease: 'power2.out' } })
			.to(scopedQuery('.ripple'), {
				scale: 2.5
			})
			.to(
				projectLink,
				{
					color: '#fff'
				},
				'<'
			)
			.to(
				scopedQuery('.arrow'),
				{
					xPercent: 20
				},
				'<25%'
			);
	});

	function setPosition(e: MouseEvent) {
		const scopedQuery = gsap.utils.selector(projectLink);

		const x = e.clientX - (e.target as HTMLAnchorElement).getBoundingClientRect().left;
		const y = e.clientY - (e.target as HTMLAnchorElement).getBoundingClientRect().top;

		gsap.set(scopedQuery('.ripple'), {
			left: x,
			top: y,
			width: projectLink.clientWidth,
			height: projectLink.clientWidth
		});
	}

	function startRipple(e: MouseEvent) {
		if (!tl.isActive()) setPosition(e);
		tl.play();
	}

	function reverseRipple(e: MouseEvent) {
		setPosition(e);
		tl.reverse();
	}
</script>

<li class="py-8 flex flex-col gap-6 md:flex-row md:gap-24 xl:gap-40 w-full">
	<div class="flex flex-col items-start">
		<h3 class="font-bold text-brand-700 mb-4">
			<a {href}>{content.title}</a>
		</h3>
		<p class="text-body-base md:text-body-lg max-w-prose mb-4">{content.description}</p>
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<a
			{href}
			class="project-link overflow-hidden p-3 text-gray-600 mt-auto text-body-base inline-flex items-center gap-2 ring-1 rounded-md ring-gray-400 relative"
			on:mouseenter={startRipple}
			on:mouseout={reverseRipple}
			bind:this={projectLink}>
			<span
				class="ripple absolute -z-10 bg-brand-500 block rounded-full scale-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
			></span>
			See project
			<ArrowRight aria-hidden="true" class="arrow pointer-events-none" />
		</a>
	</div>
	<div class="w-full overflow-hidden relative">
		<div class="card-img-reveal bg-white inset-0 absolute"></div>
		<img src={content.cover} alt="" class="rounded-md aspect-video md:max-w-xl w-full block origin-bottom" />
	</div>
</li>

<style>
	h3 {
		font-size: clamp(2rem, 1.689rem + 1.326vw, 2.75rem);
	}
</style>
