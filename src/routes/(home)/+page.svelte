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

	export let data;

	function setFullHeight() {
		const deviceWidth = window.matchMedia('(max-width: 1024px)');
		const vh = window.innerHeight * 0.01;
		if (deviceWidth.matches) {
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}
	}

	afterNavigate(({ from, type }) => {
		if (from?.route.id === '/') return;
		const delay = type === 'enter' ? PRELOADER_DURATION : INPAGE_TRANSITION_DURATION;
		animateBottomSection().delay(delay);
		animateHeroText().delay(delay);
	});

	onMount(() => {
		setFullHeight();
		animateProjectCard();
		animateSkillSections();
	});
</script>

<svelte:window on:resize={setFullHeight} />

<div id="hero" class="mb-32 relative flex flex-col justify-center items-center">
	<h1
		id="hero-text"
		class="font-fira-sans w-10/12 mx-auto text-brand-600 text-heading-3 sm:text-heading-2 lg:text-heading-1">
		<p>Frontend Developer</p>
		<p>Who Brings your Idea</p>
		<p>to the Web</p>
	</h1>
	<div id="hero-bottom-section" class="pb-8 absolute bottom-0 left-0 w-full flex items-end justify-between">
		<div class="flex flex-col items-start text-body-lg max-sm:hidden">
			<span class="font-bold text-gray-800">Fullstack</span><span class="text-gray-600">capable</span>
		</div>
		<div class="">
			<div class="inline-flex flex-col items-center text-body-lg text-gray-800">
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
