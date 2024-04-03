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
        <ValeurSlider />
        <ValeurList valeurs={valeurs} />
      </div>
    </section>
  );
}
