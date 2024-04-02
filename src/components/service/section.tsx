import { ServiceCatalogue } from "./catalogue";
import { ServiceSlider } from "./slider";

const services = [
  {
    id: "1",
    title: "Aide aux devoirs",
    description:
      "Vous rencontrez des problèmes avec un devoir? Notre équipe pédagogique est prête à vous accompagner sur notre serveur Discord.",
    imgUrl: "https://source.unsplash.com/random/601x601",
  },
  {
    id: "2",
    title: "Fiches de révision",
    description:
      "Retrouvez des fiches de révisions sur Discord, pour vous accompagner dans votre apprentissage et faciliter vos préparations aux examens.",
    imgUrl: "https://source.unsplash.com/random/602x602",
  },
  {
    id: "3",
    title: "Débats et animations",
    description:
      "De nombreuses animations sont proposées régulièrement au sein de la communauté, tel que des débats ou des conférences.",
    imgUrl: "https://source.unsplash.com/random/603x603",
  },
  {
    id: "4",
    title: "Espace de travail",
    description:
      "Nous sommes engagés à vous assurer un environnement de travail bienveillant et sécurisé, propice à votre développement personnel et éducatif.",
    imgUrl: "https://source.unsplash.com/random/604x604",
  },
];

export function ServiceSection() {
  return (
    <section className="relative pt-16 pb-8 md:pb-16 lg:py-24 xl:py-24 w-full">
      <ServiceSlider services={services} />
      <ServiceCatalogue services={services} />
    </section>
  );
}
