"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Statistic } from "@/cms/types";

// type Statistic = {
//   prefix?: string;
//   amount: number;
//   suffix?: string;
//   description: string;
// };

type StatisticListProps = {
  statistics: Statistic[];
};

export function StatisticList({ statistics }: StatisticListProps) {
  const [cellCount, setCellCount] = useState(() => statistics.length);
  const gridRef = useRef<HTMLDivElement>(null);

  const generateCells = useCallback(() => {
    if (gridRef.current) {
      const gridColumnCount = window
        .getComputedStyle(gridRef.current)
        .getPropertyValue("grid-template-columns")
        .split(" ").length;

      if (gridColumnCount === 1 && cellCount !== statistics.length) {
        setCellCount(statistics.length);
      } else {
        const hangingCells = statistics.length % gridColumnCount;
        const fillCells = hangingCells ? gridColumnCount - hangingCells : 0;
        setCellCount(statistics.length + fillCells);
      }
    }
  }, [statistics, cellCount]);

  useEffect(() => {
    generateCells();
  }, [gridRef, generateCells]);

  useEffect(() => {
    window.addEventListener("resize", generateCells);
    return () => window.removeEventListener("resize", generateCells);
  }, [generateCells]);

  return (
    <div
      className="flex-1 z-0 grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] bg-navy-700 gap-[1px] border-[1px] border-navy-700"
      ref={gridRef}
    >
      {Array.from({ length: cellCount }).map((x, i) => (
        <div
          key={i}
          className="relative group md:min-h-32 lg:min-h-64 bg-navy-900"
        >
          {statistics[i] ? (
            <div className="w-full h-full group-hover:bg-neutral-900/50 cursor-pointer">
              <div className="w-full h-full lg:group-hover:absolute z-10 bottom-0 p-8 flex gap-2 flex-col group-hover:bg-gradient-to-bl from-navy-700 to-navy-900 lg:group-hover:translate-x-2 lg:group-hover:-translate-y-2 transition-all duration-300 ease-in-out lg:group-hover:rounded-tr-2xl">
                <p className="text-5xl font-semibold font-mono tracking-tight text-white">
                  <span className="font-mono">{statistics[i].title}</span>
                </p>
                <p className="text-neutral-100">{statistics[i].description}</p>
              </div>
            </div>
          ) : (
            <div className="w-full h-full"></div>
          )}
        </div>
      ))}
    </div>
  );
}
