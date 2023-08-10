<script>
	import myPic from '$lib/assets/fazza-about.png';
</script>

<svelte:head>
	<title>About | Fazza Razaq Amiarso</title>
</svelte:head>
<div class="py-32">
	<div class="pb-12 flex flex-col items-center lg:flex-row-reverse lg:items-start gap-16">
		<div>
			<h1 class="text-heading-3 lg:text-heading-1 font-bold text-brand-900">Hi, I'm Fazza</h1>
			<p class="text-heading-5 lg:text-heading-4 font-bold text-gray-600 mb-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>
			<p class="text-body-base lg:text-body-lg text-gray-900">
				Donec vulputate lorem urna, porttitor tincidunt dolor tincidunt et. Ut vel urna volutpat,
				tincidunt felis ac, tristique enim. Nullam at mi a ligula faucibus dignissim eu eu sapien.
			</p>
		</div>
		<div class="lg:basis-[60%]">
			<img src={myPic} alt="" />
		</div>
	</div>
	<div>
		<h2 class="text-heading-4 font-bold text-brand-800">Checkout My Other Endeavors</h2>
		<p class="text-gray-700 text-body-base mb-7">
			I love sharing my knowledge with others and writing in general. So here are some of my
			endeavors
		</p>
		<ul class="space-y-12">
			<li class="grid grid-cols-3 w-full">
				<div class="col-span-1">
					<div class="text-heading-5 font-bold text-brand-500">Blog</div>
					<div class="text-body-base text-gray-600">Web development</div>
				</div>
				<a
					href="#link-1"
					class="inline-flex items-center gap-1 text-body-base font-bold text-gray-700 col-span-2"
					>blog.fazzaamiarso.com <svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-5 h-5"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			</li>
			<li class="grid grid-cols-3">
				<div class="col-span-1">
					<div class="text-heading-5 font-bold text-brand-500">Blog</div>
					<div class="text-body-base text-gray-600">Journal</div>
				</div>
				<a
					href="#link-2"
					class="inline-flex items-center gap-1 text-body-base font-bold text-gray-700 col-span-2"
					>journal.fazzaamiarso.com <svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-5 h-5"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			</li>
		</ul>
	</div>
</div>
