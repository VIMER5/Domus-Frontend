import { useRouter, useRoute } from "vue-router";
import { onMounted } from "vue";

const mobilePrefix = "/m";
export default () => {
  const router = useRouter();
  const route = useRoute();

  function checkScreen() {
    const isMobile = window.innerWidth <= 768;
    const isMobileRoute = route.fullPath.startsWith(mobilePrefix);

    if (isMobileRoute && !isMobile) router.push(route.fullPath.replace(mobilePrefix, ""));
    else if (!isMobileRoute && isMobile) router.push(mobilePrefix + route.fullPath);
  }

  onMounted(() => {
    window.addEventListener("resize", checkScreen);
  });
};
