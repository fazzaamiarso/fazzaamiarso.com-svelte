<script lang="ts">
	import { ExternalLink } from 'lucide-svelte';
	import myPic from '$lib/assets/fazza-about.png';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import * as config from '$lib/site/config';

	const otherLinks = [
		{ type: 'Blog', category: 'Web development', link: config.blogUrl, label: 'dev.to/fazzaamiarso' },
		{ type: 'Blog', category: 'Journal', link: 'journal.fazzaamiarso.com', label: 'journal.fazzaamiarso.com' }
	];

	const languagesList = ['🇮🇩 Indonesian', '🇺🇸 English', '🇯🇵 Japanese', '🇰🇷 Korean'];

	let greetingContainer: HTMLElement;

	onMount(() => {
		const greetingTexts = gsap.utils.toArray('div', greetingContainer);
		const offset = -100;
		const max = -(greetingTexts.length - 1) * offset;

		gsap.set(greetingTexts, {
			yPercent: (idx) => idx * offset
		});

		const waitForMe = gsap.delayedCall(2, goAgain);

		function goAgain() {
			gsap.to(greetingTexts, {
				duration: 1,
				ease: 'back.inOut',
				yPercent: '-=' + offset,
				modifiers: {
					yPercent: (value) => gsap.utils.wrap(offset, max, value)
				},
				onComplete: () => {
					waitForMe.restart(true);
				}
			});
		}
	});
</script>

<div class="py-32">
	<div class="pb-12 flex flex-col md:flex-row-reverse lg:items-start lg:justify-start gap-12">
		<div>
			<h1 class="font-bold text-brand-900 flex flex-col">
				<div bind:this={greetingContainer} class="overflow-hidden relative h-[52px] w-80 text-heading-3 text-brand-600">
					<div class="greet absolute">Hi,</div>
					<div class="greet absolute">안녕,</div>
					<div class="greet absolute">こんにちは,</div>
				</div>
				<div class="text-heading-3 lg:text-heading-1">I'm Fazza</div>
			</h1>
			<p class="text-heading-5 lg:text-heading-4 font-bold text-gray-600 mb-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>
			<p class="text-body-base lg:text-body-lg text-gray-900 mb-4">
				Donec vulputate lorem urna, porttitor tincidunt dolor tincidunt et. Ut vel urna volutpat, tincidunt felis ac,
				tristique enim. Nullam at mi a ligula faucibus dignissim eu eu sapien.
			</p>
			<div class="text-body-base font-dm-sans lg:text-body-lg">
				<p class="mb-2">I speak these languages (in order of fluency):</p>
				<ul class="space-y-2">
					{#each languagesList as lang}
						<li class="">{lang}</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="self-start lg:basis-[30%]">
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
						>{item.label} <ExternalLink aria-hidden="true" size="20" />
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
