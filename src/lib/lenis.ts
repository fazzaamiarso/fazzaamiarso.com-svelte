import Lenis from '@studio-freight/lenis';

export let lenis: Lenis;

export const loadLenis = () => {
	lenis = new Lenis();

	function raf(time: any) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);
};
