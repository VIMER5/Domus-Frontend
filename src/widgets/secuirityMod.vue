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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
}
span {
  font-size: 2rem;
}
</style>
