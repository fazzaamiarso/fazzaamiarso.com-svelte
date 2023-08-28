<script lang="ts">
	import * as config from '$lib/site/config';
	import { MoveUpRight } from 'lucide-svelte';
	import clsx from 'clsx';

	const socialLinks = [
		{ label: 'Linkedin', href: config.linkedinUrl },
		{ label: 'Github', href: config.githubUrl },
		{ label: 'Twitter', href: config.twitterUrl }
	];
</script>

<footer id="contact" class="">
	<div class="py-24 border-y-[1px]">
		<div class="w-11/12 mx-auto max-w-7xl">
			<h2 class="text-heading-4 sm:text-heading-3 font-bold text-brand-900 mb-2">
				Let’s talk or build awesome things together!
			</h2>
			<p class="sm:text-body-xl text-body-base text-gray-600 mb-12">
				I’m currently looking for Frontend Developer Role. Don’t hesitate to reach me out to ask questions, discussions,
				or just to say hello.
			</p>
			<ul class="flex flex-wrap gap-16 items-center">
				{#each socialLinks as link}
					<li class="text-body-lg sm:text-body-xl text-gray-800 group">
						<a href={link.href} referrerpolicy="no-referrer" target="_blank" class="flex items-center gap-1 group"
							>{link.label}
							<span class="arrow-container relative overflow-hidden">
								<MoveUpRight
									size="28"
									color="currentColor"
									class={clsx(
										'transition-transform duration-500 relative',
										'group-hover:translate-x-full group-hover:-translate-y-full'
									)} />
								<MoveUpRight
									size="28"
									color="currentColor"
									class={clsx(
										'absolute duration-500 transition-transform top-0 left-0',
										'-translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0'
									)} />
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="flex flex-wrap items-center justify-between py-12 w-11/12 mx-auto max-w-7xl">
		<div class="flex gap-12">
			<a href="#/" class="underline text-body-lg sm:text-body-xl text-gray-800 hover:no-underline">Resume</a>
			<a href="/credits" class="underline text-body-lg sm:text-body-xl text-gray-800 hover:no-underline">Credits</a>
		</div>
		<div class="text-body-sm sm:text-body-base text-gray-800">© 2023 Fazza Razaq Amiarso -- Bogor, Indonesia</div>
	</div>
</footer>
