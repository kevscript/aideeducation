import { NavDropdownType, NavLinkType } from "./types";

export function isNavDropdown(
  x: NavLinkType | NavDropdownType
): x is NavDropdownType {
  return (x as NavDropdownType).dropdown ? true : false;
}
