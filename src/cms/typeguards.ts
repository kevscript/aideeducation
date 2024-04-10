import { Avatar, Icon, Image, Logo } from "./types";

export function isIcon(x: Icon | string | null | undefined): x is Icon {
  return x && (x as Icon).url ? true : false;
}

export function isAvatar(x: Avatar | string | null | undefined): x is Avatar {
  return x && (x as Avatar).url ? true : false;
}

export function isImage(x: Image | string | null | undefined): x is Image {
  return x && (x as Image).url ? true : false;
}

export function isLogo(x: Logo | string | null | undefined): x is Logo {
  return x && (x as Logo).url ? true : false;
}
