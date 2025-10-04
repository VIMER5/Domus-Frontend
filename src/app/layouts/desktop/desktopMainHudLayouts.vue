<script setup lang="ts">
import NavBar from "@/widgets/navBar/ui/navBar.vue";
</script>
<template>
  <div className="hud">
    <div className="stub box_shadow-r"></div>
    <nav className="nav box_shadow-r"><NavBar /></nav>
    <main className="main m50And30"><router-view /></main>
  </div>
</template>

<style scoped>
.hud {
  height: 100%;
  display: grid;
  grid-template-columns: clamp(80px, 6.86vw, 400px) 1fr;
  grid-template-rows: clamp(66px, calc((8.4vw + 8.4vh) / 2), 100px) 1fr;
  grid-template-areas:
    "stub stub2"
    "nav main";
}
.m50And30 {
  margin-left: 50px;
  margin-right: 30px;
}
.stub {
  container-type: inline-size;
  grid-area: stub;
}
.box_shadow-r {
  box-shadow: 1px 0px 3px 2px var(--color-box-shadow-light);
  clip-path: inset(0 -20px 0px 0px);
}
.nav {
  padding-top: 20px;
  grid-area: nav;
}
.main {
  padding-top: 20px;
  grid-area: main;
}
</style>
