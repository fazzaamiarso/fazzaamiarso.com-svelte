/* eslint-disable @typescript-eslint/ban-ts-comment */
import { browser } from '$app/environment';
// BUG: must import gsap from dist because of how sveltekit/vite imports module. https://greensock.com/forums/topic/32031-scrolltrigger-error-only-in-production/#comment-160393
// @ts-ignore
import { gsap } from 'gsap/dist/gsap';
// @ts-ignore
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (browser) {
	gsap.registerPlugin(ScrollTrigger);
}

export default gsap;
