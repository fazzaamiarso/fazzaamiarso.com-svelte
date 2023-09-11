<script lang="ts">
	import notFoundGif from '$lib/assets/gojo-satoru-min.gif';
	import gsap from '$lib/gsap';
	import { onMount } from 'svelte';

	let backLink: HTMLElement;

	onMount(() => {
		const scopedQuery = gsap.utils.selector(backLink);

		const mm = gsap.matchMedia();

		mm.add('(min-width:1024px)', (ctx) => {
			const tl = gsap
				.timeline({ paused: true, defaults: { duration: 0.5 } })
				.to(scopedQuery('.ripple'), {
					scale: 2.5
				})
				.to(
					backLink,
					{
						color: '#fff'
					},
					'<'
				);

			ctx.add('onMouseenter', onMouseenter);
			ctx.add('onMouseout', onMouseout);

			backLink.addEventListener('mouseenter', ctx.onMouseenter);
			backLink.addEventListener('mouseout', ctx.onMouseout);

			function onMouseenter(e: MouseEvent) {
				if (!tl.isActive()) setPosition(e);
				tl.play();
			}

			function onMouseout(e: MouseEvent) {
				setPosition(e);
				tl.reverse();
			}

			function setPosition(e: MouseEvent) {
				const scopedQuery = gsap.utils.selector(backLink);

				const x =
					e.clientX -
					(e.target as HTMLAnchorElement).getBoundingClientRect().left;
				const y =
					e.clientY -
					(e.target as HTMLAnchorElement).getBoundingClientRect().top;

				gsap.set(scopedQuery('.ripple'), {
					left: x,
					top: y,
					width: backLink.clientWidth,
					height: backLink.clientWidth
				});
			}
		});

		return () => mm.kill();
	});
</script>

<svelte:head>
	<title>404 - Page Not Found</title>
</svelte:head>
<div
	class="layout flex flex-col justify-center items-center gap-8 h-screen lg:flex-row lg:gap-32">
	<div class="flex flex-col items-center lg:items-start">
		<h1 class="text-heading-1 text-brand-500">404</h1>
		<h2 class="font-dm-sans text-heading-3 text-gray-800">Page not found</h2>
		<p class="text-body-xl text-gray-600 mb-8">What are you doing, here?</p>
		<a
			href="/"
			class="overflow-hidden text-body-lg text-gray-600 inline-block ring-1 ring-gray-600 py-3 px-4 rounded-full relative"
			bind:this={backLink}
			>Return to home
			<span
				class="ripple absolute -z-10 bg-brand-500 block rounded-full scale-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
			></span>
		</a>
	</div>
	<div>
		<figure>
			<img src={notFoundGif} alt="" class="rounded-lg mb-1" />
			<figcaption class="italic text-center">
				Gojo Satoru from Jujutsu Kaisen
			</figcaption>
		</figure>
	</div>
</div>
