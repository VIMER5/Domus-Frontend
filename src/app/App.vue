<script setup lang="ts">
import checkScreen from "@/shared/lib/device";
import { RouterView } from "vue-router";
checkScreen();
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
