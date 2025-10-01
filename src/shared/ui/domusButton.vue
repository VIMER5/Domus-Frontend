<script setup lang="ts">
defineProps<{
  active: boolean;
  type: "submit" | "button";
}>();
</script>

<template>
  <button type="submit" :class="{ activeButton: active }">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 8px;
  font-size: 1em;
  cursor: pointer;
}
.activeButton {
  background-color: var(--bcColor-button-noActive);
  color: var(--color-text-button-noActive);
  transition: background-color 500ms 0s;
}
.activeButton:hover {
  background-color: var(--bccolor-button-noActive-hover);
}
</style>
