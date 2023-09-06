<script lang="ts">
	import mePic from '$lib/assets/fazza-about.png';
	import { china, indonesia, japan, southKorea, usa } from '$lib/assets/flags';
	import Help from './help.svelte';
	import Hero from './hero.svelte';
	import Timeline from './timeline.svelte';

	const languages = [
		{
			lang: 'Indonesian',
			flagSrc: indonesia
		},
		{
			lang: 'English',
			flagSrc: usa
		},
		{
			lang: 'Japanese',
			flagSrc: japan
		},
		{
			lang: 'Korean',
			flagSrc: southKorea
		},
		{
			lang: 'Chinese',
			flagSrc: china
		}
	];
</script>

<section class="flex flex-col pt-32 h-screen overflow-hidden">
	<Hero />
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
	<Timeline />
</section>
<section class="pt-32 layout">
	<Help />
</section>
<section class="h-timeline pt-24 pb-32 layout">
	<h2 class="text-heading-2 mb-4">Languages I speak</h2>
	<p class="text-body-lg mb-10">
		Since I was a child, I’m fascinated by the power that languages hold to connect with people simply by speaking a
		person’s native language. I also believe, understanding the culture can open the door to people’s heart. It
		motivated me to learn and understand different language and culture.
	</p>
	<ul class="w-full flex flex-wrap gap-4 md:gap-12">
		{#each languages as lang}
			<li class="flex items-center gap-4 ring-1 ring-gray-200 rounded-full pr-4">
				<img src={lang.flagSrc} alt={`${lang.lang} flag`} class="w-10" /><span class="text-body-base">{lang.lang}</span>
			</li>
		{/each}
	</ul>
</section>
