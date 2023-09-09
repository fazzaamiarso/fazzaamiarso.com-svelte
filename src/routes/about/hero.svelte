<script lang="ts">
	import gsap, { horizontalLoop } from '$lib/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		const marquees = gsap.utils.toArray<HTMLElement>('.marquee');

		marquees.forEach((marquee, idx) => {
			const texts = gsap.utils.toArray('.marquee > p', marquee);
			horizontalLoop(texts, {
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
	<div class="marquee flex flex-nowrap gap-2 whitespace-nowrap">
		<p class="text-[10vw]">Hello!</p>
		<p class="text-[10vw]">안녕!</p>
		<p class="text-[10vw]">Halo!</p>
		<p class="text-[10vw]">こんにちは!</p>
		<p class="text-[10vw]">你好!</p>
	</div>
	<div class="marquee flex flex-nowrap gap-2 whitespace-nowrap">
		<p class="text-[10vw]">Hello!</p>
		<p class="text-[10vw]">안녕!</p>
		<p class="text-[10vw]">Halo!</p>
		<p class="text-[10vw]">こんにちは!</p>
		<p class="text-[10vw]">你好!</p>
	</div>
</div>
<div class="scroll-more layout mt-auto pb-8 border-l-4 pl-4 border-brand-700 text-gray-800">
	<p class="text-body-lg">Scroll to</p>
	<p class="text-body-lg">discover more</p>
</div>
