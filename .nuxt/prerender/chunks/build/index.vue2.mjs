import { mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createTextVNode, useSSRContext, withAsyncContext, ref, computed, unref } from 'file://D:/laragon/www/nuxt/demo/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderAttrs, ssrIncludeBooleanAttr } from 'file://D:/laragon/www/nuxt/demo/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { u as useHead } from './v3.mjs';
import { u as useFetch } from './fetch.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/hookable/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/unctx/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/h3/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/radix3/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/defu/dist/defu.mjs';
import '../_/renderer.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/unhead/dist/server.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/unhead/dist/utils.mjs';
import '../_/nitro.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/destr/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/ofetch/dist/node.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/node-mock-http/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/unstorage/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/laragon/www/nuxt/demo/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://D:/laragon/www/nuxt/demo/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/ohash/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/klona/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/laragon/www/nuxt/demo/node_modules/pathe/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/devalue/index.js';
import 'file://D:/laragon/www/nuxt/demo/node_modules/unhead/dist/plugins.mjs';

const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const itemsPerPage = 4;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Products Page" });
    const { data: products, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "https://fakestoreapi.com/products",
      "$hLVkyCIqQl"
    )), __temp = await __temp, __restore(), __temp);
    const currentPage = ref(1);
    const totalPages = computed(() => {
      return products.value ? Math.ceil(products.value.length / itemsPerPage) : 1;
    });
    const paginatedProducts = computed(() => {
      if (!products.value) return [];
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return products.value.slice(start, end);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><h1 class="text-center mb-6 text-2xl font-bold">Products</h1>`);
      if (unref(pending)) {
        _push(`<div class="text-center text-gray-500"><div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div><p class="mt-2">Loading products...</p></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
        ssrRenderList(paginatedProducts.value, (product) => {
          _push(ssrRenderComponent(_sfc_main$1, {
            key: product.id,
            product
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`<div class="flex justify-center items-center gap-4 mt-8"><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 transition-colors"> Previous </button><span class="px-4 py-2 font-medium">Page ${ssrInterpolate(currentPage.value)} of ${ssrInterpolate(totalPages.value)}</span><button${ssrIncludeBooleanAttr(currentPage.value >= totalPages.value) ? " disabled" : ""} class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 transition-colors"> Next </button></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map
