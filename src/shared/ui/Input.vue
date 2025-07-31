<template>
  <input class="input" :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script setup>
defineProps({
  type: { type: String, default: "text" },
  modelValue: { type: String, required: true },
});
</script>
