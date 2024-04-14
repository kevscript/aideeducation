import { getServices } from "@/cms/api";
import { ServiceCatalogue } from "./catalogue";
import { ServiceSlider } from "./slider";

export async function ServiceSection() {
  const services = await getServices();

  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full md:py-24 py-16">
      <div className="wrapper mb-8 lg:mb-24">
        <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between w-full lg:items-end gap-8 lg:gap-16">
          <div className="flex flex-col gap-4 max-w-[32rem] w-full">
            <h3 className="up-title-dark">Services</h3>
            <h5 className="title-dark">
              Un soutien sur mesure adapté à vos besoins.
            </h5>
          </div>

          <div className="max-w-[32rem] w-full flex flex-col">
            <p className="text-neutral-500 leading-[1.75]">
              Transformez les défis scolaires en opportunités
              d&apos;apprentissage avec nos services personnalisés, adaptés aux
              besoins uniques de chaque étudiant.
            </p>
          </div>
        </div>
      </div>
      <ServiceSlider services={services} />
      <ServiceCatalogue services={services} />
    </section>
  );
}
