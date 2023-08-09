import type { Action } from 'svelte/action';

const createPortal: Action<HTMLElement> = (node) => {
	const portalRoot = document.querySelector('#portal');
	portalRoot?.appendChild(node);

	const destroy = () => {
		if (node.parentNode) {
			node.parentNode.removeChild(node);
		}
	};

	return {
		destroy
	};
};

export default createPortal;
