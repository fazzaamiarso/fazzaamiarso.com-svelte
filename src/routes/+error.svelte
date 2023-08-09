<script>
	import notFoundGif from '$lib/assets/gojo-satoru-min.gif';
</script>

<svelte:head>
	<title>404 | Fazza Razaq Amiarso</title>
</svelte:head>
<div class="flex flex-col py-16 justify-center items-center gap-8">
	<div class="">
		<h1 class="font-fira-sans text-heading-1 text-brand-500">404</h1>
		<h2 class="font-fira-sans text-heading-3 text-brand-800">Page not found</h2>
		<p class="text-body-xl font-bold text-gray-600 mb-8">What are you doing, here?</p>
		<a href="/" class="text-body-lg text-gray-700">Return to Home</a>
	</div>
	<div><img src={notFoundGif} alt="" class="rounded-lg" /></div>
</div>
