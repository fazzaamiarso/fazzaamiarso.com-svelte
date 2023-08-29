/* eslint-disable @typescript-eslint/ban-ts-comment */
// BUG: must import gsap from dist because of how sveltekit/vite imports module. https://greensock.com/forums/topic/32031-scrolltrigger-error-only-in-production/#comment-160393
import { browser } from '$app/environment';
// @ts-ignore
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import CustomEase from 'gsap/dist/CustomEase';

if (browser) {
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(CustomEase);

	createCustomEase();
}

function createCustomEase() {
	CustomEase.create('quintic.out', '0.22, 1, 0.36, 1');
}

export { ScrollTrigger, CustomEase };
export default gsap;
