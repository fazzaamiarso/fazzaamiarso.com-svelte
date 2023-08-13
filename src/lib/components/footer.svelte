<script>
	import * as config from '$lib/site/config';
	import { MoveUpRight, SendHorizonal } from 'lucide-svelte';

	const socialLinks = [
		{ label: 'Linkedin', href: config.linkedinUrl },
		{ label: 'Github', href: config.githubUrl },
		{ label: 'Twitter', href: config.twitterUrl }
	];
</script>

<footer id="contact" class="bg-gray-800 pt-16 pb-4 sticky bottom-0">
	<div class="w-11/12 mx-auto max-w-7xl">
		<h2 class="text-heading-4 sm:text-heading-3 font-bold text-brand-100 mb-2">
			Let’s talk or build awesome things together!
		</h2>
		<p class="sm:text-body-xl text-body-base text-gray-200 mb-12">
			I’m currently looking for Frontend Developer Role. Don’t hesitate to reach me out to ask questions, discussions,
			or just to say hello.
		</p>
		<a
			href="mailto:fazzaamiarso@gmail.com"
			class="inline-flex text-body-base group justify-center items-center gap-8 px-4 py-2 rounded-full bg-brand-700 text-brand-100 sm:text-body-lg font-bold mb-20"
			>fazzaamiarso@gmail.com
			<span
				class="inline-flex items-center justify-center w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] bg-brand-100 rounded-full"
				><SendHorizonal aria-hidden="true" size="24" class="text-gray-800" />
			</span>
		</a>
		<ul class="flex flex-wrap gap-16 items-center pb-40">
			{#each socialLinks as link}
				<li class="text-body-lg sm:text-body-xl text-gray-100">
					<a href={link.href} referrerpolicy="no-referrer" target="_blank" class="flex items-center gap-1"
						>{link.label}
						<MoveUpRight color="currentColor" />
					</a>
				</li>
			{/each}
		</ul>
		<div class="flex flex-wrap items-center justify-between">
			<div class="text-body-sm sm:text-body-base font-bold text-gray-200">
				© 2023 Fazza Razaq Amiarso --- Bogor, Indonesia
			</div>
			<a href="/credits" class="text-body-sm sm:text-body-base font-bold text-gray-200">Credits</a>
		</div>
	</div>
</footer>
