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
	import { INPAGE_TRANSITION_DURATION, PRELOADER_DURATION } from '$lib/constants/animation';
	import ProjectCard from './project-card.svelte';
	import gsap from '$lib/gsap';
	import Cursor from './cursor.svelte';

	export let data;

	let cursor: HTMLElement;

	function setFullHeight() {
		const deviceWidth = window.matchMedia('(max-width: 1024px)');
		const vh = window.innerHeight * 0.01;
		if (deviceWidth.matches) {
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}
	}

	afterNavigate(({ from, type }) => {
		if (from?.route.id === '/') return;
		const delay = type === 'enter' ? PRELOADER_DURATION + 0.3 : INPAGE_TRANSITION_DURATION;
		animateBottomSection().delay(delay);
		animateHeroText().delay(delay);
	});

	onMount(() => {
		setFullHeight();
		animateProjectCard();
		animateSkillSections();
	});

	function updateCursor(e: MouseEvent) {
		const x = e.clientX;
		const y = e.clientY;

		gsap.to(cursor, {
			x,
			y
		});
	}

	let cursorContent: Cursor;

	function animateCursorEnter(e: MouseEvent) {
		if (cursorContent) cursorContent.$destroy();
		const contentType = (e.target as HTMLElement).dataset.type;

		cursorContent = new Cursor({ target: cursor, props: { type: contentType } });

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
</script>

<svelte:window on:resize={setFullHeight} on:mousemove={updateCursor} />

<div
	bind:this={cursor}
	id="cursor"
	class="fixed z-[1000] top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-32 h-32 p-6 bg-brand-700 rounded-full scale-0 pointer-events-none">
</div>
<div id="hero" class="mb-32 relative flex flex-col justify-center items-center">
	<h1
		id="hero-text"
		class="font-fira-sans mx-auto text-gray-700 text-heading-4 sm:text-heading-3 min-[968px]:text-heading-2 xl:text-heading-1">
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<p class="text-brand-500 hover:text-brand-600 transition-colors">
			<a href="/about" data-type="about" on:mouseenter={animateCursorEnter} on:mouseleave={animateCursorOut}
				>Frontend Developer,</a>
		</p>
		<p>
			<span class="text">Who</span>
			<a
				href="/#"
				data-type="crafts"
				on:mouseenter={animateCursorEnter}
				on:mouseleave={animateCursorOut}
				class="text-brand-500 hover:text-brand-600 transition-colors">Crafts</a>
			<span class="text">Visual Experience</span>
		</p>
		<p>
			<span class="text">and</span>
			<span class="sometime inline-block relative text-body-base lg:text-body-xl">(sometimes)</span>
			<a
				href="/#"
				data-type="writes"
				on:mouseenter={animateCursorEnter}
				on:mouseleave={animateCursorOut}
				class="write relative inline-block text-brand-500 hover:text-brand-600 transition-colors">Writes</a>
		</p>
		<p class="text">on the Web</p>
	</h1>
	<div id="hero-bottom-section" class="pb-8 absolute bottom-0 left-0 w-full flex items-end justify-between">
		<div class="flex flex-col items-start text-body-lg max-sm:hidden">
			<span class="font-bold text-gray-800">Fullstack</span><span class="text-gray-600">capable</span>
		</div>
		<div class="">
			<div class="inline-flex flex-col items-center text-body-base text-gray-800">
				<MoveDown size="40" aria-hidden="true" class="animate-bounce" />
				Scroll down
			</div>
		</div>
		<div class=" flex flex-col items-start text-body-lg">
			<span class="font-bold text-gray-800">Sharing</span><span class="text-gray-600">knowledge</span>
		</div>
	</div>
</div>

<div class="pb-32">
	<h2 id="projects" class="text-heading-3 lg:text-heading-2 font-bold text-brand-800 mb-8 md:mb-16">
		Selected Projects.
	</h2>
	<ul class="w-full flex flex-col items-start divide-y-2">
		{#each data.contents as content}
			<ProjectCard {content} />
		{/each}
	</ul>
</div>
<div class="pb-32">
	<h2 class="text-heading-3 lg:text-heading-2 font-bold text-brand-800 mb-6">Technologies.</h2>
	<SkillsList />
</div>

<style>
	#hero {
		height: calc(var(--vh, 1vh) * 100);
	}
</style>
