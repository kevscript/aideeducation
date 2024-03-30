import Link from "next/link";
import { HeaderAppearance, NavLinkType } from "./types";

type NavLinkProps = {
  navItem: NavLinkType;
  appearance?: HeaderAppearance;
};

export const NavLink = ({ navItem, appearance = "dark" }: NavLinkProps) => {
  return (
    <Link href={navItem.path} className="group">
      <li>
        <span
          className={`${
            appearance === "light" ? "text-white" : "group-hover:text-navy-500"
          } font-text tracking-tight`}
        >
          {navItem.label}
        </span>
      </li>
    </Link>
  );
};
