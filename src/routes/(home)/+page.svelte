<script lang="ts">
	import { MoveDown } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import SkillsList from './skills-list.svelte';
	import {
		animateBottomSection,
		animateHeroText,
		animateProjectCard,
		animateSkillSections
	} from '$lib/animations/hero';
	import { afterNavigate } from '$app/navigation';
	import {
		INPAGE_TRANSITION_DURATION,
		PRELOADER_DURATION
	} from '$lib/constants/animation';
	import ProjectCard from '$lib/components/project-card.svelte';
	import gsap from '$lib/gsap';
	import Cursor from './cursor.svelte';
	import * as config from '$lib/site/config';

	export let data;

	let cursor: HTMLElement;
	let cursorContent: Cursor;

	function setFullHeight() {
		const deviceWidth = window.matchMedia('(max-width: 1024px)');
		const vh = window.innerHeight * 0.01;
		if (deviceWidth.matches) {
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}
	}

	afterNavigate(({ from, type }) => {
		if (from?.route.id === '/') return;
		const delay =
			type === 'enter' ? PRELOADER_DURATION : INPAGE_TRANSITION_DURATION;
		animateBottomSection().delay(delay);
		animateHeroText().delay(delay);
	});

	onMount(() => {
		const mm = gsap.matchMedia();
		mm.add(
			'(min-width: 1024px)',
			(ctx) => {
				const heroTexts = gsap.utils.toArray<HTMLAnchorElement>('a');

				ctx.add('updateCursor', updateCursor);
				ctx.add('animateCursorEnter', animateCursorEnter);
				ctx.add('animateCursorOut', animateCursorOut);

				window.addEventListener('mousemove', updateCursor);
				heroTexts.forEach((text) => {
					text.addEventListener('mouseenter', animateCursorEnter);
					text.addEventListener('mouseleave', animateCursorOut);
				});

				function updateCursor(e: MouseEvent) {
					const x = e.clientX;
					const y = e.clientY;

					gsap.to(cursor, {
						x,
						y,
						duration: 0.2
					});
				}

				function animateCursorEnter(e: MouseEvent) {
					if (cursorContent) cursorContent.$destroy();
					const contentType = (e.target as HTMLElement).dataset.type;

					cursorContent = new Cursor({
						target: cursor,
						props: { type: contentType }
					});

					gsap.to(cursor, {
						duration: 0.2,
						scale: 1
					});
				}

				function animateCursorOut() {
					gsap.to(cursor, {
						duration: 0.2,
						scale: 0
					});
				}

				return () => {
					window.removeEventListener('mousemove', updateCursor);
					heroTexts.forEach((text) => {
						text.removeEventListener('mouseenter', animateCursorEnter);
						text.removeEventListener('mouseleave', animateCursorOut);
					});
				};
			},
			'#hero'
		);

		setFullHeight();
		animateProjectCard();
		animateSkillSections();
	});
</script>

<svelte:window on:resize={setFullHeight} />

<div
	bind:this={cursor}
	id="cursor"
	class="fixed z-[1000] top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-32 h-32 p-6 bg-brand-700 rounded-full scale-0 pointer-events-none">
</div>
<div
	id="hero"
	class="layout mb-32 relative flex flex-col justify-center items-center">
	<h1
		id="hero-text"
		class="font-fira-sans mx-auto text-gray-700 text-heading-4 sm:text-heading-3 min-[968px]:text-heading-2 xl:text-heading-1">
		<p>
			<a
				href="/about"
				data-type="about"
				class="text-brand-500 hover:text-brand-600 transition-colors lg:hover:cursor-none"
				>Frontend Developer,</a>
		</p>
		<p>
			<span class="text">Who</span>
			<a
				href="/#"
				data-type="crafts"
				class="text-brand-500 hover:text-brand-600 transition-colors lg:hover:cursor-none"
				>Crafts</a>
			<span class="text">Visual Experience</span>
		</p>
		<p>
			<span class="text">and</span>
			<span
				class="sometime inline-block relative text-body-base lg:text-body-xl"
				>(sometimes)</span>
			<a
				href={config.blogUrl}
				target="_blank"
				referrerpolicy="no-referrer"
				data-type="writes"
				class="write relative inline-block text-brand-500 hover:text-brand-600 transition-colors lg:hover:cursor-none"
				>Writes</a>
		</p>
		<p class="text">on the Web</p>
	</h1>
	<div
		id="hero-bottom-section"
		class="pb-8 absolute bottom-0 left-0 w-full flex items-end justify-between">
		<div class="flex flex-col items-start text-body-lg max-sm:hidden">
			<span class="font-bold text-gray-800">Fullstack</span><span
				class="text-gray-600">capable</span>
		</div>
		<div class="">
			<div
				class="inline-flex flex-col items-center text-body-base text-gray-800">
				<MoveDown size="40" aria-hidden="true" class="animate-bounce" />
				Scroll down
			</div>
		</div>
		<div class=" flex flex-col items-start text-body-lg">
			<span class="font-bold text-gray-800">Sharing</span><span
				class="text-gray-600">knowledge</span>
		</div>
	</div>
</div>

<div class="">
	<h2
		id="projects"
		class="layout text-heading-3 lg:text-heading-2 font-bold text-brand-800 mb-8 md:mb-16">
		Selected Projects.
	</h2>
	<ul class="w-full flex flex-col items-start">
		{#each data.contents as content}
			<ProjectCard {content} />
		{/each}
	</ul>
</div>
<div class="layout py-16">
	<h2
		class="text-heading-3 lg:text-heading-2 font-bold text-brand-800 mb-8 md:mb-16">
		Technologies.
	</h2>
	<SkillsList />
</div>

<style>
	#hero {
		height: calc(var(--vh, 1vh) * 100);
	}
</style>
