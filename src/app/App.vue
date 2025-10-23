<script setup lang="ts">
import checkScreen from "@/shared/lib/device";
import { RouterView } from "vue-router";
// import { weatherStore } from "./stores/weather";
import { ref } from "vue";
// weatherStore();
// socket.emit("join_room", 1);
// socket.on("room_state", (data) => {
//   ff.value = data;
// });
// socket.on("weather", (daf) => {
//   // console.log(daf);
// });

// socket.on("weatherCurrent", (data) => {
//   console.log(data);
// });
const ff = ref();
checkScreen();
</script>

<template>
  {{ ff }}
  <RouterView />
</template>

<style scoped></style>
