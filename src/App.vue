<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <span>dd</span>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>

  <RouterView />
</template>

<style scoped></style>
