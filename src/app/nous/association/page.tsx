import { getAssociation } from "@/cms/api";
import { DiscoverMembers } from "@/components/association/discover-members";
import { AssociationTimeline } from "@/components/association/timeline";
import { LogoIcon } from "@/components/icons/logo";
import { PageHeader } from "@/components/page-header";

export default async function AssociationPage() {
  const association = await getAssociation();

  return (
    <main className="pb-24">
      <PageHeader>
        <div className="wrapper mb-8 lg:mb-16">
          <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between lg:w-full lg:items-end gap-8 xl:gap-16">
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="up-title-light">Association</h3>
              <h5 className="title-light">
                Qu&apos;est-ce qu&apos;AideEducation?
              </h5>
            </div>
          </div>
        </div>
      </PageHeader>

      {association ? (
        <>
          {association.events && association.events.length && (
            <div className="relative -translate-y-8">
              <AssociationTimeline events={association.events} />
            </div>
          )}

          <div className="wrapper mt-0 lg:mt-16">
            <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between w-full gap-8 xl:gap-16 h-fit">
              <div className="flex-1">
                <div className="flex flex-col gap-4">
                  <p className="max-w-prose leading-[1.75] whitespace-pre-wrap">
                    {association.presentation}
                  </p>
                </div>
              </div>

              <div className="hidden lg:block w-[1px] bg-neutral-100"></div>

              <DiscoverMembers />
            </div>
          </div>
        </>
      ) : (
        <div className="wrapper bg-neutral-50 rounded-2xl flex justify-center items-center gap-8 flex-col p-16">
          <LogoIcon className="fill-neutral-200 w-16 h-16" />
          <p>Cette page rencontre quelques soucis actuellement :(</p>
        </div>
      )}
    </main>
  );
}
