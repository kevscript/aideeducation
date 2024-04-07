import { getMembers } from "@/cms/api";
import { MemberCard } from "@/components/equipe/member-card";
import { DepartmentFilter } from "@/components/equipe/department-filter";
import { PageHeader } from "@/components/page-header";
import { Member } from "@/cms/types";
import { SortFilter } from "@/components/equipe/sort-filter";

const departments = [
  { value: "direction-generale", label: "Direction Générale" },
  { value: "departement-pedagogique", label: "Dept. Pédagogique" },
  { value: "departement-interieur", label: "Dept. Intérieur" },
  { value: "departement-exterieur", label: "Dept. Extérieur" },
];

const sorters: { value: keyof Member; label: string }[] = [
  { value: "lastname", label: "Nom" },
  { value: "joinedAt", label: "Date d'arrivée" },
  { value: "rank", label: "Rang" },
];

type EquipePageSearchParams = {
  department: string | undefined;
  sort: keyof Member | undefined;
};

type EquipePageProps = {
  searchParams: EquipePageSearchParams;
};

function setFilterOptions(searchParams: EquipePageSearchParams) {
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

function setFilteredMembers(
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
      return a["lastname"] > b["lastname"] ? 1 : -1;
    });
  }

  return filteredMembers;
}

export default async function EquipePage({ searchParams }: EquipePageProps) {
  const members = await getMembers();

  const filterOptions = setFilterOptions(searchParams);
  const filteredMembers = setFilteredMembers(members, filterOptions);

  return (
    <main className="pb-24">
      <PageHeader>
        <div className="wrapper">
          <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between lg:w-full lg:items-end gap-8 xl:gap-16">
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="up-title-light">équipe</h3>
              <h5 className="title-light text-balance">
                Découvrez notre équipe de bénévoles.
              </h5>
            </div>
            <div className="hidden w-[1px]"></div>
            <div className="flex-1 flex flex-col">
              <p className="text-white leading-[1.75] lg:max-w-[32rem] ">
                Notre association est fière de compter sur une équipe dévouée de
                bénévoles passionnés, prêts à partager leurs connaissances et
                leur expérience pour soutenir notre mission.
              </p>
            </div>
          </div>
        </div>
      </PageHeader>

      <div className="relative mt-12 lg:mt-16 flex flex-col gap-8">
        <div className="wrapper flex justify-end">
          <SortFilter sorters={sorters} activeSort={filterOptions.sort} />
        </div>
        <DepartmentFilter
          departments={departments}
          activeDepartment={filterOptions.department}
        />
      </div>

      <div className="wrapper mt-8">
        <ul className="w-full grid gap-1 md:gap-2 grid-cols-1 md:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-4 auto-rows-fr">
          {filteredMembers.length &&
            filteredMembers.map((member) => (
              <MemberCard member={member} key={member.id} />
            ))}
        </ul>
      </div>
    </main>
  );
}
