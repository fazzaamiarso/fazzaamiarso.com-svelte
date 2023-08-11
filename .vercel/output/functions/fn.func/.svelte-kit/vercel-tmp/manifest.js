export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon/android-chrome-192x192.png","favicon/android-chrome-256x256.png","favicon/apple-touch-icon.png","favicon/favicon-16x16.png","favicon/favicon-32x32.png","favicon/favicon.ico","robots.txt"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.2868b7f8.js","app":"_app/immutable/entry/app.e957f957.js","imports":["_app/immutable/entry/start.2868b7f8.js","_app/immutable/chunks/scheduler.6cd105c3.js","_app/immutable/chunks/singletons.340a7d9b.js","_app/immutable/entry/app.e957f957.js","_app/immutable/chunks/scheduler.6cd105c3.js","_app/immutable/chunks/index.86f60018.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
