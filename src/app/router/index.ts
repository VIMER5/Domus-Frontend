import { createRouter, createWebHistory } from "vue-router";
import cleanLayouts from "../layouts/cleanLayouts.vue";
import mainHudLayouts from "../layouts/desktop/desktopMainHudLayouts.vue";
import mobileMainHudLayouts from "../layouts/mobile/mobileMainHudLayouts.vue";

const mobilePrefix = "/m";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "desktop",
      component: mainHudLayouts,
      children: [
        { path: "", name: "main", meta: { title: "Главаная" }, component: () => import("@/pages/main/index.vue") },
        { path: "/f", meta: { title: "хз" }, component: () => import("@/pages/HomeView.vue") },
        { path: ":NotFoundUrl(.*)", meta: { title: "404" }, component: () => import("@/pages/NotFaund/index.vue") },
      ],
    },
    {
      path: `${mobilePrefix}`,
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
  const isMobile = window.innerWidth <= 768;
  const isMobileRoute = to.fullPath.startsWith(mobilePrefix);
  if (isMobileRoute && !isMobile) next(to.fullPath.replace(mobilePrefix, ""));
  else if (!isMobileRoute && isMobile) next(mobilePrefix + to.fullPath);
  else next();
});
export default router;
