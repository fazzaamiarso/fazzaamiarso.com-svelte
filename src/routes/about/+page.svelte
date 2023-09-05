<script lang="ts">
	import mePic from '$lib/assets/fazza-about.png';
	import gsap, { horizontalLoop, ScrollTrigger } from '$lib/gsap';
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

		// Credits from https://codepen.io/snorkltv/pen/vYVBPJq?editors=1010
		ScrollTrigger.create({
			trigger: '.gallery',
			pin: '.right',
			start: 'top top',
			end: 'bottom bottom',
			markers: true
		});

		const details = gsap.utils.toArray<HTMLElement>('.content:not(:first-child)');
		const photos = gsap.utils.toArray<HTMLElement>('.photo:not(:first-child)');
		const allPhotos = gsap.utils.toArray<HTMLElement>('.photo');

		gsap.set(photos, { yPercent: 101 });

		details.forEach((detail, index) => {
			let headline = detail.querySelector('h3');
			let animation = gsap.timeline().to(photos[index], { yPercent: 0 }).set(allPhotos[index], { autoAlpha: 0 });
			ScrollTrigger.create({
				trigger: headline,
				start: 'top 80%',
				end: 'top 50%',
				animation: animation,
				scrub: true,
				markers: true
			});
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
	<p class="text-body-xl mb-16">
		I strive to help and guide others on their Web Development journey. Why? It’s because I know how challenging it’s to
		learn web development, especially if they don’t have mentor or guidance.
	</p>
	<h2 class="text-heading-2">How?</h2>
	<div class="gallery grid grid-cols-2 gap-32">
		<div class="left">
			<div class="content h-screen flex items-center">
				<div>
					<h3 class="text-heading-3 mb-2">Writing</h3>
					<p class="text-body-base">
						Cras mollis, ante quis sagittis vestibulum, ipsum sem auctor purus, sit amet tristique odio elit vel ipsum.
						Donec bibendum bibendum semper. Etiam at nulla mi. Sed dapibus pretium turpis at iaculis. Vestibulum ante
						ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec hendrerit mi eu ligula tempus,
						malesuada condimentum enim ullamcorper. Donec in dictum neque.
					</p>
				</div>
			</div>
			<div class="content h-screen flex items-center">
				<div>
					<h3 class="text-heading-3 mb-2">Reviewing</h3>
					<p class="text-body-base">
						Cras mollis, ante quis sagittis vestibulum, ipsum sem auctor purus, sit amet tristique odio elit vel ipsum.
						Donec bibendum bibendum semper. Etiam at nulla mi. Sed dapibus pretium turpis at iaculis. Vestibulum ante
						ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec hendrerit mi eu ligula tempus,
						malesuada condimentum enim ullamcorper. Donec in dictum neque.
					</p>
				</div>
			</div>

			<div class="content h-screen flex items-center">
				<div>
					<h3 class="text-heading-3 mb-2">Mentoring</h3>
					<p class="text-body-base">
						Cras mollis, ante quis sagittis vestibulum, ipsum sem auctor purus, sit amet tristique odio elit vel ipsum.
						Donec bibendum bibendum semper. Etiam at nulla mi. Sed dapibus pretium turpis at iaculis. Vestibulum ante
						ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec hendrerit mi eu ligula tempus,
						malesuada condimentum enim ullamcorper. Donec in dictum neque.
					</p>
				</div>
			</div>
		</div>
		<div class="right h-screen flex flex-col justify-center">
			<div class="relative overflow-hidden w-full h-1/2">
				<img
					src="https://images.unsplash.com/photo-1693523783087-e75073f36860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
					class="photo absolute w-full h-full rounded-md block"
					alt="" />

				<img
					src="https://images.unsplash.com/photo-1692380872430-29868bdc8ddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
					class="photo absolute w-full h-full rounded-md block"
					alt="" />

				<img
					src="https://images.unsplash.com/photo-1687360441027-27e70655b27e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1966&q=80"
					class="photo absolute w-full h-full rounded-md block"
					alt="" />
			</div>
		</div>
	</div>
</section>
<section class="h-timeline pt-24 layout">
	<h2 class="text-heading-2 mb-4">Languages I speak</h2>
	<p class="text-body-lg">
		Since I was a child, I’m fascinated by the power that languages hold to connect with people simply by speaking a
		person’s native language. I also believe, understanding the culture can open the door to people’s heart. It
		motivated me to learn and understand different language and culture.
	</p>
</section>
