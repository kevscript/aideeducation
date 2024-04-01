import { MenuStatus } from ".";
import { HeaderAppearance } from "./types";

type MenuBurgerProps = {
  menuStatus: MenuStatus;
  appearance: HeaderAppearance;
};

export function MenuBurger({ menuStatus, appearance }: MenuBurgerProps) {
  return (
    <div className="flex w-[18px] flex-col flex-nowrap justify-between gap-[3px]">
      <div
        className={`h-[2px] w-full transition duration-500 rounded-full ${
          menuStatus === "open"
            ? "translate-y-[5px] rotate-45 bg-white"
            : appearance === "light"
            ? "bg-white"
            : "bg-navy-900"
        }`}
      ></div>
      <div
        className={`h-[2px] w-full  rounded-full transition duration-500 ${
          menuStatus === "open"
            ? "opacity-0"
            : appearance === "light"
            ? "bg-white"
            : "bg-navy-900"
        }`}
      ></div>
      <div
        className={`h-[2px] w-full rounded-full transition duration-500 ${
          menuStatus === "open"
            ? "-translate-y-[5px] -rotate-45 bg-white"
            : appearance === "light"
            ? "bg-white"
            : "bg-navy-900"
        }`}
      ></div>
    </div>
  );
}
