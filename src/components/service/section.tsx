import { PageTitle } from "../page-title";
import { ServiceCatalogue } from "./catalogue";
import { ServiceSlider } from "./slider";

const services = [
  {
    id: "1",
    title: "Aide aux devoirs",
    description:
      "Vous rencontrez des problèmes avec un devoir? Notre équipe pédagogique est prête à vous accompagner sur notre serveur Discord.",
    imgUrl: "/service-1.jpg",
  },
  {
    id: "2",
    title: "Fiches de révision",
    description:
      "Retrouvez des fiches de révisions sur Discord, pour vous accompagner dans votre apprentissage et faciliter vos préparations aux examens.",
    imgUrl: "/service-2.jpg",
  },
  {
    id: "3",
    title: "Débats et animations",
    description:
      "De nombreuses animations sont proposées régulièrement au sein de la communauté, tel que des débats ou des conférences.",
    imgUrl: "/service-3.jpg",
  },
  {
    id: "4",
    title: "Espace de travail",
    description:
      "Nous sommes engagés à vous assurer un environnement de travail bienveillant et sécurisé, propice à votre développement personnel et éducatif.",
    imgUrl: "/service-4.jpg",
  },
];

export function ServiceSection() {
  return (
    <section className="relative w-full md:py-24">
      <div className="wrapper mb-24">
        <div className="flex flex-nowrap justify-between w-full items-end gap-16">
          <div className="flex flex-col gap-4 max-w-[32rem] w-full">
            <h3 className="uppercase text-xs text-navy-900 font-semibold">
              Services
            </h3>
            <h5 className="font-display tracking-tighter text-5xl font-semibold">
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
