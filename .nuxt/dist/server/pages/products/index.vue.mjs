import { withAsyncContext, ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import _sfc_main$1 from "../../components/ProductCard.vue.mjs";
import { useHead } from "../../node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
import { useFetch } from "../../node_modules/nuxt/dist/app/composables/fetch.mjs";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue.mjs.map
