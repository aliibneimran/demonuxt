import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
const _sfc_main = {
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    product: Object,
    serial: Number
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/products/${__props.product.id}`,
        class: "block no-underline text-gray-900 hover:text-gray-700",
        key: __props.product.id
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative bg-white rounded-xl shadow-md p-4"${_scopeId}><span class="absolute top-2 right-2 text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded"${_scopeId}> #${ssrInterpolate(__props.serial)}</span><img${ssrRenderAttr("src", __props.product.image)}${ssrRenderAttr("alt", __props.product.title)} class="w-full h-48 object-contain rounded-lg mb-4"${_scopeId}><h2 class="text-base font-semibold mb-2 line-clamp-2"${_scopeId}>${ssrInterpolate(__props.product.title)}</h2><div class="flex items-center space-x-2 mb-2"${_scopeId}><span class="text-xl font-bold text-gray-800"${_scopeId}>$${ssrInterpolate(__props.product.price)}</span></div><div class="flex items-center mb-4"${_scopeId}><div class="flex text-yellow-400"${_scopeId}><!--[-->`);
            ssrRenderList(5, (i) => {
              _push2(`<span class="text-xl"${_scopeId}>★</span>`);
            });
            _push2(`<!--]--></div><span class="ml-2 text-sm bg-yellow-100 text-yellow-800 font-semibold px-2 py-0.5 rounded"${_scopeId}> 5.0 </span></div><button class="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-900 text-white font-semibold rounded hover:bg-blue-800 transition"${_scopeId}><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .962.305 1.157.78L5.94 6H19.5a.75.75 0 01.732.949l-1.5 6A.75.75 0 0118 13.5H6.21l-.45 1.2a.75.75 0 00.693 1.05h11.547a.75.75 0 010 1.5H6.453a2.25 2.25 0 01-2.117-3.027L5.11 6.72 4.22 4.528A.75.75 0 003.5 4.5H2.25a.75.75 0 010-1.5z"${_scopeId}></path></svg> Add to cart </button></div>`);
          } else {
            return [
              createVNode("div", { class: "relative bg-white rounded-xl shadow-md p-4" }, [
                createVNode("span", { class: "absolute top-2 right-2 text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded" }, " #" + toDisplayString(__props.serial), 1),
                createVNode("img", {
                  src: __props.product.image,
                  alt: __props.product.title,
                  class: "w-full h-48 object-contain rounded-lg mb-4"
                }, null, 8, ["src", "alt"]),
                createVNode("h2", { class: "text-base font-semibold mb-2 line-clamp-2" }, toDisplayString(__props.product.title), 1),
                createVNode("div", { class: "flex items-center space-x-2 mb-2" }, [
                  createVNode("span", { class: "text-xl font-bold text-gray-800" }, "$" + toDisplayString(__props.product.price), 1)
                ]),
                createVNode("div", { class: "flex items-center mb-4" }, [
                  createVNode("div", { class: "flex text-yellow-400" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
                      return createVNode("span", {
                        key: i,
                        class: "text-xl"
                      }, "★");
                    }), 64))
                  ]),
                  createVNode("span", { class: "ml-2 text-sm bg-yellow-100 text-yellow-800 font-semibold px-2 py-0.5 rounded" }, " 5.0 ")
                ]),
                createVNode("button", { class: "w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-900 text-white font-semibold rounded hover:bg-blue-800 transition" }, [
                  (openBlock(), createBlock("svg", {
                    class: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "1.5",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M2.25 3h1.386c.51 0 .962.305 1.157.78L5.94 6H19.5a.75.75 0 01.732.949l-1.5 6A.75.75 0 0118 13.5H6.21l-.45 1.2a.75.75 0 00.693 1.05h11.547a.75.75 0 010 1.5H6.453a2.25 2.25 0 01-2.117-3.027L5.11 6.72 4.22 4.528A.75.75 0 003.5 4.5H2.25a.75.75 0 010-1.5z"
                    })
                  ])),
                  createTextVNode(" Add to cart ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ProductCard.vue.mjs.map
