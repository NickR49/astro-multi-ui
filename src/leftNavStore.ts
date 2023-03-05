import { persistentAtom } from "@nanostores/persistent";

export const open = persistentAtom<boolean>("open", false, {
  encode: JSON.stringify,
  decode: JSON.parse,
});
