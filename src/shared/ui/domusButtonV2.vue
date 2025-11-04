<script setup lang="ts">
defineProps<{
  isActiv: boolean;
}>();
</script>

<template>
  <button><slot></slot></button>
</template>

<style scoped></style>
