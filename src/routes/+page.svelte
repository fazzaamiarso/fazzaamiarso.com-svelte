<script lang="ts">
	import * as config from '$lib/site/config';
	import { ArrowDownCircle } from 'lucide-svelte';

	import { lenis } from '$lib/lenis';
	import { onMount } from 'svelte';
	import gsap from '$lib/gsap';
	import SkillsList from '$lib/components/skills-list.svelte';

	onMount(() => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: "[data-animate='skill']"
				}
			})
			.from("[data-animate='skill']", { stagger: 0.15, y: 50, opacity: 0 });
	});
</script>

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
<div class="mb-32 h-screen relative flex flex-col justify-center items-center">
	<h1 class="font-fira-sans w-10/12 mx-auto text-brand-800 text-heading-3 sm:text-heading-2 lg:text-heading-1">
		Frontend Developer Who Bring your Idea to the Web
	</h1>
	<div class="pb-8 absolute bottom-0 left-0 w-full flex items-end justify-between">
		<div class="flex flex-col items-start text-body-lg">
			<span class="font-bold text-gray-800">Fullstack</span><span class="text-gray-600">capable</span>
		</div>
		<div class="">
			<a
				href="#projects"
				on:click={(e) => {
					if (!e.currentTarget) return;
					lenis.scrollTo('#projects');
				}}
			>
				<ArrowDownCircle size="40" aria-hidden="true" class="animate-bounce text-gray-800" />
			</a>
		</div>
		<div class=" flex flex-col items-start text-body-lg">
			<span class="font-bold text-gray-800">Sharing</span><span class="text-gray-600">knowledge</span>
		</div>
	</div>
</div>
<div class="pb-32">
	<h2 id="projects" class="text-heading-4 lg:text-heading-2 font-bold text-brand-800">Selected Projects.</h2>
</div>
<div class="pb-32">
	<h2 class="text-heading-4 lg:text-heading-2 font-bold text-brand-800 mb-6">Technologies.</h2>
	<SkillsList />
</div>
