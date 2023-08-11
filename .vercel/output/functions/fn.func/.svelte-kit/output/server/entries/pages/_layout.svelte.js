import { c as create_ssr_component, v as validate_component, e as each, b as add_attribute, d as escape } from "../../chunks/ssr.js";
import { l as linkedinUrl, g as githubUrl, t as twitterUrl } from "../../chunks/config.js";
import { I as Icon } from "../../chunks/Icon.js";
import clsx from "clsx";
const app = "";
const Move_up_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M13 5H19V11" }], ["path", { "d": "M19 5L5 19" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "move-up-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const MoveUpRight = Move_up_right;
const Send_horizonal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m3 3 3 9-3 9 19-9Z" }], ["path", { "d": "M6 12h16" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "send-horizonal" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const SendHorizonal = Send_horizonal;
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const socialLinks = [
    {
      label: "Linkedin",
      href: linkedinUrl
    },
    { label: "Github", href: githubUrl },
    {
      label: "Twitter",
      href: twitterUrl
    }
  ];
  return `<footer id="contact" class="bg-gray-800 pt-16 pb-4 sticky bottom-0"><div class="w-11/12 mx-auto max-w-7xl"><h2 class="text-heading-4 sm:text-heading-3 font-bold text-brand-100 mb-2" data-svelte-h="svelte-p1hd2s">Let’s talk or build awesome things together!</h2> <p class="sm:text-body-xl text-body-base text-gray-200 mb-12" data-svelte-h="svelte-38tsz0">I’m currently looking for Frontend Developer Role. Don’t hesitate to reach me out to ask questions, discussions,
			or just to say hello.</p> <a href="mailto:fazzaamiarso@gmail.com" class="inline-flex text-body-base group justify-center items-center gap-8 px-4 py-2 rounded-full bg-brand-700 text-brand-100 sm:text-body-lg font-bold mb-20">fazzaamiarso@gmail.com
			<span class="inline-flex items-center justify-center w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] bg-brand-100 rounded-full">${validate_component(SendHorizonal, "SendHorizonal").$$render(
    $$result,
    {
      "aria-hidden": "true",
      size: "24",
      class: "text-gray-800"
    },
    {},
    {}
  )}</span></a> <ul class="flex flex-wrap gap-16 items-center pb-40">${each(socialLinks, (link) => {
    return `<li class="text-body-lg sm:text-body-xl text-gray-100"><a${add_attribute("href", link.href, 0)} referrerpolicy="no-referrer" target="_blank" class="flex items-center gap-1">${escape(link.label)} ${validate_component(MoveUpRight, "MoveUpRight").$$render($$result, { color: "currentColor" }, {}, {})}</a> </li>`;
  })}</ul> <div class="flex flex-wrap items-center justify-between" data-svelte-h="svelte-1svh1r3"><div class="text-body-sm sm:text-body-base font-bold text-gray-200">© 2023 Fazza Razaq Amiarso --- Bogor, Indonesia</div> <a href="/#?credit_open=true" class="text-body-sm sm:text-body-base font-bold text-gray-200">Credits</a></div></div></footer>`;
});
const logo = "/_app/immutable/assets/fz-logo.c7d3b641.svg";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let drawerOpen;
  const navigationLinks = [{ label: "About", href: "/about" }, { label: "Projects", href: "/#projects" }];
  drawerOpen = false;
  return `<header class="absolute top-0 left-0 z-50 w-full"><div class="flex justify-between items-center w-11/12 mx-auto py-4 max-w-7xl"><a href="/" data-svelte-h="svelte-1k3h8go"><img${add_attribute("src", logo, 0)} alt="" width="50" height="50"></a> <button type="button" class="sm:hidden" data-svelte-h="svelte-180n53n"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clip-rule="evenodd"></path></svg></button> <nav class="max-sm:hidden"><ul class="flex justify-between gap-14">${each(navigationLinks, (link) => {
    return `<li><a${add_attribute("href", link.href, 0)} class="text-body-lg">${escape(link.label)}</a></li>`;
  })} <li><a href="#contact" class="text-body-lg" data-svelte-h="svelte-hnojd9">Contact</a></li></ul></nav></div> <div class="sm:hidden absolute">  <div${add_attribute("class", clsx("fixed w-screen h-screen bg-gray-100 transition-opacity", drawerOpen ? "opacity-20 z-[101]" : "opacity-0 -z-10"), 0)}></div> <div${add_attribute("class", clsx("fixed z-[101] bg-brand-100 h-screen right-0 top-0 p-4 w-80 transition-transform", drawerOpen ? "translate-x-0" : "translate-x-full"), 0)}><button type="button" data-svelte-h="svelte-5ykg3k"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg></button> <nav class=""><ul class="flex flex-col justify-between gap-14">${each(navigationLinks, (link) => {
    return `<li><a${add_attribute("href", link.href, 0)} class="text-body-lg">${escape(link.label)}</a></li>`;
  })} <li><a href="#contact" class="text-body-lg" data-svelte-h="svelte-19qkvpe">Contact</a></li></ul></nav></div></div></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${`<div class="fixed inset-0 bg-[#000] z-[1000] flex justify-center items-center h-screen w-full text-heading-3" data-svelte-h="svelte-qy5tfl"><p id="loading" class="text-brand-400 animate-pulse">Loading...</p></div>`} <div id="portal"></div> ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="relative z-[1] bg-white min-h-screen"><div class="w-11/12 mx-auto max-w-7xl">${slots.default ? slots.default({}) : ``}</div></main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
