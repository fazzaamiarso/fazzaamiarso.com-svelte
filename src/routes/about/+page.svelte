<script>
	import { ExternalLink } from 'lucide-svelte';
	import myPic from '$lib/assets/fazza-about.png';

	const otherLinks = [
		{ type: 'Blog', category: 'Web development', link: 'blog.fazzaamiarso.com' },
		{ type: 'Blog', category: 'Journal', link: 'journal.fazzaamiarso.com' }
	];
</script>

<svelte:head>
	<title>About | Fazza Razaq Amiarso</title>
</svelte:head>
<div class="py-32">
	<div class="pb-12 flex flex-col lg:flex-row-reverse lg:items-start lg:justify-start gap-12">
		<div>
			<h1 class="text-heading-3 lg:text-heading-1 font-bold text-brand-900">Hi, I'm Fazza</h1>
			<p class="text-heading-5 lg:text-heading-4 font-bold text-gray-600 mb-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>
			<p class="text-body-base lg:text-body-lg text-gray-900">
				Donec vulputate lorem urna, porttitor tincidunt dolor tincidunt et. Ut vel urna volutpat, tincidunt felis ac,
				tristique enim. Nullam at mi a ligula faucibus dignissim eu eu sapien.
			</p>
		</div>
		<div class="self-center lg:basis-[40%]">
			<img src={myPic} alt="" class="w-full max-w-xs" />
		</div>
	</div>
	<div>
		<h2 class="text-heading-5 sm:text-heading-4 font-bold text-brand-800 mb-1">Checkout My Other Endeavors</h2>
		<p class="text-gray-700 text-body-base mb-7 sm:text-body-lg">
			I love sharing my knowledge with others and writing in general. So here are some of my endeavors
		</p>
		<ul class="space-y-12">
			{#each otherLinks as item}
				<li class="grid grid-cols-3 w-full">
					<div class="col-span-1">
						<div class="text-heading-5 font-bold text-brand-500">{item.type}</div>
						<div class="text-body-base text-gray-600">{item.category}</div>
					</div>
					<a href="#link-1" class="inline-flex items-center gap-1 text-body-base font-bold text-gray-700 col-span-2"
						>{item.link} <ExternalLink aria-hidden="true" size="20"/>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
