<script lang="ts">
	import gsap from '$lib/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		const horizontalContainer = document.querySelector<HTMLElement>('.h-container');
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

<div class="h-container flex flex-nowrap ml-auto w-max py-32 gap-32">
	<div class="h-panel ring-brand-700">
		<p class="text-body-xl">
			I was introduced to programming with Scratch in my Elementary School Robotic’s lesson. As a curious kid, it piqued
			my interest and made me join the school’s robotic club. Eventually, I was selected to compete on a few robotic
			competition.
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
			I quickly lost interest in C++ at that time because it was so difficult and I don’t have the passion yet. Somehow,
			I got interested in Python after a quick workshop from a guest on my school
		</p>
		<p class="text-body-xl">
			And I dropped it too. Later on, I was amazed by Web development in the end of High School from seeing a Youtube
			Video and unsurprisingly keep going until present.
		</p>
	</div>
</div>
