import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
const baseURL = "http://localhost:2335/api/";

const $api = axios.create({
  withCredentials: true,
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;

$api.interceptors.request.use((conf) => {
  conf.headers.auth = sessionStorage.getItem("accessToken");
  return conf;
});
$api.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (error) => {
    if (error.response?.status === 401 && !isRefreshing && !error.request.responseURL.includes("updatAccessToken")) {
      isRefreshing = true;
      try {
        const newToken = await updatToken();
        if (newToken) {
          error.config.headers.auth = newToken.data.accessToken;
          return $api.request(error.config);
        }
      } catch (err) {
        console.error("Не удалось обновить токен:", err);
        window.location.reload();
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
);

async function updatToken(): Promise<any> {
  try {
    const res = await $api.get("/auth/updatAccessToken");
    sessionStorage.setItem("accessToken", res.data.accessToken);
    return res;
  } catch (err) {
    throw err;
  }
}

export default $api;
