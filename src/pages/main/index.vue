<script setup lang="ts">
import widgetsBord from "@/widgets/widgetsBord/ui/widgetsBord.vue";
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
  </div>
  <button @click="t">сенд</button>
</template>

<style scoped></style>
