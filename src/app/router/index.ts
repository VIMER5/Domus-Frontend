import { createRouter, createWebHistory } from "vue-router";
import cleanLayouts from "@/app/layouts/cleanLayouts.vue";
import mainHudLayouts from "@/app/layouts/desktop/desktopMainHudLayouts.vue";
import mobileMainHudLayouts from "@/app/layouts/mobile/mobileMainHudLayouts.vue";
import { authUserStore } from "../stores/user.js";

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
        { path: "/f", meta: { title: "хз" }, component: () => import("@/pages/HomeView.vue") },
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
        { path: "", name: "loginInCom", component: () => import("@/pages/AboutView.vue") },
        { path: ":NotFoundUrl(.*)*", component: () => import("@/pages/NotFaund/index.vue") },
      ],
    },
  ],
});
router.beforeEach((to, from, next) => {
  const authUser = authUserStore();
  if (to.meta.requiresAuth && !authUser.isAuthenticated) {
  }

  const isMobile = window.innerWidth <= 768;
  const isMobileRoute = to.fullPath.startsWith(mobilePrefix);
  if (isMobileRoute && !isMobile) next(to.fullPath.replace(mobilePrefix, ""));
  else if (!isMobileRoute && isMobile) next(mobilePrefix + to.fullPath);
  else next();
});
export default router;
