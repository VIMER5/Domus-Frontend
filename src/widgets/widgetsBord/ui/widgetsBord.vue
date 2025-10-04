<script setup lang="ts">
import panelWidgets from "@/components/panelWidgets.vue";
import secuirityMod from "@/widgets/secuirityMod.vue";
import weatherWidgets from "@/widgets/weatherWidgets.vue";
</script>

<template>
  <div class="widgets__bord">
    <component :is="panelWidgets">DAWDAWD</component>
    <component :is="panelWidgets"><secuirityMod /></component>
    <component :is="panelWidgets"><weatherWidgets /></component>
  </div>
</template>

<style scoped>
.widgets__bord {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
