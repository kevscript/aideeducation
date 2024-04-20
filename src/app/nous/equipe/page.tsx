import { getMembers } from "@/cms/api";
import { MemberCard } from "@/components/equipe/member-card";
import { PageHeader } from "@/components/page-header";
import { Member } from "@/cms/types";
import { departments } from "@/components/equipe/constants";
import { LogoIcon } from "@/components/icons/logo";
import { sortMembersByDepartment } from "@/components/equipe/utils";

export type EquipePageSearchParams = {
  department: string | undefined;
  sort: keyof Member | undefined;
};

type EquipePageProps = {
  searchParams: EquipePageSearchParams;
};

export default async function EquipePage() {
  const members = await getMembers();
  const membersByDepartment =
    members && members.length ? sortMembersByDepartment(members) : null;

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

      {members && members.length && (
        <>
          {membersByDepartment && (
            <div className="relative mt-12 lg:mt-16 flex flex-col">
              <ul className="wrapper flex flex-col gap-16 lg:gap-24">
                {departments
                  .sort((a, b) => (a.order > b.order ? 1 : -1))
                  .map((department) => (
                    <div key={department.value} className="flex flex-col gap-8">
                      <div className="flex flex-nowrap gap-4 lg:gap-8 items-center">
                        <div className="flex-1 h-[1px] bg-navy-700 w-full"></div>
                        <h5 className="font-semibold text-navy-900 text-lg lg:text-2xl tracking-tighter">
                          {department.label}
                        </h5>
                        <div className="flex-1 h-[1px] bg-navy-700 w-full"></div>
                      </div>
                      <ul className="w-full grid gap-1 md:gap-2 grid-cols-1 md:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-4 auto-rows-fr">
                        {membersByDepartment[department.value]
                          .sort((a, b) => (a.rank > b.rank ? -1 : 1))
                          .map((member) => (
                            <MemberCard key={member.id} member={member} />
                          ))}
                      </ul>
                    </div>
                  ))}
              </ul>
            </div>
          )}
        </>
      )}

      {(!members || members.length === 0) && (
        <div className="wrapper bg-neutral-50 rounded-2xl flex justify-center items-center gap-8 flex-col p-16 mt-12 lg:mt-16">
          <LogoIcon className="fill-neutral-200 w-16 h-16" />
          <p>Cette page rencontre quelques soucis actuellement :(</p>
        </div>
      )}
    </main>
  );
}
