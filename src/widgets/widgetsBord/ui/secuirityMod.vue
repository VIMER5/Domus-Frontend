<script setup lang="ts">
import secuirityMod from "@/shared/img/secuirityMod.vue";
</script>

<template>
  <div class="secuirityMod">
    <secuirityMod />
    <span>Режим охраны</span>
  </div>
</template>

<style scoped>
.secuirityMod {
  font-size: clamp(0.5rem, 0.6dvw, 1.2rem);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.4em;
  width: 15em;
}
span {
  font-size: 2em;
}
</style>
