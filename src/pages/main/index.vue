<template>
  main
  <button @click="t">сенд</button>
</template>

<script setup lang="ts">
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
