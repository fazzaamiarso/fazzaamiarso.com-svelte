<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';

	import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';

	onMount(() => {
		const lenis = new Lenis();

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		
		requestAnimationFrame(raf);

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
