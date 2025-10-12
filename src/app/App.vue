<script setup lang="ts">
import checkScreen from "@/shared/lib/device";
import { RouterView } from "vue-router";
import socket from "@/app/API/webSocket";
import { ref } from "vue";

socket.emit("join_room", 1);
socket.on("room_state", (data) => {
  ff.value = data;
});
const ff = ref();
checkScreen();
</script>

<template>
  {{ ff }}
  <RouterView />
</template>

<style scoped></style>
