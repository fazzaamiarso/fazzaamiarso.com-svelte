

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.2a78c321.js","_app/immutable/chunks/scheduler.eb238d9c.js","_app/immutable/chunks/index.93674b12.js","_app/immutable/chunks/lenis.bc182e42.js","_app/immutable/chunks/Icon.c7561d45.js"];
export const stylesheets = [];
export const fonts = [];
