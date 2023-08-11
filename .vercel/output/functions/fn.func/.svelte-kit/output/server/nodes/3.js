

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.301d9381.js","_app/immutable/chunks/scheduler.6cd105c3.js","_app/immutable/chunks/index.86f60018.js","_app/immutable/chunks/Icon.67b838d3.js"];
export const stylesheets = [];
export const fonts = [];
