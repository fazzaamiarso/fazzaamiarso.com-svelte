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
	import { animatePreloader } from '$lib/animations/global';
	import * as config from '$lib/site/config';
	import { page } from '$app/stores';

	$: ({ seo } = $page.data);

	export let data;

	const preloading = writable(true);

	function initScrollSmooth() {
		loadLenis();

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);
	}

	onMount(() => {
		initScrollSmooth();

		// prevent scroll when preloading
		lenis.stop();

		const tween = animatePreloader()
			// start lenis 2 seconds after preload start
			.call(() => lenis.start(), undefined, 2)
			.eventCallback('onComplete', () => {
				preloading.set(false);
			});

		return () => {
			tween.kill();
			lenis.destroy();
		};
	});

	afterNavigate(async ({ to }) => {
		if (to?.route.id) {
			lenis.scrollTo(0);
		}
	});
</script>

<svelte:head>
	<title>{seo?.title}</title>
	<meta name="description" content={seo?.description} />
	<!-- Open Graph START -->
	<meta property="og:title" content={seo?.title} />
	<meta property="og:url" content={config.siteUrl} />
	<meta property="og:description" content={seo?.description} />
	<meta property="og:image" content={config.ogImageUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={config.ogImageAlt} />
	<!-- Open Graph END  -->
	<!-- Twitter card START -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={config.siteUrl} />
	<meta property="twitter:url" content={`https://${config.siteUrl}`} />
	<meta name="twitter:title" content={seo?.title} />
	<meta name="twitter:description" content={seo?.description} />
	<meta name="twitter:image" content={config.ogImageUrl} />
	<meta name="twitter:creator" content={config.twitterHandle} />
	<!-- Twitter card END -->
</svelte:head>

{#if $preloading}
	<div id="preloader" class="fixed inset-0 bg-white z-[1000] flex justify-center items-center min-h-screen w-full">
		<div
			id="preloader-container"
			class="flex items-center justify-center flex-col gap-4 text-brand-600 mx-auto sm:flex-row">
			<p class="text-body-xl invisible whitespace-nowrap font-bold">Fazza Razaq Amiarso</p>
			<p class="text-body-xl invisible whitespace-nowrap text-gray-800">Portfolio</p>
		</div>
	</div>
{/if}

<div id="portal"></div>

<Header />

<main class="relative z-[1] bg-white min-h-screen overflow-x-hidden">
	{#key data.url}
		<div
			in:fade={{ duration: 300, delay: 500 }}
			out:fade={{ duration: 200 }}
			on:introend={() => ScrollTrigger.refresh()}>
			<slot />
		</div>
	{/key}
</main>
<Footer />
