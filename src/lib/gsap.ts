/* eslint-disable @typescript-eslint/ban-ts-comment */
// BUG: must import gsap from dist because of how sveltekit/vite imports module. https://greensock.com/forums/topic/32031-scrolltrigger-error-only-in-production/#comment-160393
import { browser } from '$app/environment';
// @ts-ignore
import gsap from 'gsap';
// @ts-ignore
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Flip from 'gsap/dist/Flip';

gsap.registerPlugin(Flip);

if (browser) {
	gsap.registerPlugin(ScrollTrigger);
}

export { ScrollTrigger, Flip };
export default gsap;
