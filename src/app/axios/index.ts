import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

const baseURL = "http://localhost:2335/api/";

const $api = axios.create({
  withCredentials: true,
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
$api.interceptors.request.use((conf) => {
  conf.headers.aut = sessionStorage.getItem("accessToken");

  return conf;
});
$api.interceptors.response.use((conf): AxiosResponse => {
  //   conf.data = "f";
  console.log(conf);
  return conf;
});

export default $api;
