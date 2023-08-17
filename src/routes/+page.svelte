<script lang="ts">
	import * as config from '$lib/site/config';
	import { ArrowRight, MoveDown } from 'lucide-svelte';

	import { lenis } from '$lib/lenis';
	import { onMount } from 'svelte';
	import gsap from '$lib/gsap';
	import SkillsList from '$lib/components/skills-list.svelte';
	import { animateBottomSection, animateHeroText } from '$lib/animations/hero';
	import { afterNavigate } from '$app/navigation';
	import { INPAGE_TRANSITION_DURATION, PRELOADER_DURATION } from '$lib/constants/animation';

	export let data;

	let hero: HTMLElement;

	function setFullHeight() {
		const deviceWidth = window.matchMedia('(max-width: 1024px)');
		if (deviceWidth.matches) {
			hero.style.height = `${window.innerHeight}px`;
		}
	}

	afterNavigate(({ from, type }) => {
		if (from?.route.id === '/') return;
		animateBottomSection().delay(type === 'enter' ? PRELOADER_DURATION : INPAGE_TRANSITION_DURATION);
		animateHeroText().delay(type === 'enter' ? PRELOADER_DURATION : INPAGE_TRANSITION_DURATION);
	});

	onMount(() => {
		gsap.utils.toArray<HTMLElement>("[data-animate='skill']").forEach((skill) => {
			gsap.from(skill, {
				y: 50,
				opacity: 0,
				duration: 0.4,
				ease: 'power3.out',
				scrollTrigger: {
					start: 'top 80%',
					trigger: skill
				}
			});
		});

		gsap.utils.toArray<HTMLElement>("[data-animate='project-img-reveal']").forEach((item) => {
			gsap.to(item, {
				yPercent: -100,
				duration: 0.5,
				ease: 'sine.out',
				scrollTrigger: {
					start: 'top 70%',
					trigger: item
				}
			});
		});
	});
</script>

<svelte:window on:resize={setFullHeight} />
<svelte:head>
	<title>{config.siteTitle}</title>
	<meta name="description" content={config.siteDescription} />
	<!-- Open Graph START -->
	<meta property="og:title" content={config.siteTitle} />
	<meta property="og:url" content={config.siteUrl} />
	<!-- Open Graph END  -->
	<!-- Twitter card START -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={config.twitterHandle} />
	<!-- Twitter card END -->
</svelte:head>
<div class="mb-32 relative h-screen flex flex-col justify-center items-center" bind:this={hero}>
	<h1
		id="hero-text"
		class="font-fira-sans w-10/12 mx-auto text-brand-800 text-heading-3 sm:text-heading-2 lg:text-heading-1">
		<p>Frontend Developer</p>
		<p>Who Brings your Idea</p>
		<p>to the Web</p>
	</h1>
	<div id="hero-bottom-section" class="pb-8 absolute bottom-0 left-0 w-full flex items-end justify-between">
		<div class="flex flex-col items-start text-body-lg max-sm:hidden">
			<span class="font-bold text-gray-800">Fullstack</span><span class="text-gray-600">capable</span>
		</div>
		<div class="">
			<a
				href="#projects"
				on:click={(e) => {
					if (!e.currentTarget) return;
					lenis.scrollTo('#projects');
				}}
				class="inline-flex flex-col items-center text-body-lg text-gray-800">
				<MoveDown size="40" aria-hidden="true" class="animate-bounce" />
				Scroll down
			</a>
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
		{#each data.contents as post}
			<li class="py-8 flex flex-col gap-6 md:flex-row md:gap-24 xl:gap-40 w-full">
				<div class="flex flex-col items-start">
					<h3 class="font-bold text-brand-700 mb-4">
						<a href="/project/{post.slug}" class="">{post.title}</a>
					</h3>
					<p class="text-body-base md:text-body-lg max-w-prose mb-4">{post.description}</p>
					<a
						href="/project/{post.slug}"
						class="p-2 text-gray-600 mt-auto text-body-sm font-bold inline-flex items-center gap-3 ring-1 rounded-md ring-gray-400"
						>See project <ArrowRight aria-hidden="true" /></a>
				</div>
				<div class="w-full overflow-hidden relative">
					<div data-animate="project-img-reveal" class="bg-white inset-0 absolute"></div>
					<img src={post.cover} alt="" class="rounded-md aspect-video md:max-w-xl w-full block origin-bottom" />
				</div>
			</li>
		{/each}
	</ul>
</div>
<div class="pb-32">
	<h2 data-animate="tech" class="text-heading-3 lg:text-heading-2 font-bold text-brand-800 mb-6">Technologies.</h2>
	<SkillsList />
</div>

<style>
	h3 {
		font-size: clamp(2rem, 1.689rem + 1.326vw, 2.75rem);
	}
</style>
