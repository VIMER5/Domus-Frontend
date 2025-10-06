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
  <button @click="t">сенд</button>
</template>

<style scoped></style>
