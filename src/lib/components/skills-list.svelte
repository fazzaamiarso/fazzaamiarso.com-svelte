<script>
	import {
		typescript,
		svelte,
		javascript,
		next,
		css,
		html,
		react,
		tailwind,
		astro,
		figma,
		gsap as gsapIcon,
		redux,
		jest,
		playwright,
		cypress
	} from '$lib/assets/icons';
	const skills = [
		{ name: 'Svelte/Sveltekit', icon: svelte },
		{ name: 'Typescript', icon: typescript },
		{ name: 'Javascript', icon: javascript },
		{ name: 'Next.js', icon: next },
		{ name: 'CSS', icon: css },
		{ name: 'HTML', icon: html },
		{ name: 'React', icon: react },
		{ name: 'Tailwind', icon: tailwind },
		{ name: 'Astro', icon: astro },
		{ name: 'Figma', icon: figma },
		{ name: 'GSAP', icon: gsapIcon },
		{ name: 'Redux', icon: redux },
		{ name: 'Jest', icon: jest },
		{ name: 'Playwright', icon: playwright },
		{ name: 'Cypress', icon: cypress }
	];
</script>

<ul class="grid grid-cols-2 sm:grid-cols-3 items-center gap-8 flex-wrap">
	{#each skills as skill}
		<li data-animate="skill" class="flex items-center text-body-base text-gray-700 font-bold gap-2 break-all">
			<img src={skill.icon} alt="" class="w-8 md:w-10 lg:w-12" />{skill.name}
		</li>{/each}
</ul>
