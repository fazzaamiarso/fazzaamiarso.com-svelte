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
	const tweenValues: gsap.TweenVars[] = [
		{
			opacity: 0,
			x: -50
		},
		{
			opacity: 0,
			x: 50
		},
		{
			opacity: 0,
			x: -50
		}
	];
	const heroText = gsap.utils.toArray<HTMLElement>('#hero-text > *');
	const tl = gsap.timeline({ defaults: { duration: IN_DURATION, ease: 'power3.out' } });

	heroText.forEach((text, idx) => {
		const tween = gsap.from(text, { ...tweenValues[idx] });
		tl.add(tween, idx === 0 ? undefined : '<');
	});

	return tl;
}

export function animateNavbar() {
	return gsap.from('#navbar', {
		delay: PRELOADER_DURATION,
		duration: IN_DURATION,
		opacity: 0,
		yPercent: -50
	});
}
