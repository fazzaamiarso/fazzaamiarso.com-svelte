<script lang="ts">
	import gsap, { ScrollTrigger } from '$lib/gsap';
	import { onMount } from 'svelte';
	import scratch from '$lib/assets/scratch.png';
	import team from '$lib/assets/robotic-sma.jpg';

	onMount(() => {
		const ctx = gsap.context(() => {
			const cards = gsap.utils.toArray<HTMLElement>('.h-panel');

			cards.forEach((card) => {
				gsap.set(card, { opacity: 0.1 });
				const animation = gsap.to(card, {
					opacity: 1
				});
				ScrollTrigger.create({
					trigger: card,
					start: 'top 20%',
					end: 'bottom 20%',
					id: 'card',
					animation,
					invalidateOnRefresh: true,
					toggleActions: 'play reverse play reverse'
				});
			});
		});

		return () => ctx.kill();
	});
</script>

<div class="h-container">
	<div
		class="h-panel ring-brand-700 flex flex-col gap-8 lg:gap-16 py-20 lg:grid lg:grid-cols-3 lg:items-center">
		<figure class="">
			<img src={scratch} alt="scratch logo" class="w-60 mx-auto" />
			<figcaption class="text-center italic text-gray-700">
				scratch that I learned
			</figcaption>
		</figure>
		<p class="col-span-2 text-body-lg md:text-body-xl w-full">
			I was introduced to programming with Scratch in my Elementary School
			Robotic’s lesson. As a curious kid, it piqued my interest and made me join
			the school’s robotic club. Eventually, I was selected to compete on a few
			robotic competition.
		</p>
	</div>
	<div
		class="h-panel ring-brand-700 flex flex-col gap-8 lg:gap-16 py-20 lg:grid lg:grid-cols-3 lg:items-center">
		<figure class="">
			<img
				src={team}
				alt="my robotic team in high school"
				class="w-96 mx-auto rounded-md" />
			<figcaption class="text-center italic text-gray-700">
				My robotic team and teachers in high school
			</figcaption>
		</figure>
		<p class="col-span-2 text-body-lg md:text-body-xl w-full">
			Continuing the journey, I delved a bit into C++ with Arduino because I was
			responsible for programming a Sumo Robot in High School Robotic Club. I
			compete on a decent amount of Robotic competition across my time in
			Highschool, I even go to Singapore twice to represent Indonesia.
		</p>
	</div>
	<div class="h-panel ring-brand-700 py-20 lg:flex-row">
		<p class="text-body-lg md:text-body-xl w-full">
			I quickly lost interest in C++ at that time because it was so difficult
			and I don’t have the passion yet. Somehow, I got interested in Python
			after a quick workshop from a guest on my school.
		</p>
		<p class="text-body-lg md:text-body-xl w-full">
			Aaaaand... I dropped it too. Later on, I was amazed by Web development in
			the end of High School from seeing a Youtube Video and unsurprisingly keep
			going until present.
		</p>
	</div>
</div>
