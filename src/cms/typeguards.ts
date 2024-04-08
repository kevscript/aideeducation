import { Avatar, Icon } from "./types";

export function isIcon(x: Icon | string): x is Icon {
  return (x as Icon).url ? true : false;
}

export function isAvatar(x: Avatar | string | null | undefined): x is Avatar {
  return x && (x as Avatar).url ? true : false;
}
