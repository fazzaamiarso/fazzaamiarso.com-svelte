

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0eceddd3.js","_app/immutable/chunks/scheduler.eb238d9c.js","_app/immutable/chunks/index.93674b12.js"];
export const stylesheets = [];
export const fonts = [];
