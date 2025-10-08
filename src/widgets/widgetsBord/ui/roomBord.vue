<script setup lang="ts">
import panelWidgets from "@/components/panelWidgets.vue";
import roomIcon from "@/shared/img/roomIcon.vue";
import logicRoomBord from "../logic/logicRoomBord";
const logic = logicRoomBord();
</script>

<template>
  <div class="room__bord">
    <div v-if="logic.length > 0" v-for="item in logic">
      <RouterLink :to="item.path">
        <component class="roomWidgets-panelWidgets" :is="panelWidgets">
          <div class="roomWidgets">
            <div class="icon"><roomIcon /></div>
            <div class="text">{{ item.name }}</div>
          </div>
        </component>
      </RouterLink>
    </div>
    <div v-else class="warn">Вы пока не добавили комнаты</div>
  </div>
</template>

<style>
.roomWidgets-panelWidgets:hover .roomWidgets > .icon > svg *[fill] {
  fill: url(#grad) !important;
  fill-opacity: 1;
}
</style>

<style scoped>
.warn {
  color: var(--color-loginIn-text);
  font-size: 1.5em;
}
.roomWidgets-panelWidgets {
  box-sizing: border-box;
}
.roomWidgets-panelWidgets:hover .roomWidgets > .text {
  color: blue !important;
  background: var(--gradiend-text-color);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.room__bord {
  font-size: clamp(0.5rem, 0.6dvw, 1.2rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  min-height: max-content;
}
.roomWidgets {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  width: 13.2em;
  height: calc(13.2em + 10em);
}
.icon {
  width: 80%;
  height: auto;
  > svg {
    width: 100%;
    height: auto;
  }
}
.text {
  font-size: 2em;
  font-family: "interSemiBold";
  color: var(--color-loginIn-text);
}
</style>
