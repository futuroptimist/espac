import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, f as renderComponent, m as maybeRenderHead } from '../astro.09442b6c.mjs';
import 'html-escaper';
/* empty css                           */
const $$Astro$2 = createAstro();
const $$DefaultLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$DefaultLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="utf-8">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="viewport" content="width=device-width">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
		<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
	${renderHead($$result)}</head>
	<body>
        ${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "C:/Users/danie/Projects/espac/web/src/layouts/DefaultLayout.astro");

const $$Astro$1 = createAstro();
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Page;
  const { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": title }, { "default": ($$result2) => renderTemplate`
    ${renderSlot($$result2, $$slots["default"])}
` })}`;
}, "C:/Users/danie/Projects/espac/web/src/components/astro/Page.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "esp.ac", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<div class="container astro-J7PV25F6">
        <div class="vertical astro-J7PV25F6">
            <h1 class="astro-J7PV25F6">Hi! I'm Esp.</h1>
            
            <h1 class="horizontal astro-J7PV25F6">GitHub: <a href="https://github.com/futuroptimist" class="astro-J7PV25F6">futuroptimist</a></h1>
            <h1 class="horizontal astro-J7PV25F6">Twitter: <a href="https://x.com/EspToTheFuture" class="astro-J7PV25F6">EspToTheFuture</a></h1>
            <h1 class="horizontal astro-J7PV25F6">Project: <a href="https://democratized.space" class="astro-J7PV25F6">democratized.space</a> (DSPACE)</h1>
        </div>
    </div>
` })}`;
}, "C:/Users/danie/Projects/espac/web/src/pages/index.astro");

const $$file = "C:/Users/danie/Projects/espac/web/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
