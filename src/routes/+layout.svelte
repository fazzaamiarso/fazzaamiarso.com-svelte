<script>
	import '../app.css';
	import logo from '$lib/assets/fz-logo.svg';

	const navigationLinks = [
		{ label: 'About', href: '/about' },
		{ label: 'Projects', href: '/#projects' },
		{ label: 'Contact', href: '#contact' }
	];
</script>

<header>
	<div class="flex justify-between">
		<a href="/"><img src={logo} alt="" width="50" height="50" /></a>
		<nav>
			<ul class="flex justify-between gap-[56px]">
				{#each navigationLinks as link}
					<li><a href={link.href} class="text-body-lg">{link.label}</a></li>
				{/each}
			</ul>
		</nav>
	</div>
</header>
<main class="w-11/12 mx-auto max-w-3xl">
	<slot />
</main>
<footer />
