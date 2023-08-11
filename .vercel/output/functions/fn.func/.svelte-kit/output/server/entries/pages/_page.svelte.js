import { c as create_ssr_component, v as validate_component, e as each, b as add_attribute, d as escape } from "../../chunks/ssr.js";
import { s as siteDescription, a as siteTitle, b as siteUrl, c as twitterHandle } from "../../chunks/config.js";
import { I as Icon } from "../../chunks/Icon.js";
const Arrow_down_circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M12 8v8" }],
    ["path", { "d": "m8 12 4 4 4-4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-down-circle" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ArrowDownCircle = Arrow_down_circle;
const svelte = "/_app/immutable/assets/svelte.9939903c.svg";
const typescript = "/_app/immutable/assets/typescript.bd9a418b.svg";
const javascript = "/_app/immutable/assets/javascript.a098f53b.svg";
const next = "/_app/immutable/assets/next.0bcaa5c9.svg";
const html = "/_app/immutable/assets/html.a92c6edf.svg";
const css = "/_app/immutable/assets/css.27e7a9d0.svg";
const react = "/_app/immutable/assets/react.292bdf6b.svg";
const tailwind = "/_app/immutable/assets/tailwind.27e1a806.svg";
const astro = "/_app/immutable/assets/astro.8bf9ec3c.svg";
const figma = "/_app/immutable/assets/figma.2f86fca5.svg";
const gsapIcon = "/_app/immutable/assets/gsap.2cd632bb.svg";
const redux = "/_app/immutable/assets/redux.26e62d3c.svg";
const cypress = "/_app/immutable/assets/cypress.e51ae035.svg";
const playwright = "/_app/immutable/assets/playwright.301a01f1.svg";
const jest = "/_app/immutable/assets/jest.dd875858.svg";
const Skills_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const skills = [
    { name: "Svelte/Sveltekit", icon: svelte },
    { name: "Typescript", icon: typescript },
    { name: "Javascript", icon: javascript },
    { name: "Next.js", icon: next },
    { name: "CSS", icon: css },
    { name: "HTML", icon: html },
    { name: "React", icon: react },
    { name: "Tailwind", icon: tailwind },
    { name: "Astro", icon: astro },
    { name: "Figma", icon: figma },
    { name: "GSAP", icon: gsapIcon },
    { name: "Redux", icon: redux },
    { name: "Jest", icon: jest },
    { name: "Playwright", icon: playwright },
    { name: "Cypress", icon: cypress }
  ];
  return `<ul class="grid grid-cols-2 sm:grid-cols-3 items-center gap-8 flex-wrap">${each(skills, (skill) => {
    return `<li data-animate="skill" class="flex items-center text-body-base text-gray-700 font-bold gap-2 break-all"><img${add_attribute("src", skill.icon, 0)} alt="" class="w-8 md:w-10 lg:w-12">${escape(skill.name)} </li>`;
  })}</ul>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ts1ile_START -->${$$result.title = `<title>${escape(siteTitle)}</title>`, ""}<meta name="description"${add_attribute("content", siteDescription, 0)}><meta property="og:title"${add_attribute("content", siteTitle, 0)}><meta property="og:url"${add_attribute("content", siteUrl, 0)}><meta name="twitter:card" content="summary"><meta name="twitter:creator"${add_attribute("content", twitterHandle, 0)}><!-- HEAD_svelte-1ts1ile_END -->`, ""} <div class="mb-32 h-screen relative flex flex-col justify-center items-center"><h1 class="font-fira-sans w-10/12 mx-auto text-brand-800 text-heading-3 sm:text-heading-2 lg:text-heading-1" data-svelte-h="svelte-13at7tc">Frontend Developer Who Bring your Idea to the Web</h1> <div class="pb-8 absolute bottom-0 left-0 w-full flex items-end justify-between"><div class="flex flex-col items-start text-body-lg" data-svelte-h="svelte-18cm2ci"><span class="font-bold text-gray-800">Fullstack</span><span class="text-gray-600">capable</span></div> <div class=""><a href="#projects">${validate_component(ArrowDownCircle, "ArrowDownCircle").$$render(
    $$result,
    {
      size: "40",
      "aria-hidden": "true",
      class: "animate-bounce text-gray-800"
    },
    {},
    {}
  )}</a></div> <div class="flex flex-col items-start text-body-lg" data-svelte-h="svelte-6y1zct"><span class="font-bold text-gray-800">Sharing</span><span class="text-gray-600">knowledge</span></div></div></div> <div class="pb-32" data-svelte-h="svelte-7uhc1p"><h2 id="projects" class="text-heading-4 lg:text-heading-2 font-bold text-brand-800">Selected Projects.</h2></div> <div class="pb-32"><h2 class="text-heading-4 lg:text-heading-2 font-bold text-brand-800 mb-6" data-svelte-h="svelte-cp6kxj">Technologies.</h2> ${validate_component(Skills_list, "SkillsList").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
