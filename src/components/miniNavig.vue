<script setup lang="ts">
import domusButtonV2 from "@/shared/ui/domusButtonV2.vue";
import { type Component } from "vue";

interface buttonsInfo {
  title: string;
  value: string | number;
  component?: Component;
}

const props = defineProps<{
  buttons: buttonsInfo[];
}>();

defineEmits<{
  (e: "isClick", value: string | number | Component): void;
}>();
</script>

<template>
  <ul>
    <li v-for="item in buttons">
      <domusButtonV2
        @click="() => (item.component ? $emit('isClick', item.component) : $emit('isClick', item.value))"
        :isActiv="false"
        >{{ item.title }}</domusButtonV2
      >
    </li>
  </ul>
</template>

<style scoped></style>
