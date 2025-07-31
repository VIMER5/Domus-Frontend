<template>
  <button class="button" :type="type" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  type: { type: String, default: "button" },
});
</script>
