import { atom } from "recoil";

export const userState = atom({
  key: "user",
  default: {
    id: '12345678',
    name: 'Luong Thinh',
    avatar: 'LT',
  }
})
