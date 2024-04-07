"use client";
import ScrollContainer from "react-indiana-drag-scroll";

export function DepartmentFilter() {
  return (
    <ScrollContainer
      className="scroll-container select-none flex flex-row flex-nowrap list-none gap-8 scroll-smooth"
      activationDistance={2}
    >
      <div className="w-full h-full flex wrapper gap-4">
        <li className="px-4 py-2 cursor-pointer rounded-full shrink-0 flex justify-center items-center bg-neutral-50">
          <span className="text-sm">Tous</span>
        </li>
        <li className="px-4 py-2 cursor-pointer rounded-full shrink-0 flex justify-center items-center bg-neutral-50">
          <span className="text-sm">Direction Générale</span>
        </li>
        <li className="px-4 py-2 cursor-pointer rounded-full shrink-0 flex justify-center items-center bg-neutral-50">
          <span className="text-sm">Dept. Pédagogique</span>
        </li>
        <li className="px-4 py-2 cursor-pointer rounded-full shrink-0 flex justify-center items-center bg-neutral-50">
          <span className="text-sm">Dept. Intérieur</span>
        </li>
        <li className="px-4 py-2 cursor-pointer rounded-full shrink-0 flex justify-center items-center bg-neutral-50">
          <span className="text-sm">Dept. Exterieur</span>
        </li>
      </div>
    </ScrollContainer>
  );
}
