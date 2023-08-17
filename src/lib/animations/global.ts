import gsap from 'gsap';

export const PRELOADER_DURATION = 3;

export function animatePreloader() {
	return gsap
		.timeline()
		.set('#preloader-container > *', { yPercent: 100 })
		.to('#preloader-container > *', {
			autoAlpha: 1, // element initially set to visiblity:hidden to prevent flash of unwanted content bug
			stagger: 0.3,
			duration: 1.5,
			yPercent: 0,
			ease: 'power3.inOut'
		})
		.to('#preloader-container > *', {
			delay: 0.7,
			opacity: 0,
			stagger: 0.7
		})
		.to('#preloader', {
			opacity: 0
		})
		.totalDuration(PRELOADER_DURATION);
}
