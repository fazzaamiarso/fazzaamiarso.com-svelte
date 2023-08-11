import { c as create_ssr_component, v as validate_component, b as add_attribute, e as each, d as escape } from "../../../chunks/ssr.js";
import { I as Icon } from "../../../chunks/Icon.js";
const External_link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
      }
    ],
    ["polyline", { "points": "15 3 21 3 21 9" }],
    [
      "line",
      {
        "x1": "10",
        "x2": "21",
        "y1": "14",
        "y2": "3"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "external-link" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ExternalLink = External_link;
const myPic = "/_app/immutable/assets/fazza-about.d7f65d4f.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const otherLinks = [
    {
      type: "Blog",
      category: "Web development",
      link: "blog.fazzaamiarso.com"
    },
    {
      type: "Blog",
      category: "Journal",
      link: "journal.fazzaamiarso.com"
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1kzw8ya_START -->${$$result.title = `<title>About | Fazza Razaq Amiarso</title>`, ""}<!-- HEAD_svelte-1kzw8ya_END -->`, ""} <div class="py-32"><div class="pb-12 flex flex-col lg:flex-row-reverse lg:items-start lg:justify-start gap-12" data-svelte-h="svelte-lggleh"><div><h1 class="text-heading-3 lg:text-heading-1 font-bold text-brand-900">Hi, I&#39;m Fazza</h1> <p class="text-heading-5 lg:text-heading-4 font-bold text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <p class="text-body-base lg:text-body-lg text-gray-900">Donec vulputate lorem urna, porttitor tincidunt dolor tincidunt et. Ut vel urna volutpat, tincidunt felis ac,
				tristique enim. Nullam at mi a ligula faucibus dignissim eu eu sapien.</p></div> <div class="self-center lg:basis-[40%]"><img${add_attribute("src", myPic, 0)} alt="" class="w-full max-w-xs"></div></div> <div><h2 class="text-heading-5 sm:text-heading-4 font-bold text-brand-800 mb-1" data-svelte-h="svelte-u9cmvt">Checkout My Other Endeavors</h2> <p class="text-gray-700 text-body-base mb-7 sm:text-body-lg" data-svelte-h="svelte-1qoysrk">I love sharing my knowledge with others and writing in general. So here are some of my endeavors</p> <ul class="space-y-12">${each(otherLinks, (item) => {
    return `<li class="grid grid-cols-3 w-full"><div class="col-span-1"><div class="text-heading-5 font-bold text-brand-500">${escape(item.type)}</div> <div class="text-body-base text-gray-600">${escape(item.category)}</div></div> <a href="#link-1" class="inline-flex items-center gap-1 text-body-base font-bold text-gray-700 col-span-2">${escape(item.link)} ${validate_component(ExternalLink, "ExternalLink").$$render($$result, { "aria-hidden": "true", size: "20" }, {}, {})}</a> </li>`;
  })}</ul></div></div>`;
});
export {
  Page as default
};
