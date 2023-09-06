<script lang="ts">
	import gsap, { ScrollTrigger } from '$lib/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
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
