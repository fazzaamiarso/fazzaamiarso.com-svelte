<script lang="ts">
	import gsap from '$lib/gsap';
	import BiggerPicture, { type BiggerPictureInstance } from 'bigger-picture/svelte';
	import 'bigger-picture/css';

	import { onMount } from 'svelte';
	import { Expand } from 'lucide-svelte';

	export let images: { src: string }[];

	let bp: BiggerPictureInstance;

	let container: HTMLElement;
	let cursor: HTMLElement;
	let mm: gsap.MatchMedia;

	onMount(() => {
		mm = gsap.matchMedia();

		mm.add('(min-width: 1024px)', (ctx) => {
			const cursorTw = gsap.to(cursor, {
				duration: 0.2,
				scale: 1,
				opacity: 1,
				paused: true
			});

			ctx.add('updateCursor', updateCursor);
			ctx.add('animateCursorEnter', animateCursorEnter);
			ctx.add('animateCursorOut', animateCursorOut);

			container.addEventListener('mousemove', ctx.updateCursor);

			container.querySelectorAll('a').forEach((link) => {
				link.addEventListener('mouseenter', ctx.animateCursorEnter);
				link.addEventListener('mouseleave', ctx.animateCursorOut);
			});

			function updateCursor(e: MouseEvent) {
				const x = e.clientX;
				const y = e.clientY;

				gsap.to(cursor, {
					x,
					y,
					duration: 0.1
				});
			}

			function animateCursorEnter() {
				cursorTw.play();
			}

			function animateCursorOut() {
				cursorTw.reverse();
			}

			return () => {
				container.removeEventListener('mousemove', ctx.updateCursor);
				container.querySelectorAll('a').forEach((link) => {
					link.removeEventListener('mouseenter', ctx.animateCursorEnter);
					link.removeEventListener('mouseleave', ctx.animateCursorOut);
				});
			};
		});

		bp = BiggerPicture({ target: container });
	});

	function handleOpen(e: MouseEvent) {
		e.preventDefault();
		bp.open({ items: container.querySelectorAll('a'), el: e.currentTarget as HTMLElement });
	}
</script>

<div bind:this={container}>
	{#each images as img}
		<a href={img.src} data-img={img.src} data-thumb={img.src} data-alt="" on:click={handleOpen}>
			<img src={img.src} alt="" class="ring-1 ring-gray-200 rounded-lg cursor-zoom-in lg:cursor-none" />
		</a>
	{/each}
	<div
		bind:this={cursor}
		class="fixed top-0 left-0 py-2 px-3 flex items-center gap-2 pointer-events-none rounded-lg text-brand-100 text-body-base bg-brand-700 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 shadow-xl ring-1 ring-brand-400">
		<Expand aria-hidden="true" size="16" /> Click to expand
	</div>
</div>
