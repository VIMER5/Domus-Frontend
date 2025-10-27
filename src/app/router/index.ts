import { createRouter, createWebHistory } from "vue-router";
import cleanLayouts from "@/app/layouts/cleanLayouts.vue";
import mainHudLayouts from "@/app/layouts/desktop/desktopMainHudLayouts.vue";
import mobileMainHudLayouts from "@/app/layouts/mobile/mobileMainHudLayouts.vue";
import { guard } from "./guard/guard.controller";
const mobilePrefix = "/m";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "desktop",
      component: mainHudLayouts,
      meta: { requiresAuth: true },
      children: [
        { path: "", name: "main", meta: { title: "Главаная" }, component: () => import("@/pages/main/index.vue") },
        {
          path: "/addDevice",
          name: "addDevice",
          meta: { title: "add Device" },
          component: () => import("@/pages/addDevice/addDevice.vue"),
          // children: [
          //   {
          //     path: "",
          //     name: "addDeviced",
          //     meta: { title: "add Deviced" },
          //     component: () => import("@/pages/addDevice/index.vue"),
          //   },
          //   {
          //     path: "room",
          //     name: "addDevicedd",
          //     meta: { title: "add Devicedu" },
          //     component: () => import("@/pages/addDevice/index.vue"),
          //   },
          // ],
        },

        { path: ":NotFoundUrl(.*)", meta: { title: "404" }, component: () => import("@/pages/NotFaund/index.vue") },
      ],
    },
    {
      path: `${mobilePrefix}`,
      meta: { requiresAuth: true },
      component: mobileMainHudLayouts,
      children: [{ path: ":NotFoundUrl(.*)", component: () => import("@/pages/NotFaund/index.vue") }],
    },
    {
      path: "/loginIn",
      name: "loginIn",
      component: cleanLayouts,
      children: [
        { path: "", name: "loginInCom", component: () => import("@/pages/loginIn/loginIn.vue") },
        { path: ":NotFoundUrl(.*)*", component: () => import("@/pages/NotFaund/index.vue") },
      ],
    },
  ],
});

guard(router, mobilePrefix);

export default router;
