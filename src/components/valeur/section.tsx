import { getValeurs } from "@/cms/api";
import { ValeurSlider } from "./slider";

export async function ValeurSection() {
  const valeurs = await getValeurs();
  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b lg:bg-transparent from-transparent to-neutral-50">
      <div className="wrapper mb-8 lg:mb-16">
        <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between w-full lg:items-end gap-8 lg:gap-16">
          <div className="flex flex-col gap-4 max-w-[32rem] w-full">
            <h3 className="up-title-dark">Valeurs</h3>
            <h5 className="title-dark">Les piliers de notre communauté.</h5>
          </div>

          <div className="max-w-[32rem] w-full flex flex-col">
            <p className="text-neutral-500 leading-[1.75]">
              Guidés par nos valeurs, nous œuvrons chaque jour à créer un
              environnement où l&apos;empathie et le respect sont au cœur de
              chaque interaction.
            </p>
          </div>
        </div>
      </div>

      <ValeurSlider valeurs={valeurs} />
    </section>
  );
}
