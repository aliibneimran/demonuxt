import { _ as __nuxt_component_0$1 } from './nuxt-link.mjs';
import { ref, mergeProps, useSSRContext, withCtx, createTextVNode, createVNode } from 'file://D:/laragon/www/nuxt/demo/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'file://D:/laragon/www/nuxt/demo/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { u as useHead } from './v3.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/ufo/dist/index.mjs';
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

const _sfc_main$2 = {
  __name: "CartIcon",
  __ssrInlineRender: true,
  setup(__props) {
    const cartCount = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center" }, _attrs))}><div class="relative">`);
      if (cartCount.value > 0) {
        _push(`<div class="t-0 absolute left-3"><p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">${ssrInterpolate(cartCount.value)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-3 h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218
               c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 
               20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 
               0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CartIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_CartIcon = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(_attrs)}><header><nav class="flex justify-between items-center bg-gray-800 text-white px-4"><ul class="flex gap-4 items-center bg-gray-800 text-white p-4"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/products" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Products`);
      } else {
        return [
          createTextVNode("Products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><ul class="flex gap-4 items-center bg-gray-800 text-white p-4"><li class="bg-green-600 rounded-md px-2 py-1">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Login`);
      } else {
        return [
          createTextVNode("Login")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="bg-green-600 rounded-md px-2 py-1">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/register" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Register`);
      } else {
        return [
          createTextVNode("Register")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/cart" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CartIcon, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CartIcon)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></header></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

useHead({
  title: "My Nuxt App",
  meta: [
    { name: "description", content: "A simple Nuxt.js application" },
    { name: "viewport", content: "width=device-width, initial-scale=1" }
  ],
  link: [
    { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" }
  ],
  script: [
    { src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js", async: true, defer: true }
  ]
});
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen bg-gray-100" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<main class="min-h-[500px]">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><footer class="bg-gray-800 text-white p-4 text-center"><p>© 2023 My Nuxt App</p></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.vue.mjs.map
