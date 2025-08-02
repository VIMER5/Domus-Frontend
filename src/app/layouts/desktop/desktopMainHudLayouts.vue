<script setup lang="ts">
import headeBar from "@/widgets/headerBar/headeBar.vue";
import logo from "@/shared/img/logo.vue";
import NavBar from "@/widgets/navBar/navBar.vue";
</script>
<template>
  <div className="hud">
    <div className="logo box_shadow-r"><logo class="logo-svg" /></div>
    <header className="header">
      <div className="header__content m50And30"><headeBar /></div>
    </header>
    <nav className="nav box_shadow-r"><NavBar /></nav>
    <main className="main m50And30"><router-view /></main>
  </div>
</template>

<style scoped>
.hud {
  height: 100%;
  display: grid;
  grid-template-columns: clamp(100px, 16.9vw, 400px) 1fr;
  grid-template-rows: clamp(100px, calc((8.4vw + 8.4vh) / 2), 200px) 1fr;
  grid-template-areas:
    "logo header"
    "nav main";
}
.m50And30 {
  margin-left: 50px;
  margin-right: 30px;
}
.logo {
  container-type: inline-size;
  grid-area: logo;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo-svg {
  width: 71cqw;
  height: auto;
}
.box_shadow-r {
  box-shadow: 1px 0px 3px 2px var(--color-box-shadow-light);
  clip-path: inset(0 -20px 0px 0px);
}
.header {
  box-shadow: 0px 1px 3px 2px var(--color-box-shadow-light);
  grid-area: header;
  clip-path: inset(0px 0px -20px 0px);
}
.header__content {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.nav {
  padding-top: 20px;
  grid-area: nav;
}
.main {
  grid-area: main;
}
</style>
