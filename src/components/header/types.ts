export type NavLinkType = {
  label: string;
  path: string;
};

export type NavDropdownType = {
  label: string;
  dropdown: NavLinkType[];
};

export type HeaderAppearance = "light" | "dark";
