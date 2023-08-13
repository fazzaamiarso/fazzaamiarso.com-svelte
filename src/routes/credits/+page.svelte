<script>
	const creditLinks = [
		'https://alexgurghis.com/',
		'https://www.nikolaibain.com/',
		'https://www.davidobodo.com/',
		'https://mayerr.com/',
		'https://monopo.london/',
		'https://significa.co/',
		'https://www.manafalnakib.com/',
		'https://github.com/mattcroat/joy-of-code'
	];
</script>

<svelte:head>
	<title>Site Credits</title>
</svelte:head>
<div class="py-32 flex flex-col text-center items-center">
	<h1 class="text-heading-2 sm:text-heading-1 text-brand-800">Credits</h1>
	<p class="text-body-base sm:text-body-lg pb-20 text-gray-700">
		I’m so grateful and amazed by others’ work. I’m not a great designer, so I did a lot of research and finding
		inspiration to finally built this site. Here’s the list of all the insipirations for this website
	</p>
	<ul class="w-full break-all">
		{#each creditLinks as link}
			<li class="text-heading-4 font-bold text-gray-700 py-6 border-b-2">
				<a href={link} target="_blank" referrerpolicy="no-referrer" class="">{link}</a>
			</li>
		{/each}
	</ul>
</div>
