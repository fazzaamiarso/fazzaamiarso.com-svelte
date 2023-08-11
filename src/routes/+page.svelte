<script>
	import * as config from '$lib/site/config';
	import { ArrowDownCircle } from 'lucide-svelte';
	import {
		typescript,
		svelte,
		javascript,
		next,
		css,
		html,
		react,
		tailwind,
		astro,
		figma,
		gsap,
		redux,

		jest,

		playwright,

		cypress



	} from '$lib/assets/icons';
	import { lenis } from '$lib/lenis';

	const skills = [
		{ name: 'Svelte/Sveltekit', icon: svelte },
		{ name: 'Typescript', icon: typescript },
		{ name: 'Javascript', icon: javascript },
		{ name: 'Next.js', icon: next },
		{ name: 'CSS', icon: css },
		{ name: 'HTML', icon: html },
		{ name: 'React', icon: react },
		{ name: 'Tailwind', icon: tailwind },
		{ name: 'Astro', icon: astro },
		{ name: 'Figma', icon: figma },
		{ name: 'GSAP', icon: gsap },
		{ name: 'Redux', icon: redux },
		{ name: 'Jest', icon: jest },
		{ name: 'Playwright', icon: playwright },
		{ name: 'Cypress', icon: cypress },
	];
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
<div class="h-screen relative flex flex-col justify-center items-center">
	<h1 class="font-fira-sans w-10/12 mx-auto text-brand-800 text-heading-3 sm:text-heading-2 lg:text-heading-1">
		Frontend Developer Who Bring your Idea to the Web
	</h1>
	<div class="absolute bottom-0 left-0 w-full flex items-end justify-between">
		<div class="py-4 flex flex-col items-start text-body-lg">
			<span class="font-bold text-gray-800">Fullstack</span><span class="text-gray-600">capable</span>
		</div>
		<div class="py-4">
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
		<div class="py-4 flex flex-col items-start text-body-lg">
			<span class="font-bold text-gray-800">Sharing</span><span class="text-gray-600">knowledge</span>
		</div>
	</div>
</div>
<div class="pt-32">
	<h2 id="projects" class="text-heading-4 lg:text-heading-2 font-bold text-brand-800">Selected Projects.</h2>
</div>
<div class="pt-14 pb-20">
	<h2 class="text-heading-4 lg:text-heading-2 font-bold text-brand-800 mb-6">Technologies.</h2>

	<ul class="grid grid-cols-2 sm:grid-cols-3 items-center gap-8 flex-wrap">
		{#each skills as skill}
			<li class="flex items-center text-body-base text-gray-700 font-bold gap-2 break-all">
				<img src={skill.icon} alt="" class="w-8 md:w-10 lg:w-12" />{skill.name}
			</li>{/each}
	</ul>
</div>
