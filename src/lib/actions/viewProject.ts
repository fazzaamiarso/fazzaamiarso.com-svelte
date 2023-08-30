import type { Action } from 'svelte/action';
import gsap from '$lib/gsap';

const viewProject: Action<HTMLElement> = (node) => {
	const mm = gsap.matchMedia();
	mm.add('(min-width:1024px)', (ctx) => {
		const scopedQuery = gsap.utils.selector(node);

		const tl = gsap
			.timeline({ paused: true, defaults: { ease: 'quintic.out' } })
			.to(scopedQuery('.arrow-right'), { x: 100 })
			.to(scopedQuery('.arrow-left'), { x: 15 }, '<+=.1')
			.to(scopedQuery('.text'), { x: 30 }, '<');

		ctx.add('onMouseenter', onMouseenter);
		ctx.add('onMouseout', onMouseout);

		node.addEventListener('mouseenter', ctx.onMouseenter);
		node.addEventListener('mouseout', ctx.onMouseout);

		function onMouseenter() {
			tl.play();
		}
		function onMouseout() {
			tl.reverse();
		}

		return () => {
			node.removeEventListener('mouseenter', ctx.onMouseenter);
			node.removeEventListener('mouseout', ctx.onMouseout);
		};
	});

	const destroy = () => {
		mm.kill();
	};

	return {
		destroy
	};
};

export default viewProject;
