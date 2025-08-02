<script setup lang="ts">
import { RouterLink } from "vue-router";

import homePageIcon from "@/shared/img/homePageIcon.vue";
import addDeviceIcon from "@/shared/img/addDeviceIcon.vue";
import weatherPageIcon from "@/shared/img/weatherPageIcon.vue";
import settingPageIcon from "@/shared/img/settingPageIcon.vue";
import { type Component, shallowRef } from "vue";

interface navRout {
  rout: string;
  img?: Component;
  title: string;
}

let navRout = shallowRef<navRout[]>([
  {
    rout: "/",
    img: homePageIcon,
    title: "Главная",
  },
  {
    rout: "/addDevice",
    img: addDeviceIcon,
    title: "Add Device",
  },
  {
    rout: "/weather",
    img: weatherPageIcon,
    title: "Погода",
  },
  {
    rout: "/setting",
    img: settingPageIcon,
    title: "Настройки",
  },
]);
</script>
<template>
  <ul className="navBar-ul">
    <li v-for="item in navRout">
      <RouterLink className="RouterLink" v-slot="{ isExactActive }" :to="item.rout">
        <div :class="['navBar__content', { 'navBar__content-activ': isExactActive }]" :data-text="item.title">
          <component :is="item.img" :active="isExactActive ? true : false" class="navBar-svg" /> {{ item.title }}
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
.navBar-ul {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.navBar-ul > li {
  container-type: inline-size;
}
.navBar-ul > li > a {
  display: flex;
  align-items: center;
  height: max-content;
}
.navBar-svg {
  width: 16.5cqw;
  height: auto;
  margin-left: calc(3.5cqw + 17px);
}

.navBar__content {
  display: flex;
  align-items: center;
  position: relative;
  gap: 10cqw;
  font-size: 7.999cqw;
  color: var(--color-text-secondary);
  font-family: "interSemiBold";
  transition: color 1s ease;
}

.navBar__content::after {
  content: attr(data-text);
  position: absolute;
  right: 0;
  background: var(--gradiend-text-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  opacity: 0;
  transition: opacity 1s ease;
}

.navBar__content-activ {
  color: transparent;
}

.navBar__content-activ::after {
  opacity: 1;
}

.navBar__content::before {
  content: "";
  background: var(--gradiend-color);
  position: absolute;
  height: 100%;
  width: 3.5cqw;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  left: -3.5cqw;
  opacity: 0;
  transition: left 1s ease, opacity 1s;
}
.navBar__content-activ::before {
  left: 0;
  opacity: 1;
}
</style>
