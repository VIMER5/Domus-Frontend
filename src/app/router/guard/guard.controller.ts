import { type Router } from "vue-router";
import { authUserStore } from "@Store/user";

function guard(router: Router, mobilePrefix: string) {
  router.beforeEach(async (to, from, next) => {
    const authUser = authUserStore();
    if (!authUser.isAaccessToken) {
      await authUser.updatToken();
    }

    if (to.meta.requiresAuth && !authUser.isAaccessToken) {
      return next({ name: "loginInCom" });
    }
    if (to.fullPath == "/loginIn" && authUser.isAaccessToken) return next({ name: "main" });
    next();
  });

  router.beforeEach((to, from, next) => {
    if (to.fullPath == "/loginIn") return next();
    const isMobile = window.innerWidth <= 768;
    const isMobileRoute = to.fullPath.startsWith(mobilePrefix);
    if (isMobileRoute && !isMobile) next(to.fullPath.replace(mobilePrefix, ""));
    else if (!isMobileRoute && isMobile) next(mobilePrefix + to.fullPath);
    else next();
  });
}

export { guard };
