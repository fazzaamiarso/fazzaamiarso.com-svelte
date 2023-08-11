import { c as create_ssr_component, b as add_attribute } from "../../chunks/ssr.js";
const notFoundGif = "/_app/immutable/assets/gojo-satoru-min.f8332169.gif";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1tp75qd_START -->${$$result.title = `<title>404 | Fazza Razaq Amiarso</title>`, ""}<!-- HEAD_svelte-1tp75qd_END -->`, ""} <div class="flex flex-col py-16 justify-center items-center gap-8" data-svelte-h="svelte-1ah2sua"><div class=""><h1 class="font-fira-sans text-heading-1 text-brand-500">404</h1> <h2 class="font-fira-sans text-heading-3 text-brand-800">Page not found</h2> <p class="text-body-xl font-bold text-gray-600 mb-8">What are you doing, here?</p> <a href="/" class="text-body-lg text-gray-700">Return to Home</a></div> <div><img${add_attribute("src", notFoundGif, 0)} alt="" class="rounded-lg"></div></div>`;
});
export {
  Error as default
};
