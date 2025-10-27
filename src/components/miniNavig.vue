<script setup lang="ts">
import { defineProps } from "vue";

interface buttonsInfo {
  title: string;
  value: string | number;
}

const props = defineProps<{
  buttons: buttonsInfo[];
}>();
</script>

<template>
  <ul>
    <li v-for="item in buttons">{{ item.title }}</li>
  </ul>
</template>

<style scoped></style>
