<script setup lang="ts">
import domusInput from "@sharedUi/domusInput.vue";
import domusCheckbox from "@sharedUi/domusCheckbox.vue";
import domusButton from "@/shared/ui/domusButton.vue";
import { RouterLink } from "vue-router";
import { loginPages } from "./logic/logicLoginIn";
const logic = loginPages();
</script>

<template>
  <div class="login__form">
    <h2 class="login__form__title-h2">Авторизация</h2>
    <form @submit.prevent="logic.submit">
      <domusInput
        v-model="logic.login.value"
        autocomplete="on"
        id="username"
        name="username"
        type="text"
        placeholder="Логин"
      />
      <domusInput
        v-model="logic.pass.value"
        autocomplete="on"
        id="password"
        name="password"
        type="password"
        placeholder="Пароль"
      />
      <div class="checkboxAndLink">
        <domusCheckbox v-model="logic.Remember.value" id="CheckboxLoginIn" name="CheckboxLoginIn"
          >Запомнить меня</domusCheckbox
        >
        <RouterLink class="routerLink" to="/">Забыл пароль?</RouterLink>
      </div>
      <domusButton type="submit" class="button__LoginIn" :active="true">Авторизоваться</domusButton>
    </form>

    <div class="errorText">{{ logic.errorText }}</div>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.login__form {
  margin: auto auto;
  width: clamp(20rem, 50vw, 40rem);
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.login__form__title-h2 {
  font-family: "interRegular";
  font-size: clamp(2rem, 1rem + 2vw, 3rem);
  color: #1f1f1f;
  text-align: center;
}
.checkboxAndLink {
  color: var(--color-loginIn-text);
  display: flex;
  justify-content: space-between;
  font-size: clamp(1.2rem, 0.5rem + 1vw, 1.5rem);
}
.button__LoginIn {
  padding: 16px 0;
  font-size: clamp(1.2rem, 0.5rem + 1vw, 1.5rem);
  font-family: "interBold";
}
.routerLink {
  color: var(--color-loginIn-text);
}
.errorText {
  font-size: clamp(1rem, 0.5rem + 2vw, 1.5rem);
  text-align: center;
  color: var(--error-color);
}

@media (max-width: 434px) {
  .checkboxAndLink {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
