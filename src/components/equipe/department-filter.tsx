"use client";
import ScrollContainer from "react-indiana-drag-scroll";

export function DepartmentFilter() {
  return (
    <ScrollContainer
      className="scroll-container flex list-none gap-2 scroll-smooth"
      activationDistance={2}
    >
      <li className="px-4 py-2 rounded-full shrink-0 flex justify-center items-center bg-neutral-50">
        <span className="text-sm">Tous</span>
      </li>
      <li className="px-4 py-2 rounded-full shrink-0 flex justify-center items-center bg-neutral-50">
        <span className="text-sm">Direction Générale</span>
      </li>
      <li className="px-4 py-2 rounded-full shrink-0 flex justify-center items-center bg-neutral-50">
        <span className="text-sm">Dept. Pédagogique</span>
      </li>
      <li className="px-4 py-2 rounded-full shrink-0 flex justify-center items-center bg-neutral-50">
        <span className="text-sm">Dept. Intérieur</span>
      </li>
      <li className="px-4 py-2 rounded-full shrink-0 flex justify-center items-center bg-neutral-50">
        <span className="text-sm">Dept. Exterieur</span>
      </li>
    </ScrollContainer>
  );
}
