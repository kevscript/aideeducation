"use client";
import { usePathname, useRouter } from "next/navigation";
import ScrollContainer from "react-indiana-drag-scroll";

type DepartmentFilterProps = {
  departments: any[];
  activeDepartment?: string;
};

export function DepartmentFilter({
  departments,
  activeDepartment,
}: DepartmentFilterProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleDepartment(newDepartment?: string) {
    const currentParams = new URLSearchParams(window.location.search);
    if (!newDepartment) {
      currentParams.delete("department");
    } else {
      currentParams.set("department", newDepartment);
    }

    router.replace(`${pathname}?${currentParams.toString()}`, {
      scroll: false,
    });
  }

  return (
    <ScrollContainer
      className="scroll-container select-none flex flex-row flex-nowrap list-none gap-8 scroll-smooth"
      activationDistance={2}
    >
      <ul className="w-full h-full flex wrapper gap-4">
        <li
          onClick={() => handleDepartment()}
          className={`px-4 py-2 cursor-pointer rounded-full shrink-0 flex justify-center items-center bg-neutral-50 ${
            !activeDepartment ? "text-navy-700" : "text-neutral-900"
          }`}
        >
          <span className="text-sm">Tous</span>
        </li>
        {departments.length &&
          departments.map((dept) => (
            <li
              key={dept.value}
              onClick={() => handleDepartment(dept.value)}
              className={`px-4 py-2 cursor-pointer rounded-full shrink-0 flex justify-center items-center bg-neutral-50  ${
                activeDepartment === dept.value
                  ? "text-navy-700"
                  : "text-neutral-900"
              }`}
            >
              <span className="text-sm">{dept.label}</span>
            </li>
          ))}
      </ul>
    </ScrollContainer>
  );
}
