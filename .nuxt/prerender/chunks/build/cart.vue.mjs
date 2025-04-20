import { ref, mergeProps, useSSRContext } from 'file://D:/laragon/www/nuxt/demo/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from 'file://D:/laragon/www/nuxt/demo/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    const products = ref([]);
    const selectedProducts = ref([]);
    const total = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-full flex-col justify-center p-2" }, _attrs))}><div class="mx-auto w-full rounded-sm border border-gray-200 bg-white shadow-lg"><header class="border-b border-gray-100 px-5 py-4"><div class="font-semibold text-gray-800">Manage Carts</div></header><div class="overflow-x-auto p-3"><table class="w-full table-auto"><thead class="bg-gray-50 text-xs font-semibold uppercase text-gray-400"><tr><th></th><th class="p-2"><div class="text-left font-semibold">Product Name</div></th><th class="p-2"><div class="text-left font-semibold">Quantity</div></th><th class="p-2"><div class="text-left font-semibold">Total</div></th><th class="p-2"><div class="text-center font-semibold">Action</div></th></tr></thead><tbody class="divide-y divide-gray-100 text-sm"><!--[-->`);
      ssrRenderList(products.value, (product, index) => {
        _push(`<tr><td class="p-2"><input type="checkbox" class="h-5 w-5"${ssrRenderAttr("value", product.id)}${ssrIncludeBooleanAttr(Array.isArray(selectedProducts.value) ? ssrLooseContain(selectedProducts.value, product.id) : selectedProducts.value) ? " checked" : ""}></td><td class="p-2"><div class="font-medium text-gray-800">${ssrInterpolate(product.title)}</div></td><td class="p-2"><div class="text-left">${ssrInterpolate(product.quantity)}</div></td><td class="p-2"><div class="text-left font-medium text-green-500">$ ${ssrInterpolate((product.price * product.quantity).toFixed(2))}</div></td><td class="p-2"><div class="flex justify-center"><button><svg class="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="flex justify-end space-x-4 border-t border-gray-100 px-5 py-4 text-2xl font-bold"><div>Total</div><div class="text-blue-600">$ ${ssrInterpolate(total.value.toFixed(2))}</div></div><div class="flex justify-end"><input type="hidden" class="border border-black bg-gray-50"${ssrRenderAttr("value", selectedProducts.value.join(","))}></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cart.vue.mjs.map
