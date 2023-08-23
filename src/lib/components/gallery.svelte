<script lang="ts">
	import BiggerPicture, { type BiggerPictureInstance } from 'bigger-picture/svelte';
	import 'bigger-picture/css';

	import { onMount } from 'svelte';

	export let images: { src: string }[];

	let bp: BiggerPictureInstance;

	onMount(() => {
		bp = BiggerPicture({ target: document.querySelector('#image_container') as HTMLElement });
	});

	function handleOpen(e: MouseEvent) {
		e.preventDefault();
		bp.open({ items: document.querySelectorAll('#image_container > a'), el: e.currentTarget as HTMLElement });
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="image_container">
	{#each images as img}
		<a href={img.src} data-img={img.src} data-thumb={img.src} data-alt="" on:click={handleOpen}>
			<img src={img.src} alt="" class="ring-1 ring-gray-200 rounded-lg" />
		</a>
	{/each}
</div>
