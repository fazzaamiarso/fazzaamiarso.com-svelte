<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import { lenis, loadLenis } from '$lib/lenis';
	import { onMount } from 'svelte';

	onMount(() => {
		loadLenis();
		return () => lenis.destroy();
	});
</script>

<div id="portal"></div>
<Header />
<main class="relative z-[1] bg-white min-h-screen">
	<div class="w-11/12 mx-auto max-w-7xl">
		<slot />
	</div>
</main>

<Footer />
