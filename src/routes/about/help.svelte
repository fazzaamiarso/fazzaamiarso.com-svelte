<script lang="ts">
	import gsap, { ScrollTrigger } from '$lib/gsap';
	import { onMount } from 'svelte';

	const contents = [
		{
			title: 'Writing',
			description: `Cras mollis, ante quis sagittis vestibulum, ipsum sem auctor purus, sit amet tristique odio elit vel ipsum.
					Donec bibendum bibendum semper. Etiam at nulla mi. Sed dapibus pretium turpis at iaculis. Vestibulum ante
					ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec hendrerit mi eu ligula tempus,
					malesuada condimentum enim ullamcorper. Donec in dictum neque.`,
			imgSrc:
				'https://images.unsplash.com/photo-1693523783087-e75073f36860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
		},
		{
			title: 'Reviewing',
			description: `Cras mollis, ante quis sagittis vestibulum, ipsum sem auctor purus, sit amet tristique odio elit vel ipsum.
					Donec bibendum bibendum semper. Etiam at nulla mi. Sed dapibus pretium turpis at iaculis. Vestibulum ante
					ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec hendrerit mi eu ligula tempus,
					malesuada condimentum enim ullamcorper. Donec in dictum neque.`,
			imgSrc:
				'https://images.unsplash.com/photo-1692380872430-29868bdc8ddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
		},
		{
			title: 'Mentoring',
			description: `Cras mollis, ante quis sagittis vestibulum, ipsum sem auctor purus, sit amet tristique odio elit vel ipsum.
					Donec bibendum bibendum semper. Etiam at nulla mi. Sed dapibus pretium turpis at iaculis. Vestibulum ante
					ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec hendrerit mi eu ligula tempus,
					malesuada condimentum enim ullamcorper. Donec in dictum neque.`,
			imgSrc:
				'https://images.unsplash.com/photo-1687360441027-27e70655b27e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1966&q=80'
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

		return () => mm.kill();
	});
</script>

<p class="text-body-lg md:text-body-xl mb-16">
	I strive to help and guide others on their Web Development journey. Why? It’s because I know how challenging it’s to
	learn web development, especially if they don’t have mentor or guidance.
</p>
<h2 class="text-heading-4 sm:text-heading-3 md:text-heading-2 mb-12">How?</h2>

<!-- MOBILE -->
<ul class="lg:hidden space-y-12">
	{#each contents as content}
		<li class="">
			<img src={content.imgSrc} alt="" class="rounded-md mb-4 w-60 max-h-28 object-cover" />
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
	<div class="right h-screen flex flex-col justify-center">
		<div class="relative overflow-hidden w-full h-1/2">
			{#each contents as content}
				<img src={content.imgSrc} class="photo absolute w-full h-full rounded-md block" alt="" />
			{/each}
		</div>
	</div>
</div>
<!--  -->
