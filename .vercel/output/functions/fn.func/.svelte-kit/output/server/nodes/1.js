

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c8649cd3.js","_app/immutable/chunks/scheduler.6cd105c3.js","_app/immutable/chunks/index.86f60018.js"];
export const stylesheets = [];
export const fonts = [];
