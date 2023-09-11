<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from '$lib/gsap';

	const creditLinks = [
		'https://alexgurghis.com/',
		'https://www.nikolaibain.com/',
		'https://www.davidobodo.com/',
		'https://mayerr.com/',
		'https://monopo.london/',
		'https://significa.co/',
		'https://www.manafalnakib.com/',
		'https://github.com/mattcroat/joy-of-code',
		'https://www.austrine.io/'
	];

	let creditList: HTMLElement;

	onMount(() => {
		const credits = gsap.utils.toArray<HTMLElement>('li', creditList);

		credits.forEach((credit) => {
			const scopedQuery = gsap.utils.selector(credit);
			const anchor = scopedQuery('a').at(0) as HTMLElement;
			const rectangle = scopedQuery('div').at(0) as HTMLElement;

			let tl = gsap
				.timeline({
					paused: true,
					duration: 0.15,
					defaults: { ease: 'power2.out' }
				})
				.to(anchor, { color: 'white' })
				.to(
					rectangle,
					{
						scaleY: 1
					},
					'<'
				);

			function animateHover() {
				tl.play();
			}

			function animateExit() {
				tl.reverse();
			}

			anchor.addEventListener('mouseenter', animateHover);
			anchor.addEventListener('focusin', animateHover);
			anchor.addEventListener('mouseleave', animateExit);
			anchor.addEventListener('focusout', animateExit);

			return () => {
				anchor.removeEventListener('mouseenter', animateHover);
				anchor.removeEventListener('focusin', animateHover);
				anchor.removeEventListener('mouseleave', animateExit);
				anchor.removeEventListener('focusout', animateExit);
			};
		});
	});
</script>

<div class="pt-32 flex flex-col text-center items-center">
	<div class="layout pb-20 text-center">
		<h1
			class="text-heading-3 sm:text-heading-2 md:text-heading-1 text-brand-800">
			Credits
		</h1>
		<p class="text-body-base sm:text-body-lg text-gray-700 mx-auto">
			I’m so grateful and amazed by others’ work. I’m not a great designer, so I
			did a lot of research and finding inspiration to finally built this site.
			Here’s the list of all the insipirations for this website
		</p>
	</div>
	<ul bind:this={creditList} class="w-full break-all">
		{#each creditLinks as link}
			<li class="relative text-gray-700 border-b-[1px]">
				<a
					href={link}
					target="_blank"
					referrerpolicy="no-referrer"
					class="text-body-lg sm:text-body-xl py-4 inline-block w-full"
					>{link}</a>
				<div
					class="-z-10 absolute bottom-0 left-0 w-full h-full bg-brand-900 pointer-events-none scale-y-0 origin-bottom">
				</div>
			</li>
		{/each}
	</ul>
</div>
