"use client";
import { usePathname, useRouter } from "next/navigation";

type SortFilterProps = {
  sorters: any[];
  activeSort?: string;
};

export function SortFilter({ sorters, activeSort }: SortFilterProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleSort(newSort?: string) {
    const currentParams = new URLSearchParams(window.location.search);
    if (!newSort) {
      currentParams.set("sort", "lastname");
    } else {
      currentParams.set("sort", newSort);
    }

    router.replace(`${pathname}?${currentParams.toString()}`, {
      scroll: false,
    });
  }

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <span>Trier par : </span>
      <select
        onChange={(e) => handleSort(e.currentTarget.value)}
        value={activeSort || "lastname"}
        className="min-w-64 focus:outline-navy-900 h-10 px-2 bg-white border rounded"
      >
        {sorters.length &&
          sorters.map((sort) => (
            <option key={sort.value} value={sort.value}>
              {sort.label}
            </option>
          ))}
      </select>
    </div>
  );
}
