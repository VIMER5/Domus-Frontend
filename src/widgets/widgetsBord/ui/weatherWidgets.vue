<script setup lang="ts">
import lightSnow from "@/shared/img/precipitation/lightSnow.vue";
import { weatherStore } from "@/app/stores/weather";
import dateService from "@/app/service/dateService";
const store = weatherStore();
</script>

<template>
  <div class="weather__Widgets">
    <div class="date gradiend">
      <div class="day">{{ dateService.date.getDate() }}</div>
      <div class="day__week">{{ dateService.DayInString }}</div>
    </div>

    <div class="weather">
      <div class="city">{{ store.currentWeather ? store.currentWeather.location.name : "--" }}</div>
      <div class="content__weather">
        <div class="tem gradiend">
          {{ store.currentWeather ? Math.round(store.currentWeather.current.temp_c) : "--" }}°
        </div>
        <div class="precipitation">
          <div class="icon"><lightSnow /></div>
          <div class="precipitation__text gradiend">
            {{ store.currentWeather ? store.currentWeather.current.condition.text : "--" }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gradiend {
  background: var(--gradiend-text-color);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.weather__Widgets {
  font-size: clamp(0.5rem, 0.6dvw, 1.2rem);
  font-family: "interRegular";
  display: flex;
  flex-direction: column;
  gap: 4em;
}
.date {
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 1.2em;
}
.day {
  font-size: 6.4em;
}
.day__week {
  font-size: 2em;
  -webkit-text-fill-color: var(--color-text-secondary);
}

.weather {
  display: flex;
  flex-direction: column;
  gap: 0.8em;
}
.city {
  color: var(--color-text-main);
  font-size: 2em;
}

.content__weather {
  display: flex;
  flex-direction: row;
  gap: 1em;
  align-items: center;
}
.tem {
  font-size: 6em;
}
.precipitation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3em;
}
.icon {
  font-size: 3.4em;
  > svg {
    height: auto;
    width: 1em;
  }
}
.precipitation__text {
  font-family: "InterLight";
  font-size: 1.3em;
  max-width: 7em;
  text-align: center;
}
</style>
