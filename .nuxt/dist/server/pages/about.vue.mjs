import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { useHead } from "../node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "About Page"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-16 bg-white" }, _attrs))}><div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6"><div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12"><div class="md:5/12 lg:w-5/12"><img src="https://kinsta.com/wp-content/uploads/2022/05/nuxt-js-logo.jpeg" alt="image" loading="lazy" width="" height=""></div><div class="md:7/12 lg:w-6/12"><h2 class="text-2xl text-gray-900 font-bold md:text-4xl"> Nuxt development is carried out by passionate developers </h2><p class="mt-6 text-gray-600"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque! </p><p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia. </p></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about.vue.mjs.map
