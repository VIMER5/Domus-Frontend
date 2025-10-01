<script setup lang="ts">
defineProps<{
  type: "text" | "password" | "number";
  placeholder: string;
  name: string;
  id: string;
  autocomplete: "on" | "off";
}>();

const model = defineModel();
</script>

<template>
  <input v-model="model" :autocomplete="autocomplete" :id="id" :name="name" :type="type" :placeholder="placeholder" />
</template>

<style scoped>
input {
  box-sizing: border-box;
  width: 100%;
  outline: none;
  padding: 10px 8px;
  margin: 0;
  border: none;
  font-size: 16px;
  font-family: "interRegular";
  border-bottom: 1px solid var(--color-input-borderAndPlaceholder);
  background-color: transparent;
  color: var(--color-input-text);
}
input::placeholder {
  color: var(--color-input-borderAndPlaceholder);
  font-size: 16px;
}
</style>
