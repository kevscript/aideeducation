"use client";
import { useCallback, useEffect, useRef, useState } from "react";

type Statistic = {
  prefix?: string;
  amount: number;
  suffix?: string;
  description: string;
};

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
        const hangingCells = (statistics.length + 2) % gridColumnCount;
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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      ref={gridRef}
    >
      <div className="w-full col-span-1 md:col-span-2 border border-neutral-100 md:border-none p-8 flex flex-col gap-2">
        <h3 className="text-navy-700 tracking-tight font-semibold">
          Nos Statistiques
        </h3>
        <p className="text-xl lg:text-4xl font-semibold tracking-tighter">
          L&apos;activité de l&apos;association en{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-navy-700 to-navy-900">
            quelques chiffres
          </span>
          .
        </p>
      </div>
      {Array.from({ length: cellCount }).map((x, i) => (
        <div
          key={i}
          className="relative w-full lg:min-h-64 group cursor-pointer"
        >
          {statistics[i] ? (
            <>
              <div
                className="border group-hover:border-neutral-900 border-neutral-100 group-hover:bg-neutral-900 p-8 flex gap-2 flex-col z-0 h-full"
                aria-hidden="true"
              >
                <p className="opacity-0 text-5xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-navy-700 to-navy-900">
                  <span>{statistics[i].prefix || ""}</span>
                  <span className="font-mono">{statistics[i].amount}</span>
                  <span>{statistics[i].suffix || ""}</span>
                </p>
                <p className="opacity-0 tracking-tight">
                  {statistics[i].description}
                </p>
              </div>
              <div className="z-10 absolute inset-0 p-8 flex gap-2 flex-col group-hover:bg-gradient-to-bl from-navy-700 to-navy-900 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300 ease-in-out group-hover:rounded-tr-2xl">
                <p className="text-5xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-navy-700 to-navy-900 group-hover:from-white group-hover:to-white">
                  <span>{statistics[i].prefix || ""}</span>
                  <span className="font-mono">{statistics[i].amount}</span>
                  <span>{statistics[i].suffix || ""}</span>
                </p>
                <p className="tracking-tight group-hover:text-white">
                  {statistics[i].description}
                </p>
              </div>
            </>
          ) : (
            <div className="w-full h-full border border-neutral-100"></div>
          )}
        </div>
      ))}
    </div>
  );
}
