import { ref, computed } from "vue";
import { defineStore } from "pinia";
import socket from "@/app/API/webSocket";
import dateService from "@/app/service/dateService";

export const weatherStore = defineStore("weatherStore", () => {
  const currentWeather = ref<any>(null);
  socket.on("weatherCurrent", (data) => {
    currentWeather.value = data;
    // console.log(data);
  });
  return { currentWeather };
});
