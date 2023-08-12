<script lang="ts">
	import * as config from '$lib/site/config';
	import { ArrowDownCircle } from 'lucide-svelte';

	import { lenis } from '$lib/lenis';
	import { onMount } from 'svelte';
	import gsap from '$lib/gsap';
	import SkillsList from '$lib/components/skills-list.svelte';

	let bottomBar: HTMLElement;

	onMount(() => {
		gsap.from("[data-animate='skill']", {
			stagger: 0.15,
			y: 50,
			opacity: 0,
			ease : "power3.out",
			scrollTrigger: {
				trigger: "[data-animate='tech']"
			}
		});

		gsap.from(bottomBar, {
			delay: 1.75,
			duration: 0.35,
			opacity: 0,
			yPercent: 50,
			ease: "sine.out",
			scrollTrigger: {
				trigger: bottomBar,
				start: 'top bottom',
				end: 'bottom 25%',
				toggleActions: 'play reverse play reverse'
			}
		});

		gsap.from("[data-animate='h1-first']", { delay: 2, duration: .35, opacity: 0, x: -50 , ease: "sine.out",});
		gsap.from("[data-animate='h1-second']", { delay: 2, duration: .35, opacity: 0, x: 50 , ease: "sine.out",});
		gsap.from("[data-animate='h1-third']", { delay: 2, duration: .35, opacity: 0, x: -50 , ease: "sine.out",});
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
		<p data-animate="h1-first">Frontend Developer</p>
		<p data-animate="h1-second">Who Bring your Idea</p>
		<p data-animate="h1-third">to the Web</p>
	</h1>
	<div class="pb-8 absolute bottom-0 left-0 w-full flex items-end justify-between" bind:this={bottomBar}>
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
	<h2 data-animate="tech" class="text-heading-4 lg:text-heading-2 font-bold text-brand-800 mb-6">Technologies.</h2>
	<SkillsList />
</div>
