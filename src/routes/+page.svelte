<script>
	import * as config from '$lib/site/config';
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
<div class="h-screen relative flex flex-col justify-center items-center">
	<h1 class=" font-fira-sans text-brand-800 text-heading-3">
		Frontend Developer Who Bring your Idea to the Web
	</h1>
	<div class="absolute bottom-0 left-0 w-full flex justify-between">
		<div class="py-4 flex flex-col items-start text-body-lg">
			<span class="font-bold text-gray-800">Fullstack</span><span class="text-gray-600"
				>capable</span
			>
		</div>
		<div class="py-4 flex flex-col items-start text-body-lg">
			<span class="font-bold text-gray-800">Sharing</span><span class="text-gray-600"
				>knowledge</span
			>
		</div>
	</div>
</div>
<div>
	<h2 class="text-heading-2">SOME RANDOM TEXT so it scrolls</h2>
</div>
