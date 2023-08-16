import gsap from '$lib/gsap';

export const PRELOADER_DURATION = 3;
const IN_DURATION = 0.4;

export function animateBottomSection() {
	return gsap.from('#hero-bottom-section', {
		duration: IN_DURATION,
		opacity: 0,
		yPercent: 50,
		ease: 'power3.out'
	});
}

export function animateHeroText() {
	return gsap
		.timeline({
			defaults: {
				duration: IN_DURATION
			}
		})
		.from("[data-animate='h1-first']", {
			opacity: 0,
			x: -50,
			ease: 'power3.out'
		})
		.from(
			"[data-animate='h1-second']",
			{
				opacity: 0,
				x: 50,
				ease: 'power3.out'
			},
			'<'
		)
		.from(
			"[data-animate='h1-third']",
			{
				opacity: 0,
				x: -50,
				ease: 'power3.out'
			},
			'<'
		);
}

export function animateNavbar() {
	return gsap.from('#navbar', {
		delay: PRELOADER_DURATION,
		duration: IN_DURATION,
		opacity: 0,
		yPercent: -50
	});
}
