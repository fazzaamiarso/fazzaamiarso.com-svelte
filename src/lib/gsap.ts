/* eslint-disable @typescript-eslint/ban-ts-comment */
// BUG: must import gsap from dist because of how sveltekit/vite imports module. https://greensock.com/forums/topic/32031-scrolltrigger-error-only-in-production/#comment-160393
// @ts-ignore
import gsap from 'gsap/dist/gsap';
// @ts-ignore
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { ScrollTrigger };
export default gsap;
