"use client";
import { Association } from "@/cms/types";
import ScrollContainer from "react-indiana-drag-scroll";

type AssociationTimelineProps = {
  events: Association["events"];
};

export function AssociationTimeline({ events }: AssociationTimelineProps) {
  return (
    <ScrollContainer
      className="scroll-container cursor-pointer select-none flex flex-row flex-nowrap list-none gap-8 scroll-smooth"
      activationDistance={10}
      vertical={false}
    >
      <ul className="w-full h-full flex wrapper  gap-4 md:gap-8 lg:gap-16">
        {events?.map((ev) => (
          <li key={ev.id} className="flex flex-col w-48 lg:w-64 shrink-0 group">
            <span className="text-xs tracking-tighter font-mono font-semibold text-white">
              {new Date(ev.date).toLocaleDateString("fr-FR")}
            </span>
            <ul className="w-3 h-3 border-navy-700 border-2 rounded-full bg-white mt-2"></ul>
            <p className="text-sm mt-4 text-balance font-semibold tracking-tighter group-hover:text-navy-700">
              {ev.title}
            </p>
          </li>
        ))}
      </ul>
    </ScrollContainer>
  );
}
