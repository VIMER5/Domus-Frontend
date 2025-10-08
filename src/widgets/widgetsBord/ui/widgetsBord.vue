<script setup lang="ts">
import panelWidgets from "@/components/panelWidgets.vue";
import secuirityMod from "@/widgets/widgetsBord/ui/secuirityMod.vue";
import weatherWidgets from "@/widgets/widgetsBord/ui/weatherWidgets.vue";
</script>

<template>
  <div class="widgets__bord">
    <!-- <component :is="panelWidgets">DAWDAWD</component> -->
    <RouterLink to="/weather">
      <component :is="panelWidgets"><weatherWidgets /></component>
    </RouterLink>
    <component :is="panelWidgets"><secuirityMod /></component>
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
