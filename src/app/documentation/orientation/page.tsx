import { getOrientations } from "@/cms/api";
import { PageHeader } from "@/components/page-header";

export default async function OrientationPage() {
  const orientations = await getOrientations();

  return (
    <main className="pb-24">
      <PageHeader>
        <div className="wrapper">
          <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between lg:w-full lg:items-end gap-8 xl:gap-16">
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="up-title-light">Orientation</h3>
              <h5 className="title-light">Ils accompagnent vos démarches.</h5>
            </div>
            <div className="hidden w-[1px]"></div>
            <div className="flex-1 flex flex-col">
              <p className="text-white leading-[1.75] lg:max-w-[32rem] ">
                Explorez notre séléction de ressources pour vous accompagner
                dans votre orientation scolaire et prendre des décisions
                éclairées sur votre avenir académique.
              </p>
            </div>
          </div>
        </div>
      </PageHeader>

      <div className="wrapper mt-12 lg:mt-16">
        <ul className="grid grid-col-1 lg:grid-cols-2 gap-8 xl:gap-x-16">
          {orientations &&
            orientations.map((o, i) => (
              <li key={i} className="w-full card p-8 flex flex-col gap-8">
                <div className="w-16 h-16 rounded-full bg-neutral-100"></div>

                <div className="flex flex-col gap-4">
                  <h5 className="text-2xl font-semibold tracking-tighter text-navy-900">
                    {o.name}
                  </h5>
                  <div className="flex flex-col gap-2">
                    <p className="leading-[1.75] text-neutral-500 whitespace-pre-wrap">
                      {o.description}
                    </p>
                  </div>
                </div>

                {o.links && (
                  <ul className="flex flex-wrap gap-4">
                    {o.links.map((l) => (
                      <a
                        key={l.id}
                        className="py-2 px-4 bg-navy-50 flex justify-center items-center rounded cursor-pointer"
                        href={l.link}
                        target="_blank"
                      >
                        <span className="text-navy-700 text-sm tracking-tight">
                          {l.label}
                        </span>
                      </a>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}
