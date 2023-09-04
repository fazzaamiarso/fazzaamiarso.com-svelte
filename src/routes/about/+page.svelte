<script lang="ts">
	import mePic from '$lib/assets/fazza-about.png';
	import gsap, { horizontalLoop } from '$lib/gsap';
	import { onMount } from 'svelte';

	onMount(async () => {
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
				start: 'bottom 90%',
				end: 'bottom 90%',
				toggleActions: 'play none reverse none'
			}
		});

		const horizontalContainer = document.querySelector<HTMLElement>('.h-timeline .h-container');
		const horizontalPanels = gsap.utils.toArray<HTMLElement>('.h-panel');

		gsap.to(horizontalPanels, {
			ease: 'none',
			x: () =>
				-1 *
				((horizontalContainer?.offsetWidth ?? 0) -
					window.innerWidth +
					(horizontalContainer?.getBoundingClientRect().left ?? 0) * 2),
			scrollTrigger: {
				pin: true,
				trigger: horizontalContainer,
				scrub: 1,
				markers: true,
				start: 'top 20%',
				end: () => {
					return (
						'+=' +
						((horizontalContainer?.offsetWidth ?? 0) -
							window.innerWidth +
							(horizontalContainer?.getBoundingClientRect().left ?? 0) * 2)
					);
				},
				invalidateOnRefresh: true
			}
		});
	});
</script>

<section class="flex flex-col pt-32 h-screen overflow-hidden">
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
</section>
<section class="flex items-center justify-between pt-32 layout">
	<div class="basis-1/2">
		<h2 class="text-heading-1">I'm Fazza</h2>
		<p class="text-heading-3 font-dm-sans">A Fullstack-able Frontend developer from Indonesia.</p>
	</div>
	<img src={mePic} alt="" />
</section>
<section class="flex items-center justify-between pt-32 layout">
	<h2 class="text-heading-2">Why?</h2>
	<p class="text-body-xl basis-1/2">
		I love building stuff on the web because I can freely express my Idea. It’s like having your own tiny space that
		show you exist in this world. Sharing knowledge and opinion, build useful application, craft stunning visual
		experience, make new friends and connections.
	</p>
</section>
<section class="h-timeline pt-40 layout">
	<h2 class="text-heading-2">How it all started?</h2>
	<div class="h-container flex flex-nowrap ml-auto w-max py-32 gap-32">
		<div class="h-panel ring-brand-700">
			<p class="text-body-xl">
				I was introduced to programming with Scratch in my Elementary School Robotic’s lesson. As a curious kid, it
				piqued my interest and made me join the school’s robotic club. Eventually, I was selected to compete on a few
				robotic competition.
			</p>
		</div>
		<div class="h-panel ring-brand-700">
			<p class="text-body-xl">
				Continuing the journey, I delved a bit into C++ with Arduino because I was responsible for programming a Sumo
				Robot in High School Robotic Club. I compete on a decent amount of Robotic competition across my time in
				Highschool, I even go to Singapore twice to represent Indonesia.
			</p>
		</div>
		<div class="h-panel ring-brand-700">
			<p class="text-body-xl">
				I quickly lost interest in C++ at that time because it was so difficult and I don’t have the passion yet.
				Somehow, I got interested in Python after a quick workshop from a guest on my school
			</p>
			<p class="text-body-xl">
				And I dropped it too. Later on, I was amazed by Web development in the end of High School from seeing a Youtube
				Video and unsurprisingly keep going until present.
			</p>
		</div>
	</div>
</section>
<section class="pt-32 layout">
	<p class="text-body-xl">
		I strive to help and guide others on their Web Development journey. Why? It’s because I know how challenging it’s to
		learn web development, especially if they don’t have mentor or guidance.
	</p>
</section>
