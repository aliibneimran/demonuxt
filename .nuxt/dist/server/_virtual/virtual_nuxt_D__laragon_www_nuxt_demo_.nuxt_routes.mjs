function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "cart",
    path: "/cart",
    component: () => import("../pages/cart.vue.mjs")
  },
  {
    name: "about",
    path: "/about",
    component: () => import("../pages/about.vue.mjs")
  },
  {
    name: "index",
    path: "/",
    component: () => import("../pages/index.vue.mjs")
  },
  {
    name: "login",
    path: "/login",
    component: () => import("../pages/login.vue.mjs")
  },
  {
    name: "contact",
    path: "/contact",
    component: () => import("../pages/contact.vue.mjs")
  },
  {
    name: "register",
    path: "/register",
    component: () => import("../pages/register.vue.mjs")
  },
  {
    name: "products-id",
    path: "/products/:id()",
    component: () => import("../pages/products/_id_.vue.mjs")
  },
  {
    name: "products",
    path: "/products",
    component: () => import("../pages/products/index.vue.mjs")
  },
  {
    name: "products-id copy",
    path: "/products/:id()%20copy",
    component: () => import("../pages/products/_id_ copy.vue.mjs")
  }
];
export {
  _routes as default,
  handleHotUpdate
};
//# sourceMappingURL=virtual_nuxt_D__laragon_www_nuxt_demo_.nuxt_routes.mjs.map
