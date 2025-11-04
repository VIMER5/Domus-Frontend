<script setup lang="ts">
import { ref, type Component, markRaw } from "vue";
import miniNavig from "@/components/miniNavig.vue";
import command from "@/pages/addDevice/command.vue";
const itemMiniNav = [
  {
    title: "dd",
    value: "dd",
    component: markRaw(command),
  },
  {
    title: "dd2",
    value: "dd",
    component: markRaw(command),
  },
  {
    title: "dd1",
    value: "dd",
    component: markRaw(command),
  },
];
const componenView = ref<Component>(command);
function check(v: any) {
  if (typeof v == "string" || typeof v == "number") console.log(v);
  else {
    componenView.value = v;
  }
}
</script>

<template>
  <miniNavig @isClick="(value:string|number|Component) => check(value)" :buttons="itemMiniNav" />
  <component :is="componenView" />
</template>

<style scoped></style>
