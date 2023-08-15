<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import { lenis, loadLenis } from '$lib/lenis';
	import { ScrollTrigger } from '$lib/gsap';
	import { onMount, setContext } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { writable } from 'svelte/store';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	export let data;

	const preloading = writable(false);
	let navigating = false;

	onMount(() => {
		loadLenis();
		lenis.stop();

		setTimeout(() => {
			preloading.set(true);
			lenis.start();
		}, 1500);

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

{#if !$preloading}
	<div
		out:slide
		class="fixed inset-0 bg-[#000] z-[1000] flex justify-center items-center min-h-screen w-full text-heading-3"
	>
		<p id="loading" class="text-white animate-pulse">Placeholder App preloader...</p>
	</div>
{/if}

<div id="portal"></div>

<Header />

<main class="relative z-[1] bg-white min-h-screen">
	{#if navigating}
		<div
			in:fade
			out:fade
			class="absolute bg-white z-[1000] flex justify-center h-screen items-center w-full text-heading-3"
		>
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
