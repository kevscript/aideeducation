import { MenuStatus } from ".";
import { HeaderAppearance } from "./types";

type MenuBurgerProps = {
  menuStatus: MenuStatus;
  appearance: HeaderAppearance;
};

export function MenuBurger({ menuStatus, appearance }: MenuBurgerProps) {
  const bgColor =
    menuStatus === "open"
      ? "bg-white"
      : appearance === "light"
      ? "bg-white"
      : "bg-navy-900";
  return (
    <div className="w-6 flex justify-between items-center flex-col gap-1">
      <div
        className={`w-full h-1 rounded-full transition duration-300 ${bgColor} ${
          menuStatus === "open" && "rotate-45 translate-y-2"
        }`}
      ></div>
      <div
        className={`w-full h-1 rounded-full transition duration-300 ${bgColor} ${
          menuStatus === "open" && "-translate-x-3 opacity-0 scale-0 bg-white"
        }`}
      ></div>
      <div
        className={`w-full h-1 rounded-full transition duration-300 ${bgColor} ${
          menuStatus === "open" && "-rotate-45 -translate-y-2"
        }`}
      ></div>
    </div>
  );
}
