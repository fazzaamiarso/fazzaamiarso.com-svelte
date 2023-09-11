<script lang="ts">
	import { Hammer, Pencil, Smile } from 'lucide-svelte';

	// type Type = 'about' | 'craft' | 'writes';
	export let type = 'about';
</script>

{#if type === 'about'}
	<div
		class="text-white flex items-center justify-center flex-wrap w-full h-full text-center">
		<Smile />
		Get to know me
	</div>
{/if}

{#if type === 'crafts'}
	<div
		class="text-white flex items-center justify-center flex-wrap w-full h-full text-center">
		<Hammer />
		See my works
	</div>
{/if}

{#if type === 'writes'}
	<div
		class="text-white flex items-center justify-center flex-wrap w-full h-full text-center">
		<Pencil />
		Read my blog
	</div>
{/if}
