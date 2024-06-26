<script lang="ts">
	import { china, indonesia, japan, southKorea, usa } from '$lib/assets/flags';
	import Help from './help.svelte';
	import Hero from './hero.svelte';
	import Timeline from './timeline.svelte';
	import gsap, { ScrollTrigger } from '$lib/gsap';
	import { onMount } from 'svelte';

	const languages = [
		{ lang: 'Indonesian', flagSrc: indonesia },
		{ lang: 'English', flagSrc: usa },
		{ lang: 'Japanese', flagSrc: japan },
		{ lang: 'Korean', flagSrc: southKorea },
		{ lang: 'Mandarin', flagSrc: china }
	];

	onMount(() => {
		const mm = gsap.matchMedia();
		mm.add('(min-width:1024px)', () => {
			const introTl = gsap
				.timeline()
				.from('.intro img', { yPercent: 50 })
				.from('.intro .back', { yPercent: 60 }, '<')
				.from('.intro .text', { yPercent: 20 }, '<');

			ScrollTrigger.create({
				trigger: '.intro',
				scrub: 1,
				animation: introTl
			});
		});

		const ctx = gsap.context(() => {
			const bgTween = gsap.to('main', {
				backgroundColor: '#050415',
				color: 'white'
			});

			ScrollTrigger.create({
				trigger: '.intro',
				animation: bgTween,
				start: 'top 80%',
				end: 'bottom 40%',
				toggleActions: 'play reverse play reverse'
			});
		});

		return () => ctx.revert();
	});
</script>

<section class="flex flex-col pt-32 h-screen overflow-hidden">
	<Hero />
</section>
<section class="intro min-h-screen pt-32">
	<div class="flex items-center">
		<div
			class="layout flex flex-col lg:flex-row items-center justify-between gap-8">
			<div class="text basis-1/2">
				<h2 class="text-heading-3 md:text-heading-1">I'm Fazza</h2>
				<p class="text-heading-5 md:text-heading-3 font-dm-sans">
					A Fullstack-able Frontend developer from Indonesia.
				</p>
			</div>
			<div class="me relative">
				<div
					class="back w-full h-full bg-gray-700 absolute -z-10 translate-x-8 translate-y-8 rounded-md">
				</div>
				<img
					src="https://res.cloudinary.com/dkiqn0gqg/image/upload/f_auto,q_auto/v1694473645/fazzaamiarso.com/about/fra_vtmulw.png"
					alt=""
					class="max-w-sm w-full self-center rounded-md" />
			</div>
		</div>
	</div>
	<div
		class="flex flex-col gap-2 sm:gap-20 sm:flex-row justify-between pt-32 layout">
		<h3 class="text-heading-4 sm:text-heading-3 md:text-heading-2">Why?</h3>
		<p class="text-body-lg md:text-body-xl">
			I love building stuff on the web because I can freely express my Idea.
			It’s like having your own tiny space that show you exist in this world.
			Sharing knowledge and opinion, build useful application, craft stunning
			visual experience, make new friends and connections.
		</p>
	</div>
</section>

<section class="h-timeline pt-40 layout">
	<h2
		class="text-heading-4 sm:text-heading-3 md:text-heading-2 mb-4 text-brand-900">
		How it all started?
	</h2>
	<Timeline />
</section>
<section class="pt-32 layout">
	<h2
		class="text-heading-4 sm:text-heading-3 md:text-heading-2 mb-12 text-brand-900">
		I helped others grow too...
	</h2>
	<Help />
</section>
<section class="h-timeline pt-24 pb-32 layout">
	<h2
		class="text-heading-4 sm:text-heading-3 md:text-heading-2 mb-4 text-brand-900">
		Languages I speak
	</h2>
	<p class="text-body-lg md:text-body-xl mb-10 text-gray-800">
		Since I was a child, I’m fascinated by the power that languages hold to
		connect with people simply by speaking a person’s native language. I also
		believe, understanding the culture can open the door to people’s heart. It
		motivated me to learn and understand different language and culture.
	</p>
	<ul class="w-full flex flex-wrap gap-4 md:gap-12">
		{#each languages as lang}
			<li
				class="flex items-center gap-4 ring-1 ring-gray-200 rounded-full pr-4">
				<img src={lang.flagSrc} alt={`${lang.lang} flag`} class="w-10" /><span
					class="text-body-base text-gray-800">{lang.lang}</span>
			</li>
		{/each}
	</ul>
</section>
