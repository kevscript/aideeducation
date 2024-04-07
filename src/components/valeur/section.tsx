import { getValeurs } from "@/cms/api";
import { PageTitle } from "../page-title";
import { ValeurList } from "./list";
import { ValeurSlider } from "./slider";

// const valeurs = [
//   {
//     id: "1",
//     title: "Transmission",
//     description:
//       "Parce que nous souhaitons contribuer au partage des connaissances, chaque bénévole d’AideEducation s'engage à en assurer la transmission.",
//     iconUrl: undefined,
//   },
//   {
//     id: "2",
//     title: "Transmission",
//     description:
//       "Parce que nous souhaitons contribuer au partage des connaissances, chaque bénévole d’AideEducation s'engage à en assurer la transmission.",
//     iconUrl: undefined,
//   },
//   {
//     id: "3",
//     title: "Transmission",
//     description:
//       "Parce que nous souhaitons contribuer au partage des connaissances, chaque bénévole d’AideEducation s'engage à en assurer la transmission.",
//     iconUrl: undefined,
//   },
//   {
//     id: "4",
//     title: "Transmission",
//     description:
//       "Parce que nous souhaitons contribuer au partage des connaissances, chaque bénévole d’AideEducation s'engage à en assurer la transmission.",
//     iconUrl: undefined,
//   },
//   {
//     id: "5",
//     title: "Transmission",
//     description:
//       "Parce que nous souhaitons contribuer au partage des connaissances, chaque bénévole d’AideEducation s'engage à en assurer la transmission.",
//     iconUrl: undefined,
//   },
//   {
//     id: "6",
//     title: "Transmission",
//     description:
//       "Parce que nous souhaitons contribuer au partage des connaissances, chaque bénévole d’AideEducation s'engage à en assurer la transmission.",
//     iconUrl: undefined,
//   },
// ];

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
      <ValeurList valeurs={valeurs} />
    </section>
  );
}
