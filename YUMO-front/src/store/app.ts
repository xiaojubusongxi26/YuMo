import { webOption } from "@/setting";
import { defineStore } from "pinia";
import { WebOptionModel } from "@/modules/common";

interface appStore {
  theme: string;
  webOption: WebOptionModel;
}

export const appStore = defineStore("appStore", {
  state: () => ({
    theme: "light",
    webOption: webOption,
  }),
  actions: {
    toggleTheme(themeName: string): void {
      this.theme = themeName;
    },
  },
  persist: true,
});
