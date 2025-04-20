import { u as useHead } from './v3.mjs';
import { useSSRContext } from 'file://D:/laragon/www/nuxt/demo/node_modules/vue/index.mjs';
import './server.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/hookable/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/unctx/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/h3/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/radix3/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/defu/dist/defu.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/ufo/dist/index.mjs';
import 'file://D:/laragon/www/nuxt/demo/node_modules/vue/server-renderer/index.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home Page",
      meta: [
        { name: "description", content: "This is the home page of our Nuxt app." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30"><img src="https://picsum.photos/seed/picsum/1900/850" class="absolute top-0 left-0 min-h-full ob" alt=""><div class="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center"><div class="col-span-6"><span class="uppercase text-white text-xs font-bold mb-2 block">WE ARE EXPERTS</span><h1 class="text-white font-extrabold text-5xl mb-8"> Finpoint provides Financial Consulting in different ways </h1><p class="text-stone-100 text-base"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p><button class="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10"> Get started </button></div></div></div><div class="bg-[#f7d0b6] py-20"><div class="max-w-screen-lg mx-auto flex justify-between items-center"><div class="max-w-xl"><h2 class="font-black text-sky-950 text-3xl mb-4"> As the leading experts in this field, we&#39;re in over 90 countries </h2><p class="text-base text-sky-950"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></div><button class="text-sky-950 uppercase py-3 text-base px-10 border border-sky-950 hover:bg-sky-950 hover:bg-opacity-10"> Get started </button></div></div><div class="py-12 relative overflow-hidden bg-white"><div class="grid grid-cols-2 max-w-screen-lg mx-auto"><div class="w-full flex flex-col items-end pr-16"><h2 class="text-[#64618C] font-bold text-2xl max-w-xs text-right mb-12 mt-10"> Whether you need Assistance </h2><div class="h-full mt-auto overflow-hidden relative"><img src="https://picsum.photos/800/600" class="h-full w-full object-contain" alt=""></div></div><div class="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0"><div class="relative z-20 pl-12"><h2 class="text-[#f7d0b6] font-black text-5xl leading-snug mb-10"> Finpoint is here <br>to help you </h2><p class="text-white text-sm"> Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. </p><button class="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10"> Talk with expert </button></div></div></div></div><div class="py-4 relative overflow-hidden bg-white"><div class="grid grid-cols-2 max-w-screen-lg mx-auto"><div class="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-[#f7d0b6] before:top-0 before:right-0"><div class="relative z-20 pl-12"><h2 class="text-sky-950 font-black text-5xl leading-snug mb-10"> Finpoint is here <br>to help you </h2><p class="text-sky-950 text-sm"> Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. </p><button class="mt-8 text-sky-950 uppercase py-3 text-sm px-10 border border-sky-950 hover:bg-white hover:bg-opacity-10"> Talk with expert </button></div></div><div class="w-full flex flex-col pl-16"><h2 class="text-[#64618C] font-bold text-2xl max-w-xs text-left mb-12 mt-10"> Whether you need Assistance </h2><div class="h-full mt-auto overflow-hidden relative"><img src="https://picsum.photos/800/600" class="h-full w-full object-contain" alt=""></div></div></div></div><div class="py-12 relative overflow-hidden bg-white"><div class="grid grid-cols-2 max-w-screen-lg mx-auto"><div class="w-full flex flex-col items-end pr-16"><h2 class="text-[#64618C] font-bold text-2xl max-w-xs text-right mb-12 mt-10"> Whether you need Assistance </h2><div class="h-full mt-auto overflow-hidden relative"><img src="https://picsum.photos/800/600" class="h-full w-full object-contain" alt=""></div></div><div class="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0"><div class="relative z-20 pl-12"><h2 class="text-[#f7d0b6] font-black text-5xl leading-snug mb-10"> Finpoint is here <br>to help you </h2><p class="text-white text-sm"> Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. </p><button class="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10"> Talk with expert </button></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
