import Lenis from '@studio-freight/lenis';

export let lenis: Lenis;

export const loadLenis = () => {
	if (lenis !== undefined) {
		console.log('Lenis has been initiated!');
		return;
	}
	lenis = new Lenis();
};
