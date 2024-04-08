import { PageHeader } from "@/components/page-header";
import { Tutorial } from "@/components/tutorial";
import { tutorials } from "@/components/tutorial/constants";

export default function TutorielPage() {
  return (
    <main className="pb-24">
      <PageHeader>
        <div className="wrapper">
          <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between lg:w-full lg:items-end gap-8 xl:gap-16">
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="up-title-light">Tutoriels</h3>
              <h5 className="title-light text-balance">
                Nous vous facilitons les démarches.
              </h5>
            </div>
            {/* <div className="hidden w-[1px]"></div> */}
            <div className="flex-1 flex flex-col">
              <p className="text-white leading-[1.75] lg:max-w-[32rem] ">
                Explorez nos tutoriels détaillés pour découvrir toutes les
                fonctionnalités et astuces qui vous permettront d&apos;optimiser
                votre expérience d&apos;apprentissage.
              </p>
            </div>
          </div>
        </div>
      </PageHeader>

      <div className="wrapper mt-12 lg:mt-16 flex flex-col gap-16">
        {tutorials.map((tutorial) => (
          <Tutorial key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>
    </main>
  );
}
