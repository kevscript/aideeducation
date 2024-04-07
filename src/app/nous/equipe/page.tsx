import { getMembers } from "@/cms/api";
import { MemberCard } from "@/components/equipe/member-card";
import { DepartmentFilter } from "@/components/equipe/department-filter";
import { PageHeader } from "@/components/page-header";

export default async function EquipePage() {
  const members = await getMembers();

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

      <div className="relative mt-12 lg:mt-16">
        <DepartmentFilter />
      </div>

      <div className="wrapper mt-8">
        <ul className="w-full grid gap-1 md:gap-2 grid-cols-1 md:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-4 auto-rows-fr">
          {members.length &&
            members.map((member) => (
              <MemberCard member={member} key={member.id} />
            ))}
        </ul>
      </div>
    </main>
  );
}
