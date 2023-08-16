<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import { lenis, loadLenis } from '$lib/lenis';
	import gsap, { ScrollTrigger } from '$lib/gsap';
	import { onMount, setContext } from 'svelte';
	import { fade } from 'svelte/transition';
	import { writable } from 'svelte/store';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { PRELOADER_DURATION, animateNavbar } from '$lib/animations/hero';

	export let data;

	const preloading = writable(true);
	let navigating = false;

	function animatePreloader() {
		return gsap
			.timeline()
			.set('#preloader-container > *', { yPercent: 100 })
			.to('#preloader-container > *', {
				autoAlpha: 1, // element initially set to visiblity:hidden to prevent flash of unwanted content bug
				stagger: 0.3,
				duration: 1.5,
				yPercent: 0,
				ease: 'power3.inOut'
			})
			.to('#preloader-container > *', {
				delay: 0.7,
				opacity: 0,
				stagger: 0.7
			})
			.to('#preloader', {
				opacity: 0
			})
			.totalDuration(PRELOADER_DURATION);
	}

	onMount(() => {
		loadLenis();
		lenis.stop();

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		animateNavbar();
		animatePreloader().eventCallback('onComplete', () => {
			preloading.set(false);
			lenis.start();
		});

		return () => lenis.destroy();
	});

	setContext('preloading', preloading);

	beforeNavigate(async ({ to }) => {
		if (to?.route.id) {
			lenis.scrollTo(0);
			navigating = true;
		}
	});
	afterNavigate(async () => {
		setTimeout(() => {
			navigating = false;
			ScrollTrigger.refresh();
		}, 1500);
	});
</script>

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
	{#if navigating}
		<div
			in:fade
			out:fade
			class="absolute bg-white z-[1000] flex justify-center h-screen items-center w-full text-heading-3">
			<p id="loading" class="text-gray-700">Supposedly a page transition...</p>
		</div>
	{/if}
	{#key data.url}
		<div class="w-11/12 mx-auto max-w-7xl" in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration: 300 }}>
			<slot />
		</div>
	{/key}
</main>
<Footer />
