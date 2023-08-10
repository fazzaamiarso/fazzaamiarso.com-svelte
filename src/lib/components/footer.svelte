<script>
	import * as config from '$lib/site/config';

	const socialLinks = [
		{ label: 'Linkedin', href: config.linkedinUrl },
		{ label: 'Github', href: config.githubUrl },
		{ label: 'Twitter', href: config.twitterHandle }
	];
</script>

<footer id="contact" class="bg-gray-800 pt-16 pb-4 sticky bottom-0">
	<div class="w-11/12 mx-auto max-w-6xl">
		<h2 class="text-heading-4 sm:text-heading-3 font-bold text-brand-100 mb-2">
			Let’s talk or build awesome things together!
		</h2>
		<p class="sm:text-body-xl text-body-base text-gray-200 mb-12">
			I’m currently looking for Frontend Developer Role. Don’t hesitate to reach me out to ask
			questions, discussions, or just to say hello.
		</p>
		<a
			href="mailto:fazzaamiarso@gmail.com"
			class="inline-flex text-body-base group justify-center items-center gap-8 px-4 py-2 rounded-full bg-brand-700 text-brand-100 sm:text-body-lg font-bold mb-20"
			>fazzaamiarso@gmail.com
			<span
				class="inline-flex items-center justify-center w-[45px] h-[45px] bg-brand-100 rounded-full"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-6 h-6 text-gray-800 group-hover:-rotate-45 transition-transform"
					aria-hidden="true"
				>
					<path
						d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"
					/>
				</svg>
			</span>
		</a>
		<ul class="flex flex-wrap gap-16 items-center pb-40">
			{#each socialLinks as link}
				<li class="text-body-lg sm:text-body-xl text-gray-100">
					<a
						href={link.href}
						referrerpolicy="no-referrer"
						target="_blank"
						class="flex items-center gap-1"
						>{link.label}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</li>
			{/each}
		</ul>
		<div class="flex flex-wrap items-center justify-between">
			<div class="text-body-sm sm:text-body-base font-bold text-gray-200">
				© 2023 Fazza Razaq Amiarso --- Bogor, Indonesia
			</div>
			<a href="/#?credit_open=true" class="text-body-sm sm:text-body-base font-bold text-gray-200"
				>Credits</a
			>
		</div>
	</div>
</footer>
