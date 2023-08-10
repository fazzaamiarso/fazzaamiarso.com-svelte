<script>
	import logo from '$lib/assets/fz-logo.svg';
	import createPortal from '$lib/actions/createPortal';
	import clsx from 'clsx';

    	const navigationLinks = [
		{ label: 'About', href: '/about' },
		{ label: 'Projects', href: '/#projects' },
		{ label: 'Contact', href: '/#contact' }
	];

    $: drawerOpen = false
</script>
<header class="absolute top-0 left-0 z-50 w-full">
	<div class="flex justify-between items-center w-11/12 mx-auto py-4">
		<a href="/"><img src={logo} alt="" width="50" height="50" /></a>
		<button
			type="button"
			class="sm:hidden"
			on:click={() => {
				drawerOpen = true;
				document.body.style.overflow = 'hidden';
			}}
			><svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-8 h-8"
			>
				<path
					fill-rule="evenodd"
					d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
		<nav class="max-sm:hidden">
			<ul class="flex justify-between gap-14">
				{#each navigationLinks as link}
					<li><a href={link.href} class="text-body-lg">{link.label}</a></li>
				{/each}
			</ul>
		</nav>
	</div>
	<div class="sm:hidden absolute" use:createPortal>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			on:click={() => {
				drawerOpen = false;
				document.body.style.overflow = 'auto';
			}}
			class={clsx(
				'fixed w-screen h-screen bg-gray-100 transition-opacity',
				drawerOpen ? 'opacity-20 z-[101]' : 'opacity-0 -z-10'
			)}
		></div>
		<div
			class={clsx(
				'fixed z-[101] bg-brand-100 h-screen right-0 top-0 p-4 w-80 transition-transform',
				drawerOpen ? 'translate-x-0' : 'translate-x-full'
			)}
		>
			<button
				type="button"
				on:click={() => {
					drawerOpen = false;
					document.body.style.overflow = 'auto';
				}}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-6 h-6"
				>
					<path
						fill-rule="evenodd"
						d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<nav class="">
				<ul class="flex flex-col justify-between gap-14">
					{#each navigationLinks as link}
						<li><a href={link.href} class="text-body-lg">{link.label}</a></li>
					{/each}
				</ul>
			</nav>
		</div>
	</div>
</header>