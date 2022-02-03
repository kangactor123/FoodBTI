import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "mode",
  default: true,
});

export const page = atom({
  key: "page",
  default: 0,
});

export const Count = atom({
  key: "value",
  default: 0,
});

export const MBTI = atom({
  key: "mbti",
  default: "",
});

export const Showing = atom({
  key: "showing",
  default: false,
});
