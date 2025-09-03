import { defineStore } from "pinia";

interface authUserStore {
  accessToken: string | null;
}

export const authUserStore = defineStore("authUser", {
  state: (): authUserStore => ({
    accessToken: null,
  }),
  getters: {
    isAuthenticated: (s) => !!s.accessToken,
  },
});
