<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
import { onMounted } from "vue";
import time from "@/features/time/time";
let t = time(5);
// onMounted(() => {
//   getDate();
// });
</script>

<template>
  <ul className="header-ul">
    <li className="header__pageTitle">{{ route.meta.title }}</li>
    <li className="header__time">{{ t.Hours }}:{{ t.Minutes }}</li>
    <li class="header__profel">Компонент профиля</li>
  </ul>
</template>

<style scoped>
.header-ul {
  container-type: inline-size;
  display: flex;
  justify-content: space-between;
  margin: auto 0;
  align-items: center;
  > li {
    height: max-content;
  }
}
.header__pageTitle {
  font-size: 28px;
  font-size: clamp(20px, 3.10714286cqw, 30px);
}
.header__time {
  font-family: "interBold";

  font-size: 20px;
  font-size: clamp(19px, 2.245cqw, 25px);
}
/* .header__profel {
} */

@media (min-width: 2000px) {
  .header__pageTitle {
    font-size: clamp(20px, 2.10714286cqw, 60px);
  }
  .header__time {
    font-size: clamp(19px, 2.245cqw, 40px);
  }
}
@media (max-width: 1158px) {
  .header__time {
    margin-right: 6vw;
  }
}
</style>
