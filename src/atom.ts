import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "mode",
  default: false,
});
