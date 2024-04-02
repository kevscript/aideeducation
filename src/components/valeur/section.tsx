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
    <section className="relative w-full py-16 xl:py-24 bg-neutral-50">
      <div className="flex flex-col gap-8 md:gap-16">
        <div className="wrapper flex justify-center text-center flex-col gap-2">
          <h3 className="text-navy-700 tracking-tight font-semibold">
            Nos Valeurs
          </h3>
          <p className="text-xl md:text-2xl lg:text-4xl font-semibold tracking-tighter">
            Elles nous accompagnent au quotidien.
          </p>
        </div>
        <ValeurSlider />
        <ValeurList valeurs={valeurs} />
      </div>
    </section>
  );
}
