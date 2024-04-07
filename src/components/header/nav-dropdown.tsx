import Link from "next/link";
import { HeaderAppearance, NavDropdownType } from "./types";
import { ChevronIcon } from "../icons/chevron";

type NavDropdownProps = {
  navItem: NavDropdownType;
  appearance?: HeaderAppearance;
};

export const NavDropdown = ({
  navItem,
  appearance = "dark",
}: NavDropdownProps) => {
  return (
    <li
      className={`group/link relative flex h-full cursor-pointer items-center`}
    >
      <div className={`flex items-center gap-2`}>
        <span
          className={`${
            appearance === "light"
              ? "text-white"
              : "group-hover/link:text-navy-700"
          } font-text tracking-tight`}
        >
          {navItem.label}
        </span>
        <ChevronIcon
          className={`${
            appearance === "light" ? "fill-white" : "fill-neutral-900"
          } w-2.5 group-hover/link:-rotate-180`}
        />
      </div>

      <div
        className={`invisible absolute left-0 top-14 min-w-48 rounded border border-neutral-100 bg-white p-2 shadow-sm group-hover/link:visible`}
      >
        <ul className={`flex flex-col gap-1`}>
          {navItem.dropdown.map((dropdownItem, i) => (
            <Link key={i} href={dropdownItem.path} className="group/dropdown">
              <li className="w-full rounded p-2 hover:bg-gradient-to-b hover:from-neutral-50 hover:to-neutral-100">
                <span
                  className={`font-text tracking-tight text-neutral-900 group-hover/dropdown:text-navy-700`}
                >
                  {dropdownItem.label}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </li>
  );
};
