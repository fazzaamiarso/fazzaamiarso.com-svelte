<script>
	import * as config from '$lib/site/config';
	import { ArrowDownCircle } from 'lucide-svelte';

	const skills = [
		{ name: 'Figma' },
		{ name: 'Typescript' },
		{ name: 'Javascript' },
		{ name: 'Svelte' },
		{ name: 'Next.js' },
		{ name: 'Remix' },
		{ name: 'Node.js' }
	];
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
	<h1 class="font-fira-sans w-10/12 mx-auto text-brand-800 text-heading-3 sm:text-heading-2 lg:text-heading-1">
		Frontend Developer Who Bring your Idea to the Web
	</h1>
	<div class="absolute bottom-0 left-0 w-full flex items-end justify-between">
		<div class="py-4 flex flex-col items-start text-body-lg">
			<span class="font-bold text-gray-800">Fullstack</span><span class="text-gray-600">capable</span>
		</div>
		<div class="py-4">
			<a href="#projects">
				<ArrowDownCircle size="40" aria-hidden="true" class="animate-bounce text-gray-800" />
			</a>
		</div>
		<div class="py-4 flex flex-col items-start text-body-lg">
			<span class="font-bold text-gray-800">Sharing</span><span class="text-gray-600">knowledge</span>
		</div>
	</div>
</div>
<div class="pt-32">
	<h2 id="projects" class="text-heading-3 sm:text-heading-2 font-bold text-brand-800">Selected Projects.</h2>
</div>
<div class="pt-14">
	<h2 class="text-heading-3 sm:text-heading-2 font-bold text-brand-800">Technologies.</h2>
</div>
