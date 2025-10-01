import { ref } from "vue";
import $api from "@/app/axios";
function loginPages() {
  const login = ref<string>("");
  const pass = ref<string>("");
  const Remember = ref<boolean>(false);
  const errorText = ref<string>("");

  async function submit() {
    try {
      errorText.value = "";
      if (login.value.length <= 4 || pass.value.length <= 4) return (errorText.value = "Неверный логин или пароль");
      const res = await $api.post("/auth/login", {
        login: login.value,
        pass: pass.value,
        Remember: Remember.value,
      });
      if (res.status == 200) {
        sessionStorage.setItem("accessToken", res.data.accessToken);
        // window.location.reload();
      }
    } catch (err) {
      errorText.value = "Неверный логин или пароль";
      // console.log(err) // debug
    }
  }
  return { login, pass, errorText, Remember, submit };
}

export { loginPages };
