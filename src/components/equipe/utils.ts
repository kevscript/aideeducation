import { EquipePageSearchParams } from "@/app/nous/equipe/page";
import { departments, sorters } from "./constants";
import { Member } from "@/cms/types";

export function setFilterOptions(searchParams: EquipePageSearchParams) {
  const filterOptions = {} as EquipePageSearchParams;
  if (searchParams.department) {
    filterOptions.department =
      departments.find((d) => d.value === searchParams.department)?.value ||
      undefined;
  }
  if (searchParams.sort) {
    filterOptions.sort =
      sorters.find((s) => s.value === searchParams.sort)?.value || undefined;
  } else {
    filterOptions.sort = "lastname";
  }
  return filterOptions;
}

export function setFilteredMembers(
  members: Member[],
  filterOptions: EquipePageSearchParams
) {
  const filteredMembers: Member[] = members.filter((m) => {
    const hasDepartment = filterOptions.department
      ? m.department === filterOptions.department
      : true;
    return hasDepartment;
  });

  if (filterOptions.sort) {
    filteredMembers.sort((a, b) => {
      if (filterOptions.sort === "joinedAt") {
        return new Date(a.joinedAt) > new Date(b.joinedAt) ? -1 : 1;
      }
      if (filterOptions.sort === "rank") {
        return Number(a.rank) > Number(b.rank) ? -1 : 1;
      }

      const aName = a["lastname"].trim() ? a["lastname"] : a["firstname"];
      const bName = b["lastname"].trim() ? b["lastname"] : b["firstname"];
      return aName > bName ? 1 : -1;
    });
  }

  return filteredMembers;
}
