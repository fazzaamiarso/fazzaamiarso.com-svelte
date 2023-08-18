<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import { lenis, loadLenis } from '$lib/lenis';
	import gsap, { ScrollTrigger } from '$lib/gsap';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { writable } from 'svelte/store';
	import { afterNavigate } from '$app/navigation';
	import { animateNavbar } from '$lib/animations/hero';
	import { animatePreloader } from '$lib/animations/global';
	import * as config from '$lib/site/config';
	import { page } from '$app/stores';

	$: ({
		seo: { title, description }
	} = $page.data);

	export let data;

	const preloading = writable(true);

	function initScrollSmooth() {
		loadLenis();
		lenis.stop();

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);
	}

	onMount(() => {
		initScrollSmooth();

		animateNavbar();
		animatePreloader().eventCallback('onComplete', () => {
			preloading.set(false);
			lenis.start();
		});

		return () => lenis.destroy();
	});

	afterNavigate(async ({ to }) => {
		if (to?.route.id) {
			lenis.scrollTo(0);
		}
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<!-- Open Graph START -->
	<meta property="og:title" content={title} />
	<meta property="og:url" content={config.siteUrl} />
	<!-- Open Graph END  -->
	<!-- Twitter card START -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={config.twitterHandle} />
	<!-- Twitter card END -->
</svelte:head>

{#if $preloading}
	<div id="preloader" class="fixed inset-0 bg-white z-[1000] flex justify-center items-center min-h-screen w-full">
		<div
			id="preloader-container"
			class="overflow-hidden flex items-center justify-center flex-col gap-4 text-brand-600 mx-auto sm:flex-row">
			<p class="text-body-xl invisible whitespace-nowrap font-bold">Fazza Razaq Amiarso</p>
			<p class="text-body-xl invisible whitespace-nowrap text-gray-800">Portfolio</p>
		</div>
	</div>
{/if}

<div id="portal"></div>

<Header />

<main class="relative z-[1] bg-white min-h-screen">
	{#key data.url}
		<div
			class="w-11/12 mx-auto max-w-7xl"
			in:fade={{ duration: 300, delay: 1000 }}
			out:fade={{ duration: 200 }}
			on:introend={() => ScrollTrigger.refresh()}>
			<slot />
		</div>
	{/key}
</main>
<Footer />
