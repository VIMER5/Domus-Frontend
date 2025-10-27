<script setup lang="ts">
import miniNavig from "@/components/miniNavig.vue";
const gg = [
  {
    title: "dd",
    value: "dd",
  },
  {
    title: "dd2",
    value: "dd",
  },
  {
    title: "dd1",
    value: "dd",
  },
];
</script>

<template>
  <miniNavig :buttons="gg" />
  <!-- <RouterView /> -->
</template>

<style scoped></style>
