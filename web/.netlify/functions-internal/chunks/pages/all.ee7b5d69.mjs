/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from '../astro.136fe095.mjs';
import 'html-escaper';

function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(context || (parent_component ? parent_component.$$.context : [])),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, $$slots, context);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}

/* src/components/svelte/Page.svelte generated by Svelte v3.58.0 */

const css = {
	code: ":root{background-color:#141414}.horizontal.svelte-amful3{display:flex;flex-direction:row;align-items:center;justify-content:center}.vertical.svelte-amful3{display:flex;flex-direction:column;align-items:center;justify-content:center}.header.svelte-amful3{margin-bottom:20px}",
	map: null
};

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {

	$$result.css.add(css);

	return `${``}`;
});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Page", Page, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/danie/Projects/espac/web/src/components/svelte/Page.svelte", "client:component-export": "default" })}`;
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
