import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CartIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=CartIcon.vue.mjs.map
