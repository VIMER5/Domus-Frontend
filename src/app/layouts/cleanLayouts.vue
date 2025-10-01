<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="Clear__layouts">
    <RouterView />
  </div>
</template>

<style scoped>
.Clear__layouts {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
