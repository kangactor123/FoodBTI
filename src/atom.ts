import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "mode",
  default: true,
});

export const page = atom({
  key: "page",
  default: 0,
});
