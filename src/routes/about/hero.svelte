<script lang="ts">
	import gsap, { horizontalLoop } from '$lib/gsap';
	import SplitType from 'split-type';
	import { onMount } from 'svelte';

	onMount(() => {
		const marquees = gsap.utils.toArray<HTMLElement>('.marquee');

		marquees.forEach((marquee, idx) => {
			const splitTexts = new SplitType(marquee);

			horizontalLoop(splitTexts.words, {
				repeat: -1,
				speed: 0.7,
				reversed: idx % 2
			});
		});

		gsap.to('.scroll-more', {
			opacity: 0,
			yPercent: 20,
			scrollTrigger: {
				trigger: '.scroll-more',
				start: 'bottom bottom',
				end: '+=1',
				toggleActions: 'play none reverse none'
			}
		});
	});
</script>

<div class="leading-normal text-gray-800">
	<div class="marquee gap-2 whitespace-nowrap text-[10vw]">Hello! 안녕! Halo! こんにちは! 你好!</div>
	<div class="marquee gap-2 whitespace-nowrap text-[10vw]">Hello! 안녕! Halo! こんにちは! 你好!</div>
</div>
<div class="scroll-more layout mt-auto pb-8 border-l-4 pl-4 border-brand-700 text-gray-800">
	<p class="text-body-lg">Scroll to</p>
	<p class="text-body-lg">discover more</p>
</div>

<style>
	p {
		font-kerning: none;
	}
</style>
