<script lang="ts">
	import logo from '$lib/assets/fz-logo.svg';
	import { lenis } from '$lib/lenis';
	import { onMount } from 'svelte';
	import gsap from '$lib/gsap';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { animateMenuButton, animateNavbar, animatePanelOpen } from '$lib/animations/hero';
	import { page } from '$app/stores';
	import clsx from 'clsx';
	import * as trap from 'focus-trap';

	const navigationLinks = [
		{ label: 'About', href: '/about' },
		{ label: 'Project', href: '#projects' },
		{ label: 'Contact', href: '#contact' }
	];

	const navigationMobileLinks = [
		{ label: 'About', href: '/about' },
		{ label: 'Project', href: '#projects' },
		{ label: 'Contact', href: '/#contact' },
		{ label: 'Credits', href: '/credits' }
	];

	$: currentPath = $page.url.pathname;

	let focusTrap: trap.FocusTrap;
	let drawerOpen = false;

	let menuTl: gsap.core.Timeline;
	let panelTl: gsap.core.Timeline;

	beforeNavigate(async ({ to }) => {
		if (drawerOpen && to?.route.id) {
			drawerOpen = false;
			menuTl.reversed(!menuTl.reversed());
		}
	});

	afterNavigate(({ from }) => {
		if (!drawerOpen && from?.route.id) {
			panelTl.progress(0).reverse();
		}

		toggleFocusAndScroll();
	});

	onMount(() => {
		focusTrap = trap.createFocusTrap('#navbar', { preventScroll: true });

		gsap.set('#line-2', { xPercent: 30 });
		gsap.set('#nav-drawer', { yPercent: -100 });

		animateNavbar();
		menuTl = animateMenuButton();
		panelTl = animatePanelOpen();
	});

	function toggleFocusAndScroll() {
		if (drawerOpen) {
			focusTrap.activate();
			lenis.stop();
		} else {
			focusTrap.deactivate();
			lenis.start();
		}
	}

	function toggleMenu() {
		drawerOpen = !drawerOpen;

		menuTl.reversed(!menuTl.reversed());
		panelTl.reversed(!panelTl.reversed());

		toggleFocusAndScroll();
	}
</script>

<header id="navbar" class="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-white bg-opacity-50">
	<div id="nav-drawer" class="sm:hidden bg-white h-screen fixed w-full pt-32 flex flex-col">
		<nav class="">
			<ul class="flex flex-col justify-between">
				{#each navigationMobileLinks as link}
					{@const isActive = currentPath.includes(link.href)}
					<li class="text-heading-3 group">
						<div data-animate="separator" class="w-screen absolute left-0 bg-gray-800 h-px"></div>
						<a
							data-animate="nav-link"
							class={clsx('w-11/12 mx-auto block py-6', isActive ? 'text-brand-600' : 'text-gray-800')}
							href={link.href}>{link.label}</a>
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
			class="inline-flex flex-col gap-2 justify-center items-center w-12 h-12 sm:hidden overflow-hidden"
			on:click={toggleMenu}>
			<div id="line-1" class="w-full h-[2px] bg-gray-900"></div>
			<div id="line-2" class="w-full h-[2px] bg-gray-900"></div>
		</button>
		<!--  -->
		<!-- Desktop Nav -->
		<nav class="max-sm:hidden">
			<ul class="flex justify-between gap-14">
				{#each navigationLinks as link}
					{@const isActive = currentPath.includes(link.href)}
					<li>
						<a
							href={link.href}
							class={clsx(
								'text-body-lg',
								isActive ? 'text-brand-600 transition-colors' : 'text-gray-700 hover:text-gray-500'
							)}
							on:click={() => link.href.includes('#') && lenis.scrollTo(link.href)}>{link.label}</a>
					</li>
				{/each}
			</ul>
		</nav>
		<!--  -->
	</div>
</header>
