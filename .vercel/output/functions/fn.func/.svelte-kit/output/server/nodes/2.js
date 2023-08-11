

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.234bc846.js","_app/immutable/chunks/scheduler.6cd105c3.js","_app/immutable/chunks/index.86f60018.js","_app/immutable/chunks/gsap.cc5ddef3.js","_app/immutable/chunks/Icon.67b838d3.js"];
export const stylesheets = [];
export const fonts = [];
