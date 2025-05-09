import __nuxt_component_0 from "./node_modules/nuxt/dist/app/components/nuxt-layout.mjs";
import __nuxt_component_1 from "./node_modules/nuxt/dist/pages/runtime/page.mjs";
import __nuxt_component_2 from "./node_modules/nuxt/dist/app/components/nuxt-loading-indicator.mjs";
import __nuxt_component_3 from "./node_modules/nuxt/dist/app/components/nuxt-error-boundary.mjs";
import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import _export_sfc from "./_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  const _component_NuxtPageTransition = resolveComponent("NuxtPageTransition");
  const _component_NuxtLoadingIndicator = __nuxt_component_2;
  const _component_NuxtErrorBoundary = __nuxt_component_3;
  const _component_NuxtError = resolveComponent("NuxtError");
  const _component_NuxtDevTools = resolveComponent("NuxtDevTools");
  const _component_NuxtHead = resolveComponent("NuxtHead");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NuxtLayout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtPageTransition, {
    name: "page",
    mode: "out-in"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtLoadingIndicator, null, null, _parent));
  _push(ssrRenderComponent(_component_NuxtErrorBoundary, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtError, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtError)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtDevTools, null, null, _parent));
  _push(ssrRenderComponent(_component_NuxtHead, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title${_scopeId}>My Nuxt App</title><meta name="description" content="This is a sample Nuxt.js application."${_scopeId}><link rel="icon" type="image/x-icon" href="/favicon.ico"${_scopeId}><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"${_scopeId}><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/fontawesome.min.css"${_scopeId}><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/brands.min.css"${_scopeId}>`);
      } else {
        return [
          createVNode("title", null, "My Nuxt App"),
          createVNode("meta", {
            name: "description",
            content: "This is a sample Nuxt.js application."
          }),
          createVNode("link", {
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico"
          }),
          createVNode("link", {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          }),
          createVNode("link", {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/fontawesome.min.css"
          }),
          createVNode("link", {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/brands.min.css"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AppComponent as default
};
//# sourceMappingURL=app.vue.mjs.map
