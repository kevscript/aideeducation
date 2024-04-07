import { getAssociation } from "@/cms/api";
import { PageHeader } from "@/components/page-header";
import Link from "next/link";

export default async function AssociationPage() {
  const association = await getAssociation();

  return (
    <main className="pb-24">
      <PageHeader>
        <div className="wrapper">
          <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between lg:w-full lg:items-end gap-8 xl:gap-16">
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="up-title-light">Association</h3>
              <h5 className="title-light">
                Qu&apos;est-ce qu&apos;AideEducation?
              </h5>
            </div>
            {/* <div className="hidden lg:block w-[1px]"></div>
            <div className="flex-1 flex flex-col">
              <p className="text-white leading-[1.75] lg:max-w-[32rem] ">
                Notre association est fière de compter sur une équipe dévouée de
                bénévoles passionnés, prêts à partager leurs connaissances et
                leur expérience pour soutenir notre mission.
              </p>
            </div> */}
          </div>
        </div>
      </PageHeader>

      <div className="wrapper mt-16">
        <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between w-full gap-8 xl:gap-16 h-fit">
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <p className="max-w-prose leading-[1.75] whitespace-pre-wrap">
                {association.presentation}
              </p>
            </div>
          </div>

          <div className="hidden lg:block w-[1px] bg-neutral-100"></div>

          <Link
            href={"/nous/equipe"}
            className="max-w-96 w-full bg-white hover:bg-neutral-50 cursor-pointer card-shadow rounded-tr-2xl rounded-bl-2xl p-8 gap-4 flex flex-col h-fit"
          >
            <div className="relative flex flex-nowrap">
              <div className="w-16 h-16 rounded-full bg-gradient-to-bl from-navy-700 to-navy-900 border-2 border-white"></div>
              <div className="absolute top-0 left-[40px] w-16 h-16 rounded-full bg-gradient-to-bl from-navy-700 to-navy-900 border-2 border-white"></div>
              <div className="absolute top-0 left-[80px] w-16 h-16 rounded-full bg-gradient-to-bl from-navy-700 to-navy-900 border-2 border-white"></div>
            </div>

            <p className="shrink-0">Découvrez nos bénévoles.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
