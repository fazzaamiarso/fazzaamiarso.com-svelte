<script lang="ts">
	import logo from '$lib/assets/fz-logo.svg';
	import clsx from 'clsx';
	import { lenis } from '$lib/lenis';
	import { onMount } from 'svelte';
	import gsap from '$lib/gsap';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	const navigationLinks = [
		{ label: 'About', href: '/about' },
		{ label: 'Projects', href: '#projects' }
	];

	const navigationMobileLinks = [
		{ label: 'About', href: '/about' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Contacts', href: '/#contac' },
		{ label: 'Credits', href: '/credits' }
	];

	let drawerOpen = false;

	let menuTl: gsap.core.Timeline;
	let panelTl: gsap.core.Timeline;

	function animatePanelOpen() {
		return gsap
			.timeline({ paused: true, ease: 'power3.out' })
			.to('#nav-drawer', { yPercent: 0 })
			.from("[data-animate='nav-link']", {
				opacity: 0,
				stagger: 0.1
			})
			.from(
				"[data-animate='separator']",
				{
					xPercent: -100,
					stagger: 0.1
				},
				'<'
			)
			.reverse();
	}

	function animateMenuButton() {
		const tl = gsap
			.timeline({ paused: true })
			.to('#line-2', { xPercent: 0 })
			.to('#line-1', { rotate: 45, transformOrigin: 'center', y: 4, ease: 'power1.out', duration: 0.3 })
			.to('#line-2', { rotate: -45, transformOrigin: 'center', y: -5, ease: 'power1.out', duration: 0.3 }, '<')
			.reverse();
		return tl;
	}

	beforeNavigate(async ({ to }) => {
		if (drawerOpen && to?.route.id) {
			drawerOpen = false;
			lenis.start();
			menuTl.reversed(!menuTl.reversed());
		}
	});

	afterNavigate(({ from }) => {
		if (!drawerOpen && from?.route.id) {
			panelTl.progress(0).reverse();
		}
	});

	onMount(() => {
		gsap.set('#line-2', { xPercent: 30 });
		gsap.set('#nav-drawer', { yPercent: -100 });

		menuTl = animateMenuButton();
		panelTl = animatePanelOpen();
	});
</script>

<header id="navbar" class="absolute top-0 left-0 z-50 w-full">
	<div id="nav-drawer" class="sm:hidden bg-white h-screen fixed w-full pt-32 flex flex-col">
		<nav class="">
			<ul class="flex flex-col justify-between">
				{#each navigationMobileLinks as link}
					<li class="text-heading-3 group">
						<div data-animate="separator" class="w-screen absolute left-0 bg-gray-800 h-px"></div>
						<a data-animate="nav-link" class="w-11/12 mx-auto block py-6 text-gray-800" href={link.href}
							>{link.label}</a>
						<div data-animate="separator" class="w-screen absolute left-0 bg-gray-800 group-last:h-px"></div>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
	<div class="flex justify-between items-center w-11/12 mx-auto py-4 max-w-7xl z-[100] relative">
		<a href="/"><img src={logo} alt="" width="50" height="50" /></a>
		<!-- Drawer Trigger -->
		<button
			class="sm:hidden inline-flex flex-col gap-2 justify-center items-center w-12 h-12 overflow-hidden"
			on:click={() => {
				drawerOpen = !drawerOpen;

				menuTl.reversed(!menuTl.reversed());
				panelTl.reversed(!panelTl.reversed());

				if (drawerOpen) {
					lenis.stop();
				} else {
					lenis.start();
				}
			}}>
			<div id="line-1" class="w-full h-[2px] bg-gray-900"></div>
			<div id="line-2" class="w-full h-[2px] bg-gray-900"></div>
		</button>
		<!--  -->
		<!-- Desktop Nav -->
		<nav class="max-sm:hidden">
			<ul class="flex justify-between gap-14">
				{#each navigationLinks as link}
					<li>
						<a
							href={link.href}
							class="text-body-lg"
							on:click={() => link.href.includes('#') && lenis.scrollTo(link.href)}>{link.label}</a>
					</li>
				{/each}
				<li>
					<a
						href="#contact"
						class="text-body-lg"
						on:click={() => {
							const scrollValue = document.querySelector('main')?.getBoundingClientRect().height;
							lenis.scrollTo(scrollValue);
						}}>Contact</a>
				</li>
			</ul>
		</nav>
		<!--  -->
	</div>
</header>
