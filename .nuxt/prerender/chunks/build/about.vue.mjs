import { mergeProps, useSSRContext } from 'file://D:/laragon/www/nuxt/demo/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://D:/laragon/www/nuxt/demo/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './v3.mjs';
import './server.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/hookable/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/unctx/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/h3/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/radix3/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/defu/dist/defu.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/ufo/dist/index.mjs';
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

export { _sfc_main as default };
//# sourceMappingURL=about.vue.mjs.map
