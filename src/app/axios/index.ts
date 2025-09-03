import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

const baseURL = "http://localhost:3000/api/";

const $api = axios.create({
  withCredentials: true,
  baseURL: baseURL,
});
$api.interceptors.request.use((conf) => {
  conf.headers.aut = "ddd";
  return conf;
});
$api.interceptors.response.use((conf): AxiosResponse => {
  //   conf.data = "f";
  console.log(conf);
  return conf;
});

export default $api;
