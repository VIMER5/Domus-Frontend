<script setup lang="ts">
const model = defineModel();
defineProps<{
  name: string;
  id: string;
}>();
</script>

<template>
  <div>
    <input v-model="model" :id="id" :name="name" type="checkbox" />
    <label :for="id"><slot /></label>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 100%;
}
input {
  font-size: 100%;
  appearance: none;
  -webkit-appearance: none;
  width: 0.8em;
  height: 0.8em;
  border: 1.5px solid var(--color-input-borderAndPlaceholder);
  background-image: none;
  border-radius: 2px;
  cursor: pointer;
  background-color: #f3f4f8;
  transition: background-color 500ms 0ms;
  margin: 0;
}
input:checked {
  background-color: var(--color-input-borderAndPlaceholder);
  border: 0;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
}
label {
  cursor: pointer;
  font-family: "interRegular";
  font-size: 1em;
}
</style>
