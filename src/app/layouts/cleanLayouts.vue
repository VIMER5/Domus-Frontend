<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref } from "vue";
import $api from "../axios";
const login = ref();
const pass = ref();

function tt() {
  $api
    .post("/auth/login", {
      login: login.value,
      pass: pass.value,
    })
    .then((r) => {
      sessionStorage.setItem("accessToken", r.data.accessToken);
    });
}
</script>

<template>
  <div class="ff">
    <input v-model="login" type="text" />
    <input v-model="pass" type="password" />
    <button @click="tt">Отправить</button>
    <RouterView />
  </div>
</template>
