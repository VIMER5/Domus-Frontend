import { defineStore } from "pinia";
import $api from "../API";
import type { Axios, AxiosResponse } from "axios";

interface authUserStore {
  AaccessToken: null | string;
}

export const authUserStore = defineStore("authUser", {
  state: (): authUserStore => ({
    AaccessToken: sessionStorage.getItem("accessToken") || null,
  }),
  getters: {
    isAaccessToken: (s) => !!s.AaccessToken,
  },
  actions: {
    async updatToken(): Promise<any> {
      try {
        const res = await $api.get("/auth/updatAccessToken");
        sessionStorage.setItem("accessToken", res.data.accessToken);
        this.AaccessToken = res.data.accessToken;
      } catch (err) {
        this.AaccessToken = null;
      }
    },
  },
});
