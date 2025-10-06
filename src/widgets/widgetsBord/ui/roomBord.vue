<script setup lang="ts">
import panelWidgets from "@/components/panelWidgets.vue";
</script>

<template>
  <div class="room__bord">
    <!-- <component :is="panelWidgets">DAWDAWD</component> -->
    <component :is="panelWidgets"><div class="dd">d</div></component>
  </div>
</template>

<style scoped>
.room__bord {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.dd {
  height: 280px;
}
</style>
