import { withAsyncContext, ref, unref, mergeProps, useSSRContext } from 'file://D:/laragon/www/nuxt/demo/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'file://D:/laragon/www/nuxt/demo/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import { u as useFetch } from './fetch.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/hookable/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/unctx/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/h3/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/radix3/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/defu/dist/defu.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/ufo/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/ohash/dist/index.mjs';

const _sfc_main = {
  __name: "[id] copy",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: product, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `https://fakestoreapi.com/products/${route.params.id}`,
      "$PWReWX7LZ6"
    )), __temp = await __temp, __restore(), __temp);
    ref([
      product.value.image,
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
    ]);
    const colors = ref([
      { name: "Black", code: "#000000" },
      { name: "Dark Green", code: "#1a3f1a" },
      { name: "Charcoal", code: "#36454F" }
    ]);
    ref(colors.value[0]);
    const quantity = ref(1);
    const StarRating = {
      props: ["rating"],
      setup(props) {
        const fullStars = Math.floor(props.rating);
        const hasHalfStar = props.rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        return { fullStars, hasHalfStar, emptyStars };
      },
      template: `
    <div class="flex">
      <span v-for="n in fullStars" :key="'full-' + n" class="text-yellow-400">★</span>
      <span v-if="hasHalfStar" class="text-yellow-400">½</span>
      <span v-for="n in emptyStars" :key="'empty-' + n" class="text-gray-300">★</span>
    </div>
  `
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(pending)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center p-8" }, _attrs))} data-v-b42bdc39><div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto" data-v-b42bdc39></div><p class="mt-4 text-gray-600" data-v-b42bdc39>Loading product details...</p></div>`);
      } else if (unref(error)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center p-8 text-red-500" }, _attrs))} data-v-b42bdc39> Error loading product: ${ssrInterpolate(unref(error).message)}</div>`);
      } else if (unref(product)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row gap-8" }, _attrs))} data-v-b42bdc39><div class="md:w-1/2" data-v-b42bdc39><div class="bg-gray-100 rounded-lg overflow-hidden mb-4 flex items-center justify-center h-96" data-v-b42bdc39><img${ssrRenderAttr("src", unref(product).image)}${ssrRenderAttr("alt", unref(product).title)} class="object-contain h-full" data-v-b42bdc39></div></div><div class="md:w-1/2" data-v-b42bdc39><span class="text-sm text-gray-500 uppercase tracking-wider" data-v-b42bdc39>${ssrInterpolate(unref(product).category)}</span><h1 class="text-3xl font-bold mb-2 mt-1" data-v-b42bdc39>${ssrInterpolate(unref(product).title)}</h1><div class="flex items-center mb-4" data-v-b42bdc39><div class="flex items-center" data-v-b42bdc39>`);
        _push(ssrRenderComponent(StarRating, {
          rating: unref(product).rating.rate
        }, null, _parent));
        _push(`<span class="text-gray-600 text-sm ml-1" data-v-b42bdc39>${ssrInterpolate(unref(product).rating.rate)} (${ssrInterpolate(unref(product).rating.count)} reviews) </span></div></div><div class="mb-6" data-v-b42bdc39><p class="text-2xl font-semibold" data-v-b42bdc39>$${ssrInterpolate(unref(product).price.toFixed(2))}</p><p class="text-green-600 font-medium mt-1" data-v-b42bdc39>In Stock</p></div><div class="border-t border-gray-200 my-4" data-v-b42bdc39></div><div class="mb-6" data-v-b42bdc39><h2 class="text-xl font-semibold mb-3" data-v-b42bdc39>Description</h2><p class="text-gray-700" data-v-b42bdc39>${ssrInterpolate(unref(product).description)}</p></div><div class="mb-8" data-v-b42bdc39><h2 class="text-xl font-semibold mb-3" data-v-b42bdc39>Quantity:</h2><div class="flex items-center gap-2" data-v-b42bdc39><button class="w-10 h-10 flex items-center justify-center border rounded hover:bg-gray-100" data-v-b42bdc39> - </button><input${ssrRenderAttr("value", quantity.value)} type="number" min="1" max="10" class="w-16 h-10 border text-center rounded" data-v-b42bdc39><button class="w-10 h-10 flex items-center justify-center border rounded hover:bg-gray-100" data-v-b42bdc39> + </button></div></div><div class="flex flex-col sm:flex-row gap-4" data-v-b42bdc39><button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors" data-v-b42bdc39> Add to Cart - $${ssrInterpolate((unref(product).price * quantity.value).toFixed(2))}</button><button class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-semibold transition-colors border border-gray-300" data-v-b42bdc39> Add to Wishlist </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[id] copy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id__copy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b42bdc39"]]);

export { _id__copy as default };
//# sourceMappingURL=_id_ copy.vue.mjs.map
