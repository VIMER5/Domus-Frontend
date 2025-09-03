<script setup lang="ts">
import checkScreen from "@/shared/lib/device";
import { RouterView } from "vue-router";
import axiosq from "./axios";
checkScreen();
axiosq.post("/loger").then((res) => {});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
