<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
</script>

<div id="portal"></div>
<Header />
<main class="relative py-16 z-[1] bg-white min-h-screen">
	<div class="w-11/12 mx-auto max-w-6xl">
		<slot />
	</div>
</main>

<Footer />
