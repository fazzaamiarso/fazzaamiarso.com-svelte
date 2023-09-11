<script lang="ts">
	import gsap, { ScrollTrigger } from '$lib/gsap';
	import { onMount } from 'svelte';
	import feMentor from '$lib/assets/fe-mentor.png';
	import dicoding from '$lib/assets/dicoding-profile.png';
	import sib4 from '$lib/assets/sib4.png';
	import devDashboard from '$lib/assets/dev-dashboard.png';

	const contents = [
		{
			title: 'Writing',
			description: `Cras mollis, ante quis sagittis vestibulum, ipsum sem auctor purus, sit amet tristique odio elit vel ipsum.
					Donec bibendum bibendum semper. Etiam at nulla mi. Sed dapibus pretium turpis at iaculis. Vestibulum ante
					ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec hendrerit mi eu ligula tempus,
					malesuada condimentum enim ullamcorper. Donec in dictum neque.`,
			imgSrc: devDashboard
		},
		{
			title: 'Answering',
			description: `Cras mollis, ante quis sagittis vestibulum, ipsum sem auctor purus, sit amet tristique odio elit vel ipsum.
					Donec bibendum bibendum semper. Etiam at nulla mi. Sed dapibus pretium turpis at iaculis. Vestibulum ante
					ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec hendrerit mi eu ligula tempus,
					malesuada condimentum enim ullamcorper. Donec in dictum neque.`,
			imgSrc: feMentor
		},
		{
			title: 'Reviewing',
			description: `Cras mollis, ante quis sagittis vestibulum, ipsum sem auctor purus, sit amet tristique odio elit vel ipsum.
					Donec bibendum bibendum semper. Etiam at nulla mi. Sed dapibus pretium turpis at iaculis. Vestibulum ante
					ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec hendrerit mi eu ligula tempus,
					malesuada condimentum enim ullamcorper. Donec in dictum neque.`,
			imgSrc: dicoding
		},
		{
			title: 'Mentoring',
			description: `Cras mollis, ante quis sagittis vestibulum, ipsum sem auctor purus, sit amet tristique odio elit vel ipsum.
					Donec bibendum bibendum semper. Etiam at nulla mi. Sed dapibus pretium turpis at iaculis. Vestibulum ante
					ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec hendrerit mi eu ligula tempus,
					malesuada condimentum enim ullamcorper. Donec in dictum neque.`,
			imgSrc: sib4
		}
	];

	onMount(() => {
		const mm = gsap.matchMedia();

		mm.add('(min-width:1024px)', (ctx) => {
			// Credits from https://codepen.io/snorkltv/pen/vYVBPJq?editors=1010
			ScrollTrigger.create({
				trigger: '.gallery',
				pin: '.right',
				start: 'top top',
				end: 'bottom bottom'
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
					animation,
					scrub: true
				});
			});
		});

		return () => mm.kill();
	});
</script>

<p class="text-body-lg md:text-body-xl mb-16">
	I strive to help and guide others on their Web Development journey. Why? It’s because I know how challenging it’s to
	learn web development, especially if they don’t have mentor or guidance.
</p>
<h2 class="text-heading-4 sm:text-heading-3 md:text-heading-2 mb-12">How?</h2>

<!-- MOBILE -->
<ul class="lg:hidden divide-y-[1px]">
	{#each contents as content}
		<li class="py-12">
			<img src={content.imgSrc} alt="" class="rounded-md mb-4 w-full max-w-xs aspect-square object-cover" />
			<h3 class="text-heading-5 mb-2">{content.title}</h3>
			<p class="text-body-base">
				{content.description}
			</p>
		</li>
	{/each}
</ul>
<!--  -->
<!-- DESKTOP -->
<div class="max-lg:hidden gallery grid grid-cols-2 gap-32">
	<div class="left">
		{#each contents as content}
			<div class="content h-screen flex items-center">
				<div>
					<h3 class="text-heading-3 mb-2">{content.title}</h3>
					<p class="text-body-lg">
						{content.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
	<div class="right h-screen flex flex-col justify-center items-center w-full">
		<div class="relative overflow-hidden aspect-square w-full">
			{#each contents as content}
				<img src={content.imgSrc} class="photo absolute w-full h-full rounded-md block object-cover" alt="" />
			{/each}
		</div>
	</div>
</div>
<!--  -->
