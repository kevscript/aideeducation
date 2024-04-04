import { ValeurList } from "./list";
import { ValeurSlider } from "./slider";

const valeurs = [
  {
    id: "1",
    title: "Transmission",
    description:
      "Parce que nous souhaitons contribuer au partage des connaissances, chaque bénévole d’AideEducation s'engage à en assurer la transmission.",
    iconUrl: undefined,
  },
  {
    id: "2",
    title: "Transmission",
    description:
      "Parce que nous souhaitons contribuer au partage des connaissances, chaque bénévole d’AideEducation s'engage à en assurer la transmission.",
    iconUrl: undefined,
  },
  {
    id: "3",
    title: "Transmission",
    description:
      "Parce que nous souhaitons contribuer au partage des connaissances, chaque bénévole d’AideEducation s'engage à en assurer la transmission.",
    iconUrl: undefined,
  },
  {
    id: "4",
    title: "Transmission",
    description:
      "Parce que nous souhaitons contribuer au partage des connaissances, chaque bénévole d’AideEducation s'engage à en assurer la transmission.",
    iconUrl: undefined,
  },
  {
    id: "5",
    title: "Transmission",
    description:
      "Parce que nous souhaitons contribuer au partage des connaissances, chaque bénévole d’AideEducation s'engage à en assurer la transmission.",
    iconUrl: undefined,
  },
  {
    id: "6",
    title: "Transmission",
    description:
      "Parce que nous souhaitons contribuer au partage des connaissances, chaque bénévole d’AideEducation s'engage à en assurer la transmission.",
    iconUrl: undefined,
  },
];

export function ValeurSection() {
  return (
    <section className="relative w-full py-16 xl:py-24 bg-gradient-to-b from-neutral-50 to-transparent">
      <div className="flex flex-col md:gap-16">
        <div className="lg:hidden w-full col-span-1 md:col-span-2 border border-neutral-100 md:border-none p-8 pt-0 flex flex-col gap-2">
          <p className="text-xl md:text-2xl lg:text-4xl font-bold tracking-tighter text-balance text-center lg:text-left">
            Ces{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-navy-700 to-navy-900">
              valeurs
            </span>{" "}
            nous accompagnent au quotidien.
          </p>
        </div>
        <ValeurSlider />
        <ValeurList valeurs={valeurs} />
      </div>
    </section>
  );
}
