import { atom } from "nanostores";

type Props = {
  text:string;
  select: string
}

export const input = atom<Props>({ text:"",select:"tech" })
