<script setup lang="ts">
import checkScreen from "@/shared/lib/device";
import { RouterLink, RouterView } from "vue-router";
checkScreen();
</script>

<template>
  <!-- <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink> -->
  <RouterView />
</template>

<style scoped></style>
