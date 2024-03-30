"use client";

import { useEffect, useMemo, useState } from "react";
import { MenuBurger } from "./menu-burger";
import { Menu } from "./menu";
import { usePathname } from "next/navigation";
import { NavDropdown } from "./nav-dropdown";
import { NavLink } from "./nav-link";
import { isNavDropdown } from "./typeguards";
import { HeaderAppearance } from "./types";
import Link from "next/link";
import { DiscordIcon } from "../icons/discord";
import { LogoIcon } from "../icons/logo";

export type MenuStatus = "close" | "open";

export function Header() {
  const [menuStatus, setMenuStatus] = useState<MenuStatus>("close");
  const [isPageTop, setIsPageTop] = useState(true);
  const pathname = usePathname();
  const isOnDarkBg = useMemo(() => pathname === "/", [pathname]);
  const appearance: HeaderAppearance = useMemo(() => {
    return isOnDarkBg && isPageTop ? "light" : "dark";
  }, [isOnDarkBg, isPageTop]);

  // close mobile menu on route change
  useEffect(() => setMenuStatus("close"), [pathname]);

  // remove scrollbar when mobile nav open
  useEffect(() => {
    if (menuStatus === "open") {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [menuStatus]);

  // close mobile nav when resized to desktop
  useEffect(() => {
    const listenClientWidth = () => {
      window.innerWidth > 1024 &&
        menuStatus === "open" &&
        setMenuStatus("close");
    };
    listenClientWidth();
    window.addEventListener("resize", listenClientWidth);
    return () => {
      window.removeEventListener("resize", listenClientWidth);
    };
  }, [menuStatus]);

  // check if at top of page
  useEffect(() => {
    const scrollHandler = () => {
      setIsPageTop(window.scrollY <= 16);
    };
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <header
        className={`w-full z-50 fixed top-0 left-0 right-0 ${
          isPageTop || menuStatus === "open"
            ? "bg-transparent"
            : "bg-white/80 shadow-sm backdrop-blur"
        }`}
      >
        <div className="wrapper flex justify-between flex-nowrap items-center h-16 w-full">
          <Link href="/" className={`flex flex-shrink-0 items-center gap-4`}>
            <LogoIcon
              className={`${
                menuStatus === "open" || appearance === "light"
                  ? "fill-white"
                  : "fill-navy-700"
              } h-8 w-8`}
            />
            {!isPageTop && menuStatus === "close" && (
              <span
                className={`text-clip bg-gradient-to-r from-navy-500 to-navy-700 font-display tracking-tight`}
              >
                AideEducation
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden h-full list-none items-center gap-8 lg:flex`}>
            <NavLink
              navItem={{ label: "Accueil", path: "/" }}
              appearance={appearance}
            />
            <NavDropdown
              navItem={{
                label: "Qui sommes-nous",
                dropdown: [
                  { label: "Association", path: "/" },
                  { label: "Equipe", path: "/" },
                ],
              }}
              appearance={appearance}
            />
            <NavDropdown
              navItem={{
                label: "Documentation",
                dropdown: [
                  { label: "Orientation", path: "/" },
                  { label: "Tutoriels", path: "/" },
                ],
              }}
              appearance={appearance}
            />
            <NavDropdown
              navItem={{
                label: "Nous soutenir",
                dropdown: [
                  {
                    label: "Recrutement",
                    path: "/",
                  },
                  { label: "Faire un don", path: "/" },
                  { label: "Partenaires", path: "/" },
                ],
              }}
              appearance={appearance}
            />
            <NavLink
              navItem={{ label: "Contact", path: "/" }}
              appearance={appearance}
            />
          </nav>

          <div
            className="aspect-square flex justify-center items-center lg:hidden"
            onClick={() =>
              setMenuStatus((x) => (x === "close" ? "open" : "close"))
            }
          >
            <MenuBurger menuStatus={menuStatus} appearance={appearance} />
          </div>
        </div>
      </header>
      {menuStatus === "open" && <Menu />}
    </>
  );
}
