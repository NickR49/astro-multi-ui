import { persistentAtom } from "@nanostores/persistent";

export const counter = persistentAtom<number>("counter", 0, {
  encode: JSON.stringify,
  decode: JSON.parse,
});
