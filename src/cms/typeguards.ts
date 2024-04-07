import { Icon } from "./types";

export function isIcon(x: Icon | string): x is Icon {
  return (x as Icon).url ? true : false;
}
