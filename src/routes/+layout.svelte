<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import { lenis, loadLenis } from '$lib/lenis';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	onMount(() => {
		loadLenis();
		return () => lenis.destroy();
	});

	let pageReady = false;

	onMount(() => {
		setTimeout(() => {
			pageReady = true;
		}, 1500);
	});
</script>

{#if !pageReady}
	<div
		out:slide
		class="fixed inset-0 bg-[#000] z-[1000] flex justify-center items-center h-screen w-full text-heading-3"
	>
		<p id="loading" class="text-brand-400 animate-pulse">Loading...</p>
	</div>
{/if}
<div id="portal"></div>
<Header />
<main class="relative z-[1] bg-white min-h-screen">
	<div class="w-11/12 mx-auto max-w-7xl">
		<slot />
	</div>
</main>

<Footer />
