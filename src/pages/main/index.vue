<script setup lang="ts">
import widgetsBord from "@/widgets/widgetsBord/ui/widgetsBord.vue";
import roomBord from "@/widgets/widgetsBord/ui/roomBord.vue";
import $api from "@/app/axios";

function t() {
  $api
    .post("/domus")
    .then((e) => {
      console.log(e);
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>

<template>
  <div class="mainPages">
    <widgetsBord />
    <roomBord />
  </div>
</template>

<style scoped>
.mainPages {
  font-size: clamp(0.5rem, 0.6dvw, 1.2rem);
  display: flex;
  flex-direction: column;
  gap: 8em;
}
</style>
