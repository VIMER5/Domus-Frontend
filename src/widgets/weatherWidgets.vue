<script setup lang="ts">
import lightSnow from "@/shared/img/precipitation/lightSnow.vue";
</script>

<template>
  <div class="weather__Widgets">
    <div class="date gradiend">22 <span>Четверг</span></div>

    <div class="weather">
      <div class="city">Оренбург</div>
      <div class="content__weather">
        <div class="tem gradiend">-29°</div>
        <div class="precipitation">
          <div class="icon"><lightSnow /></div>
          <div class="precipitation__test gradiend">Дождь</div>
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
  font-family: "interRegular";
  display: flex;
  flex-direction: column;
  gap: 6rem;
}
.date {
  width: max-content;
  display: flex;
  flex-direction: column;
  font-size: 6.4rem;
  gap: 1.2rem;

  > span {
    font-size: 2rem;
    -webkit-text-fill-color: var(--color-text-secondary);
  }
}
.weather {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.city {
  font-size: 2rem;
}

.content__weather {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
}
.tem {
  font-size: 4rem;
}
.precipitation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
}
.precipitation__test {
  font-family: "InterLight";
  font-size: 1.3rem;
}
</style>
